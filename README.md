# SunPro Energy Ltd. — Website

A lead-generation website for SunPro Energy: product catalog (itel live, LG & Cworth ready to fill in), a
questionnaire-based quote tool, maintenance & partnership request forms, a newsletter signup, live chat,
and an admin panel to see everything that comes in.

No build tools, frameworks or server are required — it's plain HTML/CSS/JS, so it can be hosted anywhere
that serves static files.

## 1. Preview it right now
Unzip the folder and double-click `index.html` — it opens in your browser immediately. (A couple of
things — the newsletter form, WhatsApp links, chat widget — only fully work once it's on a real
address, described below.)

## 2. Put it online (free) — GitHub Pages
1. Create a free GitHub account at github.com if you don't have one.
2. Create a new repository, e.g. `sunpro-energy-website`.
3. Upload every file in this folder into that repository (drag-and-drop works on github.com, or use
   GitHub Desktop / `git push` if you're comfortable with git).
4. In the repository, go to **Settings → Pages**, set branch to `main` and folder to `/ (root)`, save.
5. After a minute, your site is live at `https://<your-username>.github.io/sunpro-energy-website/`.

**Alternative (also free, and easier for non-technical updates): Netlify**
1. Go to netlify.com → "Add new site" → "Deploy manually".
2. Drag the whole project folder onto the upload box.
3. Netlify gives you a live link immediately (e.g. `sunpro-energy.netlify.app`) and lets you drag-and-drop
   a new version any time you want to update the site.

## 3. Get a domain, then set up subdomains
Once you buy a domain (e.g. from Namecheap, Whogohost, or a Nigerian registrar), point it at your host
(GitHub Pages or Netlify — both have simple "custom domain" instructions in their dashboards). Then create
these subdomains in your domain's DNS settings for the workflows you mentioned:

| Subdomain | Suggested use |
|---|---|
| `www.yourdomain.com` | Main public website (this project) |
| `app.yourdomain.com` | Customer sign-up / billing portal (build this later as its own app) |
| `shop.yourdomain.com` | Alternative if you later add real checkout/payment |
| `mkt.yourdomain.com` | Marketing campaign pages / landing pages for ads |

Subdomains are added as CNAME (Netlify/GitHub Pages) or A records in your registrar's DNS panel — each
host's docs walk through the exact steps once you're at that stage.

## 4. Turn on real lead delivery (recommended before going live)
Right now, every form submission is saved in the visitor's **own browser** (`localStorage`) so the Admin
panel works instantly for testing. But that means if a customer named Ada fills the form on her phone,
you won't see it in the Admin panel on your laptop unless you also connect one of these (free):

**Option A — Formspree (simplest, sends you an email per lead)**
1. Go to formspree.io → create a free account → create a new form.
2. Copy the endpoint it gives you (looks like `https://formspree.io/f/xxxxxxx`).
3. Paste it into `js/config.js` → `formEndpoint`.

**Option B — Google Sheets (a shared "database" your team can see)**
1. Create a Google Sheet, then Extensions → Apps Script.
2. Add a small script that accepts POST requests and appends a row (many free tutorials titled
   "Google Sheets as a database with Apps Script Web App" walk through this in ~10 minutes).
3. Deploy it as a Web App, copy the URL, paste into `js/config.js` → `sheetsWebhook`.

Either option means every lead reaches you centrally, in addition to still showing in the local Admin
panel and being sent as a pre-filled WhatsApp message.

## 5. Turn on full live chat (optional)
The chat bubble works out of the box with a lightweight built-in FAQ + "hand off to WhatsApp" flow — zero
setup needed. If you'd rather have a real agent inbox (see visitor typing, chat history, multiple staff):
1. Create a free account at tawk.to.
2. Copy your Property ID and Widget ID from their dashboard.
3. Paste them into `js/config.js` → `tawkPropertyId` / `tawkWidgetId`. The site will automatically load
   the full Tawk.to widget instead of the built-in one.

## 6. Admin panel
- URL: `/pages/admin.html`
- Default password: `sunpro2026` — **change this immediately** in `js/config.js` → `adminPassword`.
- This is a lightweight client-side gate, fine for keeping casual visitors out of a small internal tool,
  but it is **not** bank-grade security. Don't store highly sensitive data here long-term — once the
  business grows, migrate to a real backend with proper authentication (a developer can help wire the
  same UI to a database instead of localStorage in a day or two of work).

## 7. Adding a new brand's product catalog
Everything product-related lives in one file: `js/products-data.js`. To add a brand (e.g. finish off LG
or Cworth once you have their pricing):
1. Send the brand's product page link(s) to whoever maintains this site.
2. They copy an existing brand block in `products-data.js`, give it a new `id`, and list out each
   product's name, category, specs, image and price, following the pattern already there for itel.
3. Save and re-deploy (drag-and-drop again on Netlify, or push to GitHub) — the Products page, homepage
   brand strip, and questionnaire brand dropdown all update automatically.

## 8. SEO basics included
- `sitemap.xml` and `robots.txt` are in the root folder — after deploying, submit the sitemap URL in
  Google Search Console (Settings → Sitemaps) so pages get indexed.
- Update the placeholder domain (`sunproenergyltd.com`) inside `sitemap.xml`, `robots.txt`, and the
  `<link rel="canonical">` tag on each page once you have your real domain.

## File map
```
index.html                 Homepage
pages/products.html        Product catalog (all brands)
pages/questionnaire.html   Lead-gen questionnaire / quote tool
pages/maintenance.html     Book a maintenance specialist
pages/partnership.html     Bulk / installer / big-project enquiries
pages/about.html           Contact details & general enquiry form
pages/admin.html           Password-protected leads dashboard
js/config.js               Business details & integration switches — edit this first
js/products-data.js        Product catalog data — edit to add/update products
js/lead-store.js           Shared lead-saving logic
js/main.js                 Shared site behaviour (nav, chat, newsletter)
css/style.css              Shared design system
sitemap.xml, robots.txt    SEO files
```
