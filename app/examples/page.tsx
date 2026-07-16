import React from "react";
import SiteNav from "@/components/SiteNav";
import SupportFooter from "@/components/SupportFooter";
import CopyButton from "@/components/CopyButton";

const profileJsonExample = `{
  "name": "Alex Example",
  "headline": "AI Product Builder",
  "location": "Prague, Czech Republic",
  "summary": "Product-focused professional working across AI prototyping, product discovery and workflow automation.",
  "links": [
    {
      "label": "LinkedIn",
      "url": "https://linkedin.com/in/example"
    }
  ],
  "capabilities": [
    "Product discovery",
    "MVP definition",
    "AI-assisted prototyping",
    "Workflow automation"
  ],
  "experience": [
    {
      "company": "Example Company",
      "role": "Product Manager",
      "period": "2023–2026",
      "summary": "Worked on product discovery, prioritisation and delivery.",
      "evidence": [
        "Defined MVP requirements",
        "Created product documentation",
        "Coordinated delivery across stakeholders"
      ]
    }
  ],
  "projects": [
    {
      "name": "Example Product",
      "description": "An AI-powered product developed from initial concept to a functional prototype.",
      "skills": [
        "Product architecture",
        "AI prototyping",
        "Prompt design"
      ],
      "url": "https://github.com/example/product"
    }
  ]
}`;

const caseStudyTemplate = `# Project name

## Product summary
What is the product?

## Problem
What problem does it solve?

## Target users
Who is it for?

## My role
What was my personal contribution?

## Product decisions
What decisions did I make?

## Features
What functionality was designed or built?

## Implementation
How was the product created?

## Tools
Which tools were personally used?

## Status
Concept, prototype, MVP, live product or discontinued project?

## Results
What was delivered, measured or learned?

## Evidence
Links, screenshots, repositories or documentation.

## Boundaries
What should not be claimed about this project?`;

export default function ExamplesPage() {
  return (
    <main style={{ background: "#ffffff", color: "var(--ink)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteNav />

      {/* Hero */}
      <section className="page-hero">
        <p className="eyebrow">
          Reference Materials
        </p>
        <h1>
          Learn from real career systems.
        </h1>
        <p className="summary">
          Explore Andrii Kysil’s reference implementation, inspect the complete database JSON schema, and download factual project case-study blueprints.
        </p>
      </section>

      {/* Real Example Features block */}
      <section className="section">
        <div style={{ display: "grid", gap: "54px", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          <div>
            <p className="eyebrow">Interactive Demo</p>
            <h2 style={{ fontSize: "32px", fontWeight: "690", lineHeight: 1.1, marginBottom: "20px" }}>
              Andrii Kysil’s live AKOS website.
            </h2>
            <p style={{ color: "var(--ink-soft)", fontSize: "16px", lineHeight: 1.6, marginBottom: "24px" }}>
              The prime reference implementation demonstrates how to turn unstructured history into a highly polished, recruiter-friendly personal portal that builds authentic trust.
            </p>
            <div className="actions">
              <a href="https://akos-mu.vercel.app/" target="_blank" rel="noreferrer" className="button button--primary">
                Open Live Profile ↗
              </a>
              <a href="/demo" className="button">
                Browse Local Demo
              </a>
            </div>
          </div>

          <div style={{ display: "grid", gap: "24px" }}>
            <div style={{ borderBottom: "1px solid var(--line)", paddingBottom: "16px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "680", marginBottom: "8px" }}>Evidence-Backed Positioning</h3>
              <p style={{ color: "var(--ink-soft)", fontSize: "14.5px", lineHeight: 1.5, margin: 0 }}>
                Every capability block is directly linked to selected responsibilities, tools, and business metrics. No floating word-clouds or soft-skill hype.
              </p>
            </div>
            <div style={{ borderBottom: "1px solid var(--line)", paddingBottom: "16px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "680", marginBottom: "8px" }}>Project case studies</h3>
              <p style={{ color: "var(--ink-soft)", fontSize: "14.5px", lineHeight: 1.5, margin: 0 }}>
                Factual templates structure your independent project history into clear categories: the problem statement, personal decisions, direct tooling, and results.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: "680", marginBottom: "8px" }}>Data Portability</h3>
              <p style={{ color: "var(--ink-soft)", fontSize: "14.5px", lineHeight: 1.5, margin: 0 }}>
                The same underlying knowledge base is modularly reusable. Export it anytime to generate print resumes, custom applications, or feed AI assistants for custom interview prep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JSON Schema Preview */}
      <section className="section">
        <div style={{ display: "grid", gap: "48px", gridTemplateColumns: "1fr" }}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <p className="eyebrow" style={{ marginBottom: "8px" }}>Core Database Schema</p>
                <h2 style={{ fontSize: "32px", fontWeight: "690", margin: 0 }}>The career-data/profile.json model</h2>
              </div>
              <CopyButton text={profileJsonExample} />
            </div>
            <p className="summary" style={{ marginBottom: "32px" }}>
              The following structured layout acts as the single source of truth for AKOS Core. Replace the demo values with your verified AI-generated facts to activate your website.
            </p>
            <pre style={{
              background: "var(--faint)",
              border: "1px solid var(--line)",
              borderRadius: "12px",
              padding: "24px",
              overflowX: "auto",
              maxHeight: "440px"
            }}>
              <code style={{
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                fontSize: "13.5px",
                lineHeight: "1.6",
                color: "var(--ink-soft)"
              }}>
                {profileJsonExample}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Project Case Study Template */}
      <section className="section">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: "8px" }}>Factual Blueprint</p>
            <h2 style={{ fontSize: "32px", fontWeight: "690", margin: 0 }}>Factual project case-study template</h2>
          </div>
          <CopyButton text={caseStudyTemplate} />
        </div>
        <p className="summary" style={{ marginBottom: "32px" }}>
          Use this Markdown blueprint to document independent products and open-source projects. It enforces extreme factual boundaries and highlights personal ownership.
        </p>
        <pre style={{
          background: "var(--faint)",
          border: "1px solid var(--line)",
          borderRadius: "12px",
          padding: "24px",
          overflowX: "auto",
          maxHeight: "440px"
        }}>
          <code style={{
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
            fontSize: "13.5px",
            lineHeight: "1.6",
            color: "var(--ink-soft)"
          }}>
            {caseStudyTemplate}
          </code>
        </pre>
      </section>

      <SupportFooter />
    </main>
  );
}
