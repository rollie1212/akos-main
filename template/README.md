# AKOS Core Portfolio Template

This folder contains the standalone portfolio template users copy into their own repository.

## Reference links

- Product repository: https://github.com/rollie1212/akos-main
- Personal reference repository: https://github.com/rollie1212/akos-new
- Live reference website: https://akos-mu.vercel.app/

## What this template currently includes

- a Next.js portfolio application;
- structured career data in `career-data/profile.json`;
- capabilities, experience, evidence and project sections;
- Zod validation for profile data;
- the AKOS Core editorial visual system;
- Vercel-compatible deployment.

The current template does **not** include the DeepSeek Markdown assistant. Do not add `DEEPSEEK_API_KEY` unless the AI chat route and supporting files are added back to the template.

## Recommended setup

Create a new empty GitHub repository and copy the **contents** of `/template` into its root.

Correct structure:

```text
app/
components/
career-data/
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

Open:

```text
career-data/profile.json
```

Replace the example content with the user's verified data.

The profile currently supports:

- name;
- headline;
- location;
- professional summary;
- public links;
- capabilities;
- work experience;
- evidence points;
- selected projects.

## 2. Install and run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## 3. Deploy to Vercel

1. Push the copied template to the user's GitHub repository.
2. Sign in to Vercel with GitHub.
3. Create a new project.
4. Select the personal repository.
5. Keep the detected Next.js settings.
6. Deploy.

Every later commit triggers a new Vercel deployment.

## Expected result

The finished site should use the same AKOS Core visual foundation as the live reference while displaying the user's own verified career data.

The template provides the foundation, not a copy of Andrii's personal content or the complete feature set of `akos-new`.

## Security checklist

Before publishing:

- remove private contact details that should not be public;
- verify every metric and achievement;
- distinguish personal contribution from team contribution;
- describe prototypes and MVPs accurately;
- use secure `https://` links;
- do not commit API keys or secrets.

## Attribution

Keep attribution to the original AKOS Core project:

https://github.com/rollie1212/akos-main

## License

MIT. Preserve the original copyright and license notice.
