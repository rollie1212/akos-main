# AKOS Core Portfolio Template

This folder contains the standalone portfolio template users copy into their own repository.

## Reference links

- Product repository: https://github.com/rollie1212/akos-main
- Personal reference repository: https://github.com/rollie1212/akos-new
- Live reference website: https://akos-mu.vercel.app/

## What this template includes

- a Next.js portfolio application;
- structured career data in `career-data/profile.json`;
- capabilities, experience, evidence and project sections;
- Zod validation for profile data;
- Markdown career knowledge under `knowledge/`;
- a server-side DeepSeek API route;
- a floating AI portfolio assistant;
- Vercel-compatible deployment.

## Recommended setup

Create a new empty GitHub repository and copy the **contents** of `/template` into its root.

Correct structure:

```text
app/
components/
career-data/
knowledge/
lib/
public/
package.json
README.md
```

Incorrect structure:

```text
template/app/
template/components/
```

Vercel must see `package.json` at repository root.

## 1. Replace the demo career data

Open `career-data/profile.json` and replace the example content with verified personal data.

The profile supports:

- name and headline;
- location and professional summary;
- public links;
- capabilities;
- work experience;
- evidence points;
- selected projects.

## 2. Add the Markdown knowledge base

Add factual `.md` files under `knowledge/`.

Recommended structure:

```text
knowledge/
├── about.md
├── skills.md
├── working-style.md
├── claim-boundaries.md
├── experience/
│   └── company-name.md
└── projects/
    └── project-name.md
```

Each file should separate verified facts, personal contribution, evidence, status and claim boundaries. The assistant must not invent undocumented information.

## 3. Add a personal DeepSeek key

Copy `.env.example` to `.env.local` for local development:

```bash
cp .env.example .env.local
```

Add:

```env
DEEPSEEK_API_KEY=your_private_key
DEEPSEEK_MODEL=deepseek-chat
```

Never commit `.env.local`, never publish the key and never use the `NEXT_PUBLIC_` prefix.

For Vercel:

1. Open **Project → Settings → Environment Variables**.
2. Add `DEEPSEEK_API_KEY`.
3. Optionally add `DEEPSEEK_MODEL=deepseek-chat`.
4. Apply the variables to Production, Preview and Development.
5. Redeploy.

## 4. Install and run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Test both the portfolio and the **Ask this profile** assistant.

## 5. Deploy to Vercel

1. Push the copied template to the personal GitHub repository.
2. Sign in to Vercel with GitHub.
3. Create a new project.
4. Select the personal repository.
5. Keep the detected Next.js settings.
6. Add the DeepSeek environment variable.
7. Deploy.

Every later commit triggers a new Vercel deployment.

## Acceptance check

- the correct personal data is displayed;
- public links work;
- Markdown files contain no secrets;
- the assistant answers from documented facts;
- unsupported facts are not invented;
- no API key is committed to GitHub;
- attribution points to https://github.com/rollie1212/akos-main.

## Expected result

The finished site should use the AKOS Core visual foundation while displaying the user's own verified career data and an optional AI assistant powered by the user's own DeepSeek account.

The template provides the foundation, not a copy of Andrii's personal content or every feature in `akos-new`.

## License

MIT. Preserve the original copyright and license notice.
