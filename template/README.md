# AKOS Portfolio Template 🚀

This is the **clean, lightweight standalone portfolio template** from [AKOS Core](https://github.com/rollie1212/akos-core). It is a production-ready, high-performance personal career portfolio website designed with Swiss/modern minimalism and strict visual hygiene.

## Core Features
* 📂 **Complete Data Ownership**: Your entire portfolio is powered by a portable `career-data/profile.json` database.
* ⚡ **Ultra Fast**: Built using Next.js App Router and optimized Google Fonts.
* 🎨 **Editorial Visuals**: Styled with premium typography (Space Grotesk & Inter) and subtle framer-motion transitions.
* ☁️ **Self-Hosted & Free**: Deploy to Vercel in 1 click under your personal account for $0/mo.

---

## 🛠️ Quick Start

### 1. Copy or fork this directory
You can fork the main repository and copy the contents of the `/template` folder into your own repository, or use the template directly.

### 2. Install dependencies
From the template root folder, run:
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see your portfolio live.

---

## 📂 Customizing Your Data

Simply open `career-data/profile.json` and replace the placeholder fields with your own professional records:

```json
{
  "name": "Your Name",
  "headline": "AI Product Engineer, Senior Architect...",
  "location": "San Francisco, CA",
  "summary": "Focused, objective summary of the problems you solve...",
  "links": [
    { "label": "LinkedIn", "url": "https://linkedin.com/in/yourname" }
  ],
  "capabilities": [
    "Rapid prototyping",
    "Technical Architecture"
  ],
  "experience": [
    {
      "company": "Stripe",
      "role": "Staff Engineer",
      "period": "2022–Present",
      "summary": "Led global core billing engine migration...",
      "evidence": [
        "Reduced transaction latency by 14% at scale",
        "Shipped 3 major API versions with zero downtime"
      ]
    }
  ]
}
```

If you introduce syntax errors or miss required fields, the built-in **Zod validation engine** will report precisely what lines to fix on your screen.

---

## 🚀 Deploy to Vercel (1-Click)

1. Sign up on [Vercel](https://vercel.com/) with your GitHub account.
2. Click **Add New Project**.
3. Select your personalized portfolio repository.
4. Keep the default Next.js build settings.
5. Click **Deploy**.

With every future commit you push to your GitHub repository (e.g. updating a new milestone in `profile.json`), Vercel will automatically rebuild and deploy your updated live site!
