# SunPro Energy Ltd. — Waitlist Site

## What's in this folder
- `index.html` — the public landing page (hero, how-it-works, founder, video, waitlist form)
- `admin.html` — password-gated page to view submitted leads
- `assets/` — logo, product photos, and showcase video

## 1. Push to your GitHub repo
```bash
git clone https://github.com/sunproenergyltd-hub/sunpro-energy-ng
cd sunpro-energy-ng
# copy index.html, admin.html, and the assets/ folder into this directory
git add .
git commit -m "Add waitlist landing page with admin view"
git push
```

## 2. Turn on lead delivery (required — do this before going live)
The form currently saves leads to the visitor's own browser only. To get every
lead emailed to you from any visitor's device:
1. Go to [web3forms.com](https://web3forms.com) and sign up free with your email.
2. Copy the **Access Key** it gives you.
3. Open `index.html`, find this line near the bottom:
   ```js
   const WEB3FORMS_ACCESS_KEY = "PASTE-YOUR-WEB3FORMS-ACCESS-KEY-HERE";
   ```
4. Replace the placeholder text with your real key, save, and push the change.

Once that's set, **Web3Forms's own dashboard becomes your reliable, cross-device
list of every lead** — treat it as your real admin record. `admin.html` is a
bonus quick-view but only shows leads submitted from that same browser/device,
since a static site has no shared database by default.

## 3. Change the admin passcode
In `admin.html`, find:
```js
const PASSCODE = "sunpro2026";
```
Change it to something only you know before publishing.

## 4. Host it
- **GitHub Pages**: repo Settings → Pages → deploy from `main` branch. Free, instant URL.
- **Netlify**: drag the folder into netlify.com/drop for a live link in seconds.

## 5. Business details already in the site
- Logo: `assets/logo.jpg` (used in the nav and footer)
- Founder photo: `assets/founder.jpg` (Ewesi Kenechukwu, Founder)
- Product photos: `assets/product-battery-inverter.jpg`, `assets/product-inverter-lineup.jpg`
- Showcase video: `assets/sunpro-showcase.mp4`
- Footer: © 2026 SunPro Energy Ltd. · 210 Ikwerre Road, Port Harcourt, Rivers State · 0810 310 4270

## Note on the video file
`sunpro-showcase.mp4` is ~10MB. GitHub allows it, but for faster load times
later, consider compressing it or hosting it on YouTube/Cloudinary and
swapping the `<video>` source for an embed.
