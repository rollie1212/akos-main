# AKOS Core

**AKOS Core is a free, open-source, AI-native career operating system.**

It turns a CV, LinkedIn profile and project notes into structured career data that can power a personal portfolio, future career materials and an optional AI assistant grounded in Markdown.

## Project map

- Product repository: https://github.com/rollie1212/akos-main
- Personal reference repository: https://github.com/rollie1212/akos-new
- Live reference website: https://akos-mu.vercel.app/

## Repository structure

```text
akos-main/
├── app/          product website and onboarding
├── docs/         setup and prompt documentation
├── examples/     reusable examples
└── template/     standalone portfolio copied by users
```

The `/template` folder is the part users copy into a new personal repository.

## User workflow

```text
CV + LinkedIn + project notes
              ↓
verified fact extraction
              ↓
career-data/profile.json
              ↓
knowledge/*.md
              ↓
copy /template into a personal repository
              ↓
Vercel deployment + personal DeepSeek key
              ↓
personal AKOS Core portfolio + AI assistant
```

## Quick start

1. Open the template folder:
   https://github.com/rollie1212/akos-main/tree/main/template
2. Create a new empty GitHub repository.
3. Copy the **contents** of `/template` into the new repository root.
4. Replace `career-data/profile.json` with verified career data.
5. Add factual Markdown files under `knowledge/`.
6. Import the personal repository into Vercel.
7. Add `DEEPSEEK_API_KEY` in Vercel Environment Variables.
8. Redeploy and test the portfolio and assistant.

Detailed instructions are in [`template/README.md`](template/README.md).

## DeepSeek security

The optional assistant uses server-side environment variables:

```env
DEEPSEEK_API_KEY=
DEEPSEEK_MODEL=deepseek-chat
```

Never commit the real key and never use the `NEXT_PUBLIC_` prefix.

## Product pages

- `/` — product homepage;
- `/get-started` — onboarding;
- `/prompts` — prompt workflow;
- `/examples` — live and source examples;
- `/pricing` — Free plan and future products;
- `/support` — support route.

## Product principles

- Career data belongs to the user.
- The user's repository and deployment belong to the user.
- AI must not invent employers, dates, metrics, skills or responsibilities.
- Strong claims should be supported by evidence.
- The portfolio remains usable without the AI assistant.
- The template remains portable and self-hostable.

## Development

```bash
git clone https://github.com/rollie1212/akos-main.git
cd akos-main
npm install
npm run dev
```

Open `http://localhost:3000`.

To test the standalone portfolio template, run the same commands from inside `/template`.

## License

MIT. See [`LICENSE`](LICENSE).
