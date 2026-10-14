---
title: "How to build a website: a complete step-by-step guide"
description: "How to build a website from scratch: the seven real steps, what each option costs, when to do it yourself or hire someone, and a short intro to building it with HTML."
seoTitle: "How to Build a Website Step by Step | ProCode Systems"
seoDescription: "How to build a website from scratch in seven steps: domain, hosting, platform, content and launch. With real costs and when it makes sense to hire."
pubDate: 2026-10-13
author: "ProCode Systems"
tags: ["how to build a website", "how to make a website", "create a website", "website with HTML"]
translationOf: "como-crear-pagina-web"
related: ["webDev", "landingPages", "pricing", "maintenance"]
---

Search **how to build a website** and you get two kinds of results: tutorials that end with "and that's it, your site is live," and agencies that won't tell you the price until you book a call. This guide is what I explain to anyone who asks me that question, including the cases where building it yourself is the right call.

## Before step one: what the site is for

It's the question almost nobody answers, and it decides everything else. A site that exists so people find you on Google needs several pages and real content. One that exists to catch traffic from your ads needs one page and a button. One that exists because a customer asked for "your website" needs very little.

Write one line about what you want a visitor to do: call, text, book, request a quote, buy. If you can't write it, it's not time to choose a platform yet.

## Step 1: the domain

The domain is your address: `yourbusiness.com`. It costs about **$12–$20 a year** at any serious registrar.

Three rules that save headaches:

- **Buy it yourself, in your name.** If someone else registers it "to help you," the day you lose touch you lose your address.
- **.com if it's available.** People type it by default.
- **Short and easy to say over the phone.** If you have to spell it twice, change it.

## Step 2: hosting

Hosting is where the site lives. For a normal small business site, expect **$50–$120 a year**. Same rule: in your name, on your card.

A shared plan from <a href="https://www.hostinger.com/?REFERRALCODE=CristianDev" rel="sponsored nofollow noopener" target="_blank">Hostinger</a> is plenty for most business sites; it's what I use for the sites I deliver. Whatever you choose, check that it includes an SSL certificate, automatic backups and servers near your customers.

> **Disclosure:** the Hostinger link is an affiliate link. If you sign up there, I earn a commission at no extra cost to you. I recommend it because it's where I host the sites I build and where I check performance every month.

If you choose a builder (Wix, Squarespace, Shopify), hosting is included in the monthly fee and you don't have to think about it.

## Step 3: choose how you'll build it

This decides most of the result. Three paths, with real numbers:

| Path | Cost | Your time | Best for |
|---|---|---|---|
| Visual builder (Wix, Squarespace) | $16–$40/month | 15–40 hours | More time than budget |
| WordPress with a theme | $100–$400 to start | 30–60 hours | People who know it or have someone to maintain it |
| Custom, with someone | From $349 one-time | 3–5 hours of yours | People who'd rather pay than do it |

To compare builders one by one, see [the best website builders compared](/en/blog/best-website-builders/). If you're unsure whether one page is enough, start with [landing page vs. website](/en/blog/landing-page-vs-website/).

There's no right answer for everyone. If your business is just starting and money is the constraint, a builder is a smart decision: you publish this week. If time is the constraint (you have jobs to run and you won't learn web design between quotes), paying for it is cheaper than it looks once you count your hours.

## Step 4: structure

The most common mistake is copying the structure of a big company. A typical service business needs five things:

1. **Home:** what you do, for whom and where, on the first screen.
2. **One page per service:** not a single "Services" page with a list. Each service is searched with different words.
3. **Proof:** finished work, real photos, reviews with names.
4. **About:** with your face. In services, people hire people.
5. **Contact:** with phone and text visible, not hidden behind a form.

If you serve a specific area, name it: the city and the surrounding towns you cover.

## Step 5: content

This is where almost every project stalls, including mine. Practical advice: don't write "website copy." Answer, in writing, the ten questions customers ask you most on the phone. That's most of your content, in your customers' own words.

For photos, real shots of your work taken on a phone in good light beat stock photos every time. People notice the difference even if they can't explain it.

## Step 6: fast and usable on a phone

More than half your visitors will arrive on a phone, often on mobile data and with no patience. Before you publish:

- Open the site on your phone with Wi-Fi off.
- Compress images. A 4 MB photo straight from the camera is the number one reason sites are slow.
- Test the call button and the form. Make sure the message actually reaches you.

More on that in [what responsive web design really means](/en/blog/responsive-web-design/).

## Step 7: launch and measure

Launching isn't the end. The minimum on day one:

- **Google Search Console** connected and your sitemap submitted, so Google knows you exist.
- **Analytics** installed, even if you only look once a month.
- **Your Google Business Profile** created and linked to the site. For a local business it often brings more calls than the website in year one. Here's [how to show up on Google Maps](/en/blog/how-to-show-up-on-google-maps/).

## The code route: building a website with HTML

If you want to understand what's behind any site, or you'll maintain one yourself, **building a website with HTML** is the best way to learn. Two hours gets you something online, and you don't need to pay for anything: a text editor (Visual Studio Code is free), a browser, and a folder with a file named `index.html`.

### The minimum structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Ramirez Plumbing | Same-Day Service in Houston</title>
    <meta name="description" content="Residential plumbing in Houston. Same-day emergency service." />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>…</header>
    <main>
      <h1>Residential plumbing in Houston</h1>
      <section>…</section>
    </main>
    <footer>…</footer>
  </body>
</html>
```

The lines most tutorials skip are the ones that matter:

- `lang="en"` tells browsers and Google what language the page is in.
- The `viewport` tag is the only thing that makes the site look right on a phone.
- `title` and `description` are what shows up in Google. Keep the title under 60 characters.
- **One `h1` per page**, and headings in order (`h2`, then `h3`). Search engines and screen readers use that hierarchy.
- Every `<img>` gets an `alt` with a real description.

### CSS and phones

Design for the small screen first, then expand:

```css
:root { --accent: #0b5cff; }
body { margin: 0; font-family: system-ui, sans-serif; line-height: 1.6; }
.services { display: grid; gap: 16px; }
@media (min-width: 768px) {
  .services { grid-template-columns: repeat(3, 1fr); }
}
```

On a phone everything stacks; from 768 pixels up it spreads into three columns.

### Publishing for free, and where this path ends

Upload the folder to a GitHub repository and turn on GitHub Pages: a public address in minutes, and a domain can be connected later without rebuilding anything.

Hand-written HTML works well for a one-to-five page site that rarely changes. It starts to hurt when you have to edit the menu on ten pages one by one, need a form that sends email (HTML alone sends nothing), or want a blog. That's where people move to a static site generator like Astro, which is what I build with, and why the sites I deliver load fast.

## How long it really takes

- On your own with a builder: two to six weekends, if you don't abandon it halfway.
- Custom, with someone: two to four weeks, of which you spend about three hours.

The timeline is rarely decided by the developer. It's decided by how long the owner takes to send text and photos.

If you want the version for a business that's already running (which sections it needs, how much to invest, when free is enough), it's in [how to create a website for your business](/en/blog/free-website-for-small-business/).

## When hiring is worth it

If two or more of these apply, building it yourself will cost more in time than paying for it:

- Your hourly rate is higher than the project price divided by the hours it would take you.
- You've tried before and the site has been "almost ready" for months.
- You need the site to show up on Google, not just exist.
- You sell in two languages (see [why translation plugins cost you clients](/en/blog/bilingual-website-english-spanish/)).

---

**If you'd rather not do it yourself:** prices are published, no sales call required: a [landing page from $349](/en/services/landing-pages/) and a 4–6 page website from $899. See [how I build websites](/en/services/web-development/) or go straight to [pricing](/en/pricing/).
