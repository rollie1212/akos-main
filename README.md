# AKOS Core

**AKOS Core is a free, open-source, AI-native career operating system.**

It turns an existing CV, LinkedIn profile and project notes into a structured career knowledge base that can power:

- a personal portfolio website;
- future tailored resumes;
- cover letters;
- job application messages;
- interview preparation;
- AI career assistants.

Live product site: https://akos-core.vercel.app

Live AKOS resume example: https://akos-mu.vercel.app/

## The core idea

A resume should be an output, not the primary database of your professional experience.

```text
CV + LinkedIn + project notes
              ↓
AI-assisted fact extraction
              ↓
clarification and claim audit
              ↓
career-data/profile.json
              ↓
Portfolio · CV · Cover letter · Interview preparation
```

## Free — AKOS Core

AKOS Core is currently the only available plan.

It includes:

- the open-source GitHub template;
- the portable `career-data/profile.json` structure;
- a four-step AI prompt workflow;
- a generated career portfolio;
- project case-study templates;
- GitHub setup instructions;
- Vercel deployment instructions;
- automatic updates after every GitHub commit.

**Price: free.**

AKOS Builder and AKOS Cloud are planned and marked as **Coming soon**.

## Fastest setup

### 1. Create your repository

Open:

https://github.com/rollie1212/akos-core/generate

Create the repository in your own GitHub account.

### 2. Prepare your source material

Collect:

- your current CV;
- LinkedIn profile text;
- project notes and links;
- education and languages;
- verified achievements and measurable results;
- claim boundaries: facts or tools that must not be overstated.

### 3. Run the AKOS prompt workflow

Open:

https://akos-core.vercel.app/prompts

Use the prompts in order:

1. extract verified facts;
2. resolve missing or ambiguous information;
3. generate the final `profile.json`;
4. audit every claim before publishing.

The detailed written guide is available in [`docs/CREATE_YOUR_PROFILE.md`](docs/CREATE_YOUR_PROFILE.md).

### 4. Replace the demo profile

Open:

`career-data/profile.json`

Replace the demo content with your generated JSON and commit the change.

### 5. Deploy

Import your repository into Vercel. See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

Every later GitHub commit will automatically update the public website.

## Pages

- `/` — AKOS Core product homepage;
- `/get-started` — complete free setup workflow;
- `/prompts` — prompt integration guide;
- `/examples` — live AKOS resume and source examples;
- `/pricing` — Free plan and future products marked Coming soon;
- `/support` — support AKOS development.

## Prompt integration

Do not ask AI to immediately “make the CV better.”

The recommended workflow is:

```text
Source documents
      ↓
Fact extraction
      ↓
Clarification questions
      ↓
Structured profile generation
      ↓
Factual audit
      ↓
GitHub commit
```

This reduces invented metrics, exaggerated seniority and unsupported technical claims.

## Example implementation

The primary reference example is Andrii Kysil’s live AKOS career system:

https://akos-mu.vercel.app/

It demonstrates:

- clear professional positioning;
- evidence-backed capabilities;
- experience and project presentation;
- recruiter-facing career materials;
- a reusable career source of truth.

## Repository structure

```text
app/                 Product and portfolio pages
career-data/         Portable career source data
docs/                Setup, prompt and deployment guides
examples/            Reusable project templates
public/              Static assets
```

## Local development

```bash
git clone https://github.com/rollie1212/akos-core.git
cd akos-core
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project case studies

For stronger results, prepare one source document per major project using:

[`examples/project-case-study-template.md`](examples/project-case-study-template.md)

A useful project source explains:

- the problem;
- target users;
- your actual role;
- product decisions;
- implementation;
- tools used directly;
- verified outcomes;
- limitations and current status.

## Product principles

- Career data belongs to the user.
- Claims must be backed by real experience.
- AI must not invent skills, metrics, employers or responsibilities.
- Structured source data must remain reusable outside AKOS.
- Forking and self-hosting must remain possible.
- The AKOS support link remains attributed to the original project.

## Support AKOS development

Every AKOS-generated site includes a link to support the development of the original AKOS project.

The support destination is controlled by the central AKOS Core deployment. Fork users do not replace it with their own Buy Me a Coffee account.

Central support page:

https://akos-core.vercel.app/support

## Roadmap

See [`docs/ROADMAP.md`](docs/ROADMAP.md).

## License

MIT. See [`LICENSE`](LICENSE).
