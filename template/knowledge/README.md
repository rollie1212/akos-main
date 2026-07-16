# Career knowledge base

This folder powers the optional AI portfolio assistant.

Add factual Markdown files such as:

- `about.md`
- `experience/company-name.md`
- `projects/project-name.md`
- `skills.md`
- `working-style.md`
- `claim-boundaries.md`

The assistant reads every `.md` file in `knowledge/` and `career-data/`.

## Rules

- Include only facts you can defend in an interview.
- Separate personal contribution from team contribution.
- State whether a project is a concept, prototype, MVP or live product.
- Do not include private information or secrets.
- Do not put API keys in Markdown files.

## Example

```md
# Example Project

## Summary
A web application that helps users compare products.

## My role
I defined the product structure, created the prototype and connected the data sources.

## Status
Functional prototype.

## Evidence
- Public demo: https://example.com
- Repository: https://github.com/example/project

## Boundaries
Do not describe this as a production-scale platform.
```
