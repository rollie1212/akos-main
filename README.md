# AKOS

**AKOS is a free, open-source, AI-native career operating system.**

It turns an existing CV, LinkedIn profile and project notes into a structured career knowledge base that can power:

- a personal portfolio website;
- tailored resumes and cover letters;
- job application messages;
- interview preparation;
- an AI career assistant grounded in Markdown.

## Repositories

- Product and onboarding: https://github.com/rollie1212/akos-main
- Personal reference implementation: https://github.com/rollie1212/akos-new
- Live reference website: https://akos-mu.vercel.app/

## How the project is organized

```text
akos-main/
├── app/          AKOS product website and onboarding
├── docs/         setup and prompt documentation
├── examples/     reusable examples
└── template/     standalone portfolio copied by users
```

The `/template` folder is the product users copy into a new personal repository.

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
GitHub repository
              ↓
Vercel deployment
              ↓
personal portfolio + optional DeepSeek assistant
```

## Quick start

1. Open the template folder:
   https://github.com/rollie1212/akos-main/tree/main/template
2. Create a new empty GitHub repository.
3. Copy the **contents** of `/template` into the new repository root.
4. Replace `career-data/profile.json` with the user's verified career profile.
5. Add factual Markdown files under `knowledge/`.
6. Import the personal repository into Vercel.
7. Optionally add the user's own `DEEPSEEK_API_KEY` in Vercel Environment Variables.
8. Deploy and test the portfolio and AI assistant.

Detailed template instructions are in [`template/README.md`](template/README.md).

## DeepSeek security

The optional AI assistant uses a server-side environment variable:

```env
DEEPSEEK_API_KEY=
DEEPSEEK_MODEL=deepseek-chat
```

The real key must never be committed to GitHub and must never use the `NEXT_PUBLIC_` prefix.

## Product principles

- Career data belongs to the user.
- The user's repository and deployment belong to the user.
- AI must not invent employers, dates, metrics, skills or responsibilities.
- Strong claims should be backed by evidence.
- The portfolio remains usable without the AI assistant.
- The template remains portable and self-hostable.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

To run the standalone user template locally, execute the same commands from inside `/template`.

## License

MIT. See [`LICENSE`](LICENSE).