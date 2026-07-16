# AKOS Core

**AKOS Core is a free, open-source, AI-native career operating system.**

It turns a CV, LinkedIn profile and project notes into structured career data that can power a personal portfolio and future career materials.

## Current project map

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

## Current user workflow

```text
CV + LinkedIn + project notes
              ↓
verified fact extraction
              ↓
career-data/profile.json
              ↓
copy /template into a personal repository
              ↓
Vercel deployment
              ↓
personal AKOS Core portfolio
```

## Quick start

1. Open the template folder:
   https://github.com/rollie1212/akos-main/tree/main/template
2. Create a new empty GitHub repository.
3. Copy the **contents** of `/template` into the new repository root.
4. Replace `career-data/profile.json` with verified career data.
5. Import the personal repository into Vercel.
6. Deploy and review the final portfolio.

Detailed template instructions are in [`template/README.md`](template/README.md).

## Important current limitation

The current `/template` does not include the DeepSeek Markdown assistant.

Do not configure `DEEPSEEK_API_KEY` unless the chat API route and supporting knowledge files are added back to the template.

The live reference in `akos-new` has a broader feature set than the current public template.

## Product pages

- `/` — product homepage;
- `/get-started` — onboarding;
- `/prompts` — prompt workflow;
- `/examples` — live and source examples;
- `/pricing` — Free plan and future products;
- `/support` — AKOS Core support route.

## Product principles

- Career data belongs to the user.
- The user's repository and deployment belong to the user.
- AI must not invent employers, dates, metrics, skills or responsibilities.
- Strong claims should be supported by evidence.
- The template must remain portable and self-hostable.

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
