<?php
/*
  Asistente ProCode — intermediario con la IA (septiembre de 2026, 30).

  El sitio es estático (Hostinger por FTP), así que la clave de la API NO
  puede vivir en el navegador. Este archivo es el único punto que habla con
  la IA: recibe la conversación del chat (ChatBot.astro), le añade el
  contexto del sitio y devuelve la respuesta.

  Funciona con cualquier proveedor compatible con la API de chat de OpenAI
  (OpenAI, DeepSeek, Google Gemini, Groq, OpenRouter…): solo cambian la
  URL, el modelo y la clave en el archivo de configuración.

  CONFIGURACIÓN (una sola vez, en Hostinger, fuera de public_html):
    Crear el archivo  <carpeta del dominio>/private/procode-chat-config.php
    (el mismo nivel que public_html, NO dentro) con este contenido:

      <?php
      return [
        'api_key'   => 'sk-...',
        'api_url'   => 'https://api.openai.com/v1/chat/completions',
        'model'     => 'gpt-4o-mini',
        'json_mode' => true,   // false si el proveedor rechaza response_format
      ];

    Ejemplos de api_url (verificar modelo vigente en cada proveedor):
      OpenAI    https://api.openai.com/v1/chat/completions
      DeepSeek  https://api.deepseek.com/chat/completions
      Gemini    https://generativelanguage.googleapis.com/v1beta/openai/chat/completions
      Groq      https://api.groq.com/openai/v1/chat/completions
      OpenRouter https://openrouter.ai/api/v1/chat/completions

    Como alternativa, la variable de entorno CHAT_API_KEY.
    La clave nunca se sube al repositorio ni al navegador.

  PROTECCIONES:
    · Solo POST y solo desde procodedev.com.
    · Límite por visitante (IP con hash): 12 mensajes cada 10 minutos y 40
      al día. Evita que alguien dispare la factura.
    · Mensajes recortados a 500 caracteres y solo los 10 últimos turnos.
    · Respuesta limitada en longitud. Además, pon un límite mensual de
      gasto en el panel del proveedor (en OpenAI: Settings → Limits).

  CONTEXTO: la IA solo puede usar la información del sitio, que Astro
  genera en el build en /chatbot/<lang>.json (preguntas frecuentes y
  fichas de cada servicio, industria y mercado). Si algo cambia en el
  sitio, el siguiente deploy actualiza lo que sabe el asistente.
*/

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function reply_json(int $status, array $body): void {
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

// ── Método y origen ────────────────────────────────────────────────────
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    reply_json(405, ['error' => 'method']);
}
$allowedHosts = ['procodedev.com', 'www.procodedev.com'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? ($_SERVER['HTTP_REFERER'] ?? '');
$originHost = $origin ? (parse_url($origin, PHP_URL_HOST) ?: '') : '';
if ($originHost !== '' && !in_array(strtolower($originHost), $allowedHosts, true)) {
    reply_json(403, ['error' => 'origin']);
}

// ── Configuración ──────────────────────────────────────────────────────
$config = [];
$configPath = dirname(__DIR__, 2) . '/private/procode-chat-config.php';
if (is_file($configPath)) {
    $loaded = include $configPath;
    if (is_array($loaded)) $config = $loaded;
}
$apiKey = $config['api_key'] ?? ($config['openai_api_key'] ?? (getenv('CHAT_API_KEY') ?: ''));
$apiUrl = $config['api_url'] ?? 'https://api.openai.com/v1/chat/completions';
$jsonMode = (bool) ($config['json_mode'] ?? true);
$model = $config['model'] ?? 'gpt-4o-mini';
if ($apiKey === '') {
    reply_json(503, ['error' => 'not_configured']);
}

// ── Límite de uso por visitante ────────────────────────────────────────
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$bucket = sys_get_temp_dir() . '/pcd_chat_' . hash('sha256', $ip . '|procode');
$now = time();
$hits = [];
if (is_file($bucket)) {
    $raw = @file_get_contents($bucket);
    $hits = $raw ? (json_decode($raw, true) ?: []) : [];
}
$hits = array_values(array_filter($hits, fn($t) => is_int($t) && $t > $now - 86400));
$recent = count(array_filter($hits, fn($t) => $t > $now - 600));
if ($recent >= 12 || count($hits) >= 40) {
    reply_json(429, ['error' => 'rate_limited']);
}
$hits[] = $now;
@file_put_contents($bucket, json_encode($hits), LOCK_EX);

// ── Entrada ────────────────────────────────────────────────────────────
$input = json_decode((string) file_get_contents('php://input'), true);
if (!is_array($input)) reply_json(400, ['error' => 'bad_json']);
$lang = ($input['lang'] ?? 'es') === 'en' ? 'en' : 'es';
$page = substr(preg_replace('~[^a-zA-Z0-9/_\-]~', '', (string) ($input['page'] ?? '/')), 0, 120);
$history = [];
foreach (array_slice((array) ($input['messages'] ?? []), -10) as $m) {
    if (!is_array($m)) continue;
    $role = ($m['role'] ?? '') === 'assistant' ? 'assistant' : 'user';
    $text = trim(strip_tags((string) ($m['content'] ?? '')));
    if ($text === '') continue;
    $history[] = ['role' => $role, 'content' => mb_substr($text, 0, 500)];
}
if (!$history || end($history)['role'] !== 'user') {
    reply_json(400, ['error' => 'no_question']);
}

// ── Contexto del sitio (generado por Astro en el build) ────────────────
$kbPath = dirname(__DIR__) . '/chatbot/' . $lang . '.json';
$kb = is_file($kbPath) ? (json_decode((string) file_get_contents($kbPath), true) ?: []) : [];
$context = '';
foreach ($kb as $e) {
    $context .= "P: " . ($e['q'] ?? '') . "\nR: " . ($e['a'] ?? '') . "\nPágina: https://procodedev.com" . ($e['url'] ?? '') . "\n\n";
}

$es = $lang === 'es';
$system = $es
    ? <<<'TXT'
Eres el asistente del sitio web de ProCode Dev, la agencia de diseño web y marketing digital de Cristian Posada (desarrollador web con 5 años de experiencia, trabaja con negocios de Estados Unidos y México, en español e inglés).

REGLAS:
1. Responde SOLO con la información del CONTEXTO de abajo. Si algo no está en el contexto (un precio, un plazo, una garantía, un cliente, una política), di que no lo tienes confirmado y ofrece que Cristian lo responda. Nunca inventes cifras, clientes, resultados ni promesas.
2. Responde en español, en tono cercano y profesional, en 2 a 4 frases (máximo unas 80 palabras). Sin markdown, sin listas largas.
3. Tu objetivo es ayudar y guiar al siguiente paso: agendar la Revisión Express (gratis, 20 minutos), dejar nombre y correo para recibir más información, o escribir a Cristian por WhatsApp. Sugiere el paso que tenga sentido, sin presionar.
4. Si preguntan algo que no tiene que ver con ProCode, sus servicios o páginas web y marketing para negocios, dilo con amabilidad y vuelve al tema.
5. No pidas datos personales dentro del chat; para eso está el formulario.

Devuelve SIEMPRE un objeto JSON con esta forma exacta:
{"reply": "tu respuesta", "actions": ["book"]}
"actions" es una lista de 0 a 3 elementos elegidos SOLO de: "book" (agendar Revisión Express), "info" (formulario de más información), "whatsapp" (escribir a Cristian), "pricing" (página de precios), "services" (página de servicios), "portfolio" (portafolio).
TXT
    : <<<'TXT'
You are the website assistant for ProCode Dev, the web design and digital marketing agency run by Cristian Posada (web developer with 5 years of experience, working with businesses in the United States and Mexico, in English and Spanish).

RULES:
1. Answer ONLY with the information in the CONTEXT below. If something is not in the context (a price, a timeline, a guarantee, a client, a policy), say you do not have it confirmed and offer to have Cristian answer. Never make up figures, clients, results or promises.
2. Answer in English, friendly and professional, in 2 to 4 sentences (about 80 words at most). No markdown, no long lists.
3. Your goal is to help and guide to the next step: book the Express Review (free, 20 minutes), leave a name and email to get more information, or message Cristian on WhatsApp. Suggest the step that makes sense, without pressure.
4. If asked about something unrelated to ProCode, its services, or websites and marketing for businesses, say so kindly and steer back.
5. Do not ask for personal data inside the chat; the form is for that.

ALWAYS return a JSON object with exactly this shape:
{"reply": "your answer", "actions": ["book"]}
"actions" is a list of 0 to 3 items chosen ONLY from: "book" (book the Express Review), "info" (more-information form), "whatsapp" (message Cristian), "pricing" (pricing page), "services" (services page), "portfolio" (portfolio).
TXT;

$system .= "\n\n" . ($es ? "El visitante está en la página: " : "The visitor is on page: ") . $page;
$system .= "\n\nCONTEXTO / CONTEXT:\n" . $context;

// ── Llamada a la IA ─────────────────────────────────────────────────────
$payload = [
    'model' => $model,
    'temperature' => 0.3,
    'max_tokens' => 350,
    'messages' => array_merge([['role' => 'system', 'content' => $system]], $history),
];
if ($jsonMode) $payload['response_format'] = ['type' => 'json_object'];

$ch = curl_init($apiUrl);
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 25,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $apiKey,
    ],
    CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE),
]);
$res = curl_exec($ch);
$status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($res === false || $status < 200 || $status >= 300) {
    reply_json(502, ['error' => 'upstream']);
}

$data = json_decode((string) $res, true);
$content = $data['choices'][0]['message']['content'] ?? '';
// Algunos proveedores envuelven el JSON en ```json … ```: se limpia antes.
$clean = trim((string) preg_replace('~^```(?:json)?\s*|\s*```$~', '', trim((string) $content)));
$parsed = json_decode($clean, true);
$text = is_array($parsed) ? trim((string) ($parsed['reply'] ?? '')) : trim((string) $content);
if ($text === '') reply_json(502, ['error' => 'empty']);

$allowed = ['book', 'info', 'whatsapp', 'pricing', 'services', 'portfolio'];
$actions = [];
if (is_array($parsed) && isset($parsed['actions']) && is_array($parsed['actions'])) {
    foreach ($parsed['actions'] as $a) {
        if (is_string($a) && in_array($a, $allowed, true) && !in_array($a, $actions, true)) $actions[] = $a;
    }
}

reply_json(200, [
    'reply' => mb_substr(strip_tags($text), 0, 1200),
    'actions' => array_slice($actions, 0, 3),
]);
