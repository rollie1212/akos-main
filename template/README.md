# AKOS Portfolio Template

This folder is the recommended starting point for a personal AKOS website.

It produces an editorial career portfolio based on the same product principles as the reference implementation:

- Live example: https://akos-mu.vercel.app/
- Personal reference repository: https://github.com/rollie1212/akos-new
- Product repository: https://github.com/rollie1212/akos-main

The template includes:

- structured portfolio data in `career-data/profile.json`;
- capabilities, experience and project sections;
- the AKOS editorial design system;
- factual validation with Zod;
- Markdown career knowledge files;
- an optional DeepSeek-powered AI portfolio assistant;
- permanent attribution to the AKOS project.

## Recommended setup

Do not deploy the entire `akos-main` product repository as your personal portfolio.

Create a new empty GitHub repository and copy the **contents** of the `/template` folder into its root.

Your new repository should look like this:

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

It should not look like:

```text
template/app/
template/components/
```

Vercel must see `package.json` at the repository root.

## 1. Create your career profile

Open:

```text
career-data/profile.json
```

Replace the example content with the JSON generated during the AKOS onboarding process.

This file controls:

- your name and headline;
- location and professional summary;
- public links;
- capabilities;
- employment history;
- evidence points;
- selected projects.

The site validates the file before rendering. Invalid JSON produces a readable configuration error instead of a blank page.

## 2. Build the Markdown knowledge base

The public portfolio is generated from `profile.json`.

The AI assistant is grounded in Markdown files stored in:

```text
knowledge/
career-data/
```

Recommended structure:

```text
knowledge/
├── about.md
├── skills.md
├── working-style.md
├── claim-boundaries.md
├── experience/
│   ├── company-one.md
│   └── company-two.md
└── projects/
    ├── project-one.md
    └── project-two.md
```

Each Markdown file should describe verified facts, personal contribution, evidence, project status and claim boundaries.

The assistant reads all `.md` files recursively. A starter example is included in `knowledge/README.md`.

## 3. Add a personal DeepSeek API key

The AI assistant is optional. The portfolio works without it.

Create a personal DeepSeek API key in your own DeepSeek account.

### Local development

Copy the environment example:

```bash
cp .env.example .env.local
```

Then add:

```env
DEEPSEEK_API_KEY=your_private_key
DEEPSEEK_MODEL=deepseek-chat
```

Never commit `.env.local` or the real key to GitHub.

### Vercel

After importing the repository into Vercel:

1. Open **Project → Settings → Environment Variables**.
2. Add `DEEPSEEK_API_KEY`.
3. Paste the user's personal DeepSeek key.
4. Optionally add `DEEPSEEK_MODEL=deepseek-chat`.
5. Apply the variables to Production, Preview and Development.
6. Redeploy the project.

The key is read only by the server-side `/api/chat` route. It is not included in browser JavaScript and must never use the `NEXT_PUBLIC_` prefix.

## 4. Run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

Test both parts:

1. The portfolio renders the correct personal information.
2. The assistant answers factual questions from the Markdown files.

Example questions:

- What products has this person built?
- What was their contribution to Project X?
- Which capabilities are supported by evidence?
- Is this person a fit for the following role?

The assistant is instructed not to invent undocumented facts.

## 5. Deploy to Vercel

1. Push the copied template to the user's GitHub repository.
2. Sign in to Vercel with GitHub.
3. Click **Add New Project**.
4. Select the personal repository.
5. Keep the detected Next.js settings.
6. Add `DEEPSEEK_API_KEY` if the assistant should be enabled.
7. Click **Deploy**.

Every later GitHub commit automatically updates the website.

## Expected result

A successful onboarding should produce:

- a polished personal website visually aligned with https://akos-mu.vercel.app/;
- the user's own positioning, experience and projects;
- a structured and reusable career database;
- a Markdown knowledge base stored in the user's GitHub;
- an optional AI assistant powered by the user's own DeepSeek account;
- no dependency on an AKOS-hosted user database.

The exact content and number of project pages depend on how complete the user's source material is. The template provides the same foundation, not a copy of Andrii's personal data.

## Security checklist

Before publishing:

- no API keys are committed to GitHub;
- no private phone number or address is exposed accidentally;
- every metric is verifiable;
- prototype projects are not described as production systems;
- team work is not presented as individual ownership;
- Markdown contains no confidential employer information;
- all public links use `https://`.

## AKOS project

Every generated website keeps attribution to the original AKOS project:

https://github.com/rollie1212/akos-main

## License

MIT. Preserve the original copyright and license notice.