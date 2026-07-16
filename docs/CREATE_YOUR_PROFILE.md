# Create your AKOS career knowledge base

AKOS Core currently uses one portable source file:

`career-data/profile.json`

The fastest reliable workflow is not one giant “rewrite my CV” prompt. Use four controlled prompts in the same AI conversation.

Interactive version: https://akos-core.vercel.app/prompts

## 1. Collect your source material

Prepare as much verified information as possible:

- current CV;
- LinkedIn profile text or export;
- portfolio and project links;
- descriptions of previous roles;
- project notes and case studies;
- education, certifications and languages;
- measurable results you can verify;
- claim boundaries: tools, metrics or responsibilities that must not be overstated.

Do not include private information you do not want published.

## 2. Upload or paste the material

Open ChatGPT, Claude, Gemini or another capable AI assistant.

Upload your CV and paste additional materials into one conversation. Then run the following prompts in order.

## Prompt 1 — Extract verified facts

```text
You are helping me build an AKOS career knowledge base.

I will provide my CV, LinkedIn profile, project notes and professional documents.

Extract only verified facts. Do not rewrite them yet. Group the result into:
- identity and positioning
- employment experience
- independent projects
- skills and tools
- education and languages
- measurable results
- missing or ambiguous information

Do not invent dates, metrics, tools, employers, responsibilities or achievements. Mark every uncertain item as NEEDS_CONFIRMATION.
```

Review the extraction. Correct mistakes before proceeding.

## Prompt 2 — Ask clarification questions

```text
Using the extracted facts, ask me the smallest possible set of clarification questions needed to create an interview-safe career profile.

Prioritize questions about:
- my personal contribution
- project status: concept, prototype, MVP or production
- tools I used directly
- measurable results
- dates and role boundaries
- target role and positioning

Ask no more than 10 questions at once.
```

Answer the questions factually. Do not improve the story by adding unsupported details.

## Prompt 3 — Generate `profile.json`

```text
Create a valid AKOS Core profile.json from the confirmed information in this conversation.

Rules:
1. Use only confirmed facts.
2. Do not invent metrics, tools or responsibilities.
3. Keep employment and independent projects separate.
4. Use concise professional English.
5. Every experience item must contain evidence points.
6. Every project must list demonstrated skills.
7. Use an empty string for a missing optional URL.
8. Return only valid JSON without Markdown fences or commentary.

Use this exact schema:
{
  "name": "Full name",
  "headline": "Primary professional positioning",
  "location": "City, Country",
  "summary": "A concise professional summary",
  "links": [
    { "label": "LinkedIn", "url": "https://..." }
  ],
  "capabilities": ["Capability 1", "Capability 2"],
  "experience": [
    {
      "company": "Company name",
      "role": "Role title",
      "period": "2022–2025",
      "summary": "What the role was responsible for",
      "evidence": ["Verified responsibility or result"]
    }
  ],
  "projects": [
    {
      "name": "Project name",
      "description": "Problem, product and personal contribution",
      "skills": ["Product discovery", "AI prototyping"],
      "url": "https://..."
    }
  ]
}
```

## Prompt 4 — Final factual audit

```text
Audit the generated AKOS profile against all source material in this conversation.

Return three sections:
- SAFE_TO_PUBLISH
- NEEDS_CONFIRMATION
- REMOVE_OR_REWRITE

Flag unsupported claims, inflated seniority, invented metrics, unclear ownership, unverified tools and statements that would be difficult to defend in an interview.

Do not rewrite the JSON until I confirm the flagged items.
```

Resolve every flagged item. Then ask the AI to return the corrected JSON only.

## 3. Add the result to GitHub

1. Open your AKOS Core repository.
2. Navigate to `career-data/profile.json`.
3. Click the pencil icon.
4. Replace the demo JSON with the generated JSON.
5. Click **Commit changes**.
6. Wait for Vercel to publish the update automatically.

## 4. Validate before publishing

Check that:

- the file contains valid JSON;
- there are no trailing commas;
- quotation marks are standard double quotes;
- dates and role boundaries are accurate;
- links work;
- employment and independent projects are separated;
- every claim can be defended in an interview;
- private contact information is not exposed unintentionally.

## 5. Add stronger project evidence

For each major project, use:

`examples/project-case-study-template.md`

A project case study should document:

- the problem;
- target users;
- your role;
- product decisions;
- implementation;
- tools used directly;
- verified outcomes;
- limitations;
- whether the project is a concept, prototype, MVP or production product.

Then provide those case studies to the AI and regenerate `profile.json`.

## Reference example

See a complete AKOS implementation:

https://akos-mu.vercel.app/

## Support AKOS

Every generated AKOS site includes a link to support development of the original project:

https://akos-core.vercel.app/support
