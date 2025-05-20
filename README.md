# Mrwain Organization Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-NETLIFY-BADGE-ID/deploy-status)](https://www.netlify.com)

The **Mrwain Organization** website ([https://www.mrwain.xyz/](https://www.mrwain.xyz/)) is a modern, mobile-optimized platform that showcases our mission to empower the Pi ecosystem through secure custodial wallets, transparent ledgers, and innovative DApps. Built with HTML, CSS, and JavaScript, the site features a Web3-inspired UI, app-like navigation, and accessibility-first design.

---

## 🌟 Features

- **Enhanced Header:** Sticky app bar with gradient branding, slide-in drawer, and profile dropdown.
- **Bold Hero Section:** Mobile-first hero with animated CTA and dynamic typography.
- **App-Like UX:** Bottom navigation bar, touch-friendly UI, `clamp()`-based scalable fonts.
- **DApp Showcase:** Interactive grid linking to `/docs/[dapp].html`.
- **Transparent Ledger:** Audited transaction table, updated periodically.
- **Community Engagement:** Bounties, Hall of Fame, and social media integration.
- **Offline Support:** PWA-enabled via `sw.js` (service worker).
- **SEO & Analytics:** `sitemap.xml`, `robots.txt`, and Google Analytics.
- **Accessibility:** ARIA labels, keyboard nav, high-contrast mode.

---

## 🧱 Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Fonts:** [Inter](https://fonts.google.com/specimen/Inter)
- **Hosting:** Netlify (recommended), or any static host
- **Version Control:** Git/GitHub
- **Analytics:** Google Analytics (G-XXXXXXXXXX)

---

## 📁 Project Structure

```

mrwain-organization/
├── index.html              # Homepage with enhanced header and hero
├── vision.html             # Vision page
├── mission.html            # Mission page
├── dapps.html              # DApps overview
├── ledger.html             # Transparent ledger table
├── donation.html           # Donation portal
├── hall-of-fame.html       # Contributor showcase
├── future-plans.html       # Roadmap
├── announcement.html       # News & updates
├── about.html              # About Mrwain
├── community.html          # Join & engage
├── chain.html              # Pi chain details
├── bounties.html           # Developer bounties
├── privacy.html            # Privacy policy
├── terms.html              # Terms of service
├── cookies.html            # Cookies policy
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── scripts.js          # App-like interactions & UI logic
├── docs/
│   ├── quantumpay.html
│   ├── truthweb.html
│   ├── cloudy.html
│   ├── droplink.html
│   ├── taskhub.html
│   ├── salenus.html
│   ├── trendforge.html
│   ├── smartsolve.html
│   └── sundaysoul.html
├── assets/
│   └── og-image.jpg        # Open Graph preview image
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine directives
└── sw\.js                   # Service Worker (offline support)

````

---

## ⚙️ Setup Instructions

### Prerequisites

- Node.js (optional, for local dev server)
- Git
- Modern browser (Chrome, Firefox)
- Text editor (VS Code recommended)

### Clone the Repository

```bash
git clone https://github.com/wainfoundation/mrwain-organization.git
cd mrwain-organization
````

### Local Development (Optional)

```bash
npm install -g serve
serve .
```

Visit [http://localhost:3000](http://localhost:3000)

Or use:

* **VS Code Live Server Extension**
* **Python HTTP Server:** `python3 -m http.server`

---

## 🔧 Update Placeholders

* Replace **`[REAL_ADDRESS_1]`** in `ledger.html` and `index.html`.
* Replace **`G-XXXXXXXXXX`** in `index.html` with your Google Analytics ID.
* Replace **`YOUR-NETLIFY-BADGE-ID`** in this README with your Netlify badge ID.
* Add Open Graph image: `/assets/og-image.jpg` (recommended size: 1200x630).

---

## 🚀 Deployment

### Netlify (Recommended)

1. Push the repo to GitHub.
2. Connect GitHub to [Netlify](https://netlify.com/).
3. Set build settings:

   * Build command: *leave blank*
   * Publish directory: `.`
4. Configure custom domain `www.mrwain.xyz`:

   * Set A Record: `104.198.14.52` or use CNAME.
5. Enable SSL in Netlify (free HTTPS).

### Other Hosts

* Upload via FTP (e.g., Hostinger, Bluehost).
* Enable SSL (e.g., Let's Encrypt).
* Point DNS to hosting IP or CNAME.

---

## 🧪 Testing

* **Lighthouse:** Aim for >90 mobile score.
* **Responsive Design:** Test nav drawer, bottom bar, and font scaling.
* **Accessibility:** Use screen readers (VoiceOver, TalkBack).
* **Broken Links:** Check all internal doc links.
* **SEO:** Submit `sitemap.xml` to Google Search Console.

---

## 🤝 Contributing

We welcome your PRs!

### Steps

1. **Fork** the repo
2. Create a branch:

```bash
git checkout -b feature/your-feature-name
```

3. Make changes in:

   * `css/styles.css`
   * `js/scripts.js`
   * New `.html` files under `/docs/` or root
4. Test locally
5. Commit and push:

```bash
git add .
git commit -m "Describe your feature"
git push origin feature/your-feature-name
```

6. Submit a **Pull Request** with clear description.

### Contribution Guidelines

* Use BEM for CSS.
* Stick to vanilla JS; no frameworks.
* Mobile-first design using `clamp()` and `min()`.
* Ensure ARIA labels and keyboard support.
* Test across iOS, Android, and desktop.

---

## 🎯 Bounties

Visit [`/bounties.html`](https://www.mrwain.xyz/bounties.html) for Pi-rewarded dev tasks.

Join the discussion on Discord: [discord.gg/q37VBF5fjU](https://discord.gg/q37VBF5fjU)

---

## 🌐 Community

* **X (Twitter):** [@wainfoundation](https://x.com/wainfoundation)
* **Discord:** [Join Server](https://discord.gg/q37VBF5fjU)
* **LinkedIn:** [Mrwain Foundation](https://linkedin.com/in/wainfoundation-9a30b9367)
* **Email:** [mrwainorganization@gmail.com](mailto:mrwainorganization@gmail.com)

---

## 📝 License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for full terms.

```
MIT License

Copyright (c) 2025 Mrwain Organization

Permission is hereby granted, free of charge, to any person obtaining a copy...
```

---

## 🙏 Acknowledgments

* Built for the **Pi Network** community.
* Inspired by Web3, decentralization, and open-source collaboration.
* Thanks to all contributors in our [Hall of Fame](./hall-of-fame.html)!

---

## 🔧 Optional Enhancements

* Add `CONTRIBUTING.md` for advanced PR process.
* Integrate [Netlify CMS](https://www.netlifycms.org/) for dynamic content.
* Add Dark Mode toggle via `localStorage` and CSS variables.

---

## ✅ Action Items

* [ ] Create `README.md` in root
* [ ] Replace placeholders (badge ID, repo URL, Analytics, wallet addresses)
* [ ] Add LICENSE file (MIT)
* [ ] Push to GitHub + Deploy to Netlify
* [ ] Share release on [X](https://x.com/wainfoundation) and Discord
