# AKOS Core

**AKOS Core is a free, open-source, AI-native career operating system.**

It turns a CV, LinkedIn profile and project notes into structured career data that can power a personal portfolio, future career materials and an optional AI assistant grounded in Markdown.

## Project map

- Product repository: https://github.com/rollie1212/akos-main
- User template: https://github.com/rollie1212/akos-template
- Create a personal repository: https://github.com/rollie1212/akos-template/generate
- Personal reference repository: https://github.com/rollie1212/akos-new
- Live reference website: https://akos-mu.vercel.app/

## Repository roles

```text
akos-main      product website, prompts, onboarding and documentation
akos-template  clean standalone repository users create from the template
akos-new       Andrii's personal reference implementation
```

The canonical user template is now `akos-template`. The `/template` folder in this repository may be used for product development, but users should not copy it manually.

## User workflow

```text
CV + LinkedIn + project notes
              ↓
verified fact extraction
              ↓
Use this template
              ↓
career-data/profile.json + knowledge/*.md
              ↓
Vercel deployment + personal DeepSeek key
              ↓
personal AKOS portfolio + AI assistant
```

## Quick start

1. Open https://github.com/rollie1212/akos-template/generate
2. Create a new repository in your GitHub account.
3. Replace `career-data/profile.json` with verified career data.
4. Replace the demo Markdown under `knowledge/` with factual career documents.
5. Import the repository into Vercel.
6. Add `DEEPSEEK_API_KEY` in Vercel Environment Variables.
7. Redeploy and test the portfolio and assistant.

Detailed template instructions are maintained in the `akos-template` README.

## DeepSeek security

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

## License

MIT. See [`LICENSE`](LICENSE).
