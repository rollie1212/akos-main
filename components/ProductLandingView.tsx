'use client';

import React from "react";
import { motion } from "motion/react";
import SiteNav from "./SiteNav";
import SupportFooter from "./SupportFooter";

export default function ProductLandingView() {
  const plans = [
    {
      name: "AKOS Core",
      price: "Free",
      status: "Available now",
      description: "Create, own and self-host your career operating system.",
      features: [
        "Open-source GitHub template",
        "Portable career-data/profile.json",
        "AI prompt workflow",
        "Personal portfolio website",
        "Project case-study template",
        "GitHub and Vercel deployment guides",
        "Automatic updates after every commit",
      ],
      action: "Create from template",
      href: "https://github.com/rollie1212/akos-core/generate",
      available: true,
    },
    {
      name: "AKOS Builder",
      price: "Coming soon",
      status: "Planned",
      description: "Generate and review your knowledge base through a guided interface.",
      features: [
        "CV parsing & LinkedIn import",
        "Interactive structured profile editor",
        "Real-time portfolio previewer",
        "Single-click JSON/ZIP export"
      ],
      available: false,
    },
    {
      name: "AKOS Cloud",
      price: "Coming soon",
      status: "Planned",
      description: "Managed workflows without manual GitHub configuration.",
      features: [
        "Multiple profile histories & versions",
        "AI vacancy analysis & role matching",
        "Tailored cover letters & resumes",
        "Application tracking & pipeline analytics"
      ],
      available: false,
    },
  ];

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <main style={{ background: "var(--bg)", color: "var(--ink)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteNav />

      {/* Hero Section */}
      <section className="page-hero">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">
            Open-Source · AI-Native · Self-Hosted
          </p>
          <h1>
            Your resume is not your career database.
          </h1>
          <p className="summary" style={{ marginBottom: "36px" }}>
            AKOS turns your professional experience into structured, validated data you own, reuse, and publish from your own GitHub account.
          </p>
          
          <div className="hero__actions">
            <a className="button button--primary" href="/get-started">
              Create your AKOS
            </a>
            <a className="button" href="/demo">
              View live example demo
            </a>
            <a className="button" href="https://github.com/rollie1212/akos-core" target="_blank" rel="noreferrer">
              Open GitHub Template
            </a>
          </div>
        </motion.div>
      </section>

      {/* Core Concept pipeline flow */}
      <section className="section">
        <div className="section__header" style={{ marginBottom: "54px" }}>
          <p className="eyebrow">The Core Model</p>
          <h2>
            A single career source of truth, infinite outputs.
          </h2>
          <p className="summary" style={{ fontSize: "18.5px", marginTop: "16px" }}>
            Instead of writing fragile document formats, manage your career as structured information. 
          </p>
        </div>

        {/* Text pipeline diagram */}
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ 
            background: "var(--bg-card)", 
            border: "1px solid var(--line)", 
            borderRadius: "16px", 
            padding: "48px 36px", 
            fontFamily: "var(--font-mono, monospace)", 
            fontSize: "13px", 
            lineHeight: 1.8, 
            color: "var(--ink-soft)",
            overflowX: "auto",
            marginTop: "48px",
            boxShadow: "var(--shadow-md)"
          }}
        >
          <div style={{ minWidth: "760px", margin: "0 auto" }}>
            {/* Row 1: Sources */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "24px" }}>
              <div style={{ border: "1px solid var(--line)", background: "var(--bg)", padding: "16px", borderRadius: "8px", textAlign: "center", boxShadow: "var(--shadow-sm)" }}>
                <span style={{ fontSize: "10px", color: "var(--muted)", display: "block", marginBottom: "4px" }}>[SOURCE]</span>
                <strong style={{ color: "var(--ink)", fontWeight: "600" }}>CV / Resume</strong>
              </div>
              <div style={{ border: "1px solid var(--line)", background: "var(--bg)", padding: "16px", borderRadius: "8px", textAlign: "center", boxShadow: "var(--shadow-sm)" }}>
                <span style={{ fontSize: "10px", color: "var(--muted)", display: "block", marginBottom: "4px" }}>[SOURCE]</span>
                <strong style={{ color: "var(--ink)", fontWeight: "600" }}>LinkedIn</strong>
              </div>
              <div style={{ border: "1px solid var(--line)", background: "var(--bg)", padding: "16px", borderRadius: "8px", textAlign: "center", boxShadow: "var(--shadow-sm)" }}>
                <span style={{ fontSize: "10px", color: "var(--muted)", display: "block", marginBottom: "4px" }}>[SOURCE]</span>
                <strong style={{ color: "var(--ink)", fontWeight: "600" }}>Project Notes</strong>
              </div>
              <div style={{ border: "1px solid var(--line)", background: "var(--bg)", padding: "16px", borderRadius: "8px", textAlign: "center", boxShadow: "var(--shadow-sm)" }}>
                <span style={{ fontSize: "10px", color: "var(--muted)", display: "block", marginBottom: "4px" }}>[SOURCE]</span>
                <strong style={{ color: "var(--ink)", fontWeight: "600" }}>Evidence Links</strong>
              </div>
            </div>

            {/* Down arrows */}
            <div style={{ textAlign: "center", color: "var(--accent)", fontSize: "20px", margin: "16px 0", fontWeight: "bold" }}>↓</div>

            {/* Row 2: AI Pipeline */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "24px" }}>
              <div style={{ border: "1px solid var(--accent)", background: "var(--accent-faint)", padding: "20px", borderRadius: "10px", position: "relative" }}>
                <span style={{ position: "absolute", top: "-10px", left: "16px", background: "var(--accent)", padding: "2px 8px", fontSize: "9px", color: "#ffffff", fontWeight: "bold", borderRadius: "4px", letterSpacing: "0.05em" }}>PIPELINE STAGE 01</span>
                <strong style={{ color: "var(--accent)", display: "block", marginBottom: "6px", fontSize: "14px" }}>Fact Extraction</strong>
                <span style={{ fontSize: "12.5px", color: "var(--ink-soft)" }}>Extracts absolute professional truths without embellishment or hype.</span>
              </div>
              <div style={{ border: "1px solid var(--accent)", background: "var(--accent-faint)", padding: "20px", borderRadius: "10px", position: "relative" }}>
                <span style={{ position: "absolute", top: "-10px", left: "16px", background: "var(--accent)", padding: "2px 8px", fontSize: "9px", color: "#ffffff", fontWeight: "bold", borderRadius: "4px", letterSpacing: "0.05em" }}>PIPELINE STAGE 02</span>
                <strong style={{ color: "var(--accent)", display: "block", marginBottom: "6px", fontSize: "14px" }}>Evidence Mapping</strong>
                <span style={{ fontSize: "12.5px", color: "var(--ink-soft)" }}>Pins specific technical outcomes and metrics to claims.</span>
              </div>
            </div>

            {/* Down arrows */}
            <div style={{ textAlign: "center", color: "var(--accent)", fontSize: "20px", margin: "16px 0", fontWeight: "bold" }}>↓</div>

            {/* Row 3: Database Core */}
            <div style={{ border: "1px solid var(--ink)", background: "var(--ink)", color: "var(--bg)", padding: "24px", borderRadius: "12px", textAlign: "center", marginBottom: "24px", boxShadow: "var(--shadow-lg)" }}>
              <span style={{ fontSize: "10px", color: "var(--line-strong)", display: "block", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>Single Source of Truth</span>
              <strong style={{ fontSize: "17px", display: "block", margin: "4px 0", color: "#ffffff", fontFamily: "var(--font-mono)" }}>career-data/profile.json</strong>
              <span style={{ fontSize: "12.5px", color: "rgba(255, 255, 255, 0.75)" }}>Valid, structured, portable knowledge base. Fully owned by you.</span>
            </div>

            {/* Down arrows */}
            <div style={{ textAlign: "center", color: "var(--accent)", fontSize: "20px", margin: "16px 0", fontWeight: "bold" }}>↓</div>

            {/* Row 4: Outputs */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
              <div style={{ border: "1px solid var(--line-strong)", background: "var(--bg)", padding: "16px", borderRadius: "8px", textAlign: "center", boxShadow: "var(--shadow-sm)" }}>
                <span style={{ fontSize: "10px", color: "var(--muted)", display: "block", marginBottom: "4px" }}>[OUTPUT]</span>
                <strong style={{ color: "var(--ink)", fontWeight: "600" }}>Web Portfolio</strong>
              </div>
              <div style={{ border: "1px solid var(--line-strong)", background: "var(--bg)", padding: "16px", borderRadius: "8px", textAlign: "center", boxShadow: "var(--shadow-sm)" }}>
                <span style={{ fontSize: "10px", color: "var(--muted)", display: "block", marginBottom: "4px" }}>[OUTPUT]</span>
                <strong style={{ color: "var(--ink)", fontWeight: "600" }}>Tailored Resume</strong>
              </div>
              <div style={{ border: "1px solid var(--line-strong)", background: "var(--bg)", padding: "16px", borderRadius: "8px", textAlign: "center", boxShadow: "var(--shadow-sm)" }}>
                <span style={{ fontSize: "10px", color: "var(--muted)", display: "block", marginBottom: "4px" }}>[OUTPUT]</span>
                <strong style={{ color: "var(--ink)", fontWeight: "600" }}>Cover Letters</strong>
              </div>
              <div style={{ border: "1px solid var(--line-strong)", background: "var(--bg)", padding: "16px", borderRadius: "8px", textAlign: "center", boxShadow: "var(--shadow-sm)" }}>
                <span style={{ fontSize: "10px", color: "var(--muted)", display: "block", marginBottom: "4px" }}>[OUTPUT]</span>
                <strong style={{ color: "var(--ink)", fontWeight: "600" }}>Interview Prep</strong>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* How the free workflow works */}
      <section className="section">
        <div className="section__header" style={{ marginBottom: "54px" }}>
          <p className="eyebrow">Onboarding Process</p>
          <h2>
            How the free self-hosted workflow works.
          </h2>
          <p className="summary" style={{ fontSize: "18.5px", marginTop: "16px" }}>
            Create your career repository in minutes with three clean stages, with no coding and no proprietary accounts required.
          </p>
        </div>
        <motion.div 
          className="process-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.article className="process-step" variants={itemVariants}>
            <h2>01 · Fork the repository</h2>
            <p>
              Create an independent copy of the AKOS Core repository into your personal GitHub account. The repository and all your professional files remain entirely under your control.
            </p>
            <a className="text-link" href="https://github.com/rollie1212/akos-core/generate" target="_blank" rel="noreferrer">
              Use Template ↗
            </a>
          </motion.article>
          <motion.article className="process-step" variants={itemVariants}>
            <h2>02 · Build with AI workflow</h2>
            <p>
              Use our four specialized AI prompts to extract verified facts, answer narrow clarification questions, generate your schema-compliant <code>profile.json</code>, and run a final factual audit.
            </p>
            <a className="text-link" href="/prompts">
              View AI Prompts ↗
            </a>
          </motion.article>
          <motion.article className="process-step" variants={itemVariants}>
            <h2>03 · Commit & Deploy</h2>
            <p>
              Paste your validated JSON into your repository and import it into Vercel. Vercel deploys your portfolio instantly and updates it automatically with every subsequent commit you make.
            </p>
            <a className="text-link" href="/get-started">
              Get Started Guide ↗
            </a>
          </motion.article>
        </motion.div>
      </section>

      {/* What the user receives */}
      <section className="section">
        <div className="section__header" style={{ marginBottom: "48px" }}>
          <p className="eyebrow">Deliverables</p>
          <h2>
            What you receive with AKOS Core.
          </h2>
        </div>
        <motion.div 
          className="capability-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.article className="capability-item" variants={itemVariants}>
            <h3>Personal Web Portfolio</h3>
            <p>
              A high-contrast, lightning-fast career portfolio styled with classic editorial typography and strict layout hygiene. Optimized for recruiters and hiring managers.
            </p>
          </motion.article>
          <motion.article className="capability-item" variants={itemVariants}>
            <h3>Structured Knowledge Base</h3>
            <p>
              A portable <code>profile.json</code> file that structures your entire timeline, capabilities, experiences, and evidence. Yours to reuse across any future tool or service.
            </p>
          </motion.article>
          <motion.article className="capability-item" variants={itemVariants}>
            <h3>Case-Study Blueprint</h3>
            <p>
              Includes a structured markdown template for writing credible, factual project case studies that explain problems, solutions, and your exact boundaries of contribution.
            </p>
          </motion.article>
          <motion.article className="capability-item" variants={itemVariants}>
            <h3>Continuous Deployments</h3>
            <p>
              Configure once via Vercel. Subsequent changes to your database via GitHub commits trigger automatic, serverless rebuilds. Zero maintenance overhead.
            </p>
          </motion.article>
        </motion.div>
      </section>

      {/* Real example section */}
      <section className="section" style={{ background: "var(--accent-faint)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: "800px" }}
        >
          <p className="eyebrow">Real Example</p>
          <h2>
            Inspect a complete career operating system.
          </h2>
          <p className="summary" style={{ fontSize: "18.5px", marginBottom: "32px" }}>
            Andrii Kysil's live AKOS website serves as the primary demonstration of how structured professional evidence builds immediate credibility with engineering and product leaders.
          </p>
          <div className="actions">
            <a className="button button--primary" href="https://akos-mu.vercel.app/" target="_blank" rel="noreferrer">
              Open Live Example Website ↗
            </a>
            <a className="button" href="/demo">
              Browse Local Live Demo
            </a>
          </div>
        </motion.div>
      </section>

      {/* Product Principles */}
      <section className="section">
        <div className="section__header" style={{ marginBottom: "48px" }}>
          <p className="eyebrow">Principles</p>
          <h2>
            Product philosophy and data ethics.
          </h2>
        </div>
        <motion.div 
          className="capability-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.article className="capability-item" variants={itemVariants}>
            <h3>Career Data Ownership</h3>
            <p>
              Your career database lives in your private or public GitHub repository. No central company owns or monetizes your professional record.
            </p>
          </motion.article>
          <motion.article className="capability-item" variants={itemVariants}>
            <h3>Factual Precision</h3>
            <p>
              AI is structured strictly as an extraction and audit assistant. Our prompting system blocks AI models from inventing fake metrics, exaggerating seniority, or rewriting history.
            </p>
          </motion.article>
          <motion.article className="capability-item" variants={itemVariants}>
            <h3>Resume as an Output</h3>
            <p>
              Your professional data belongs in a normalized database, from which resumes, cover letters, and web portfolios are selectively queried and built on demand.
            </p>
          </motion.article>
          <motion.article className="capability-item" variants={itemVariants}>
            <h3>Accountless Delivery</h3>
            <p>
              The entire platform works securely without requiring you to register an AKOS account, log into our servers, or pass credentials to third-party databases.
            </p>
          </motion.article>
        </motion.div>
      </section>

      {/* Pricing Preview Grid */}
      <section className="section">
        <div className="section__header" style={{ marginBottom: "54px" }}>
          <p className="eyebrow">Pricing Model</p>
          <h2>
            AKOS Core is entirely free.
          </h2>
          <p className="summary" style={{ fontSize: "18.5px", marginTop: "16px" }}>
            The open-source template, knowledge-base structure, prompt workflow and self-hosted portfolio are available at no cost.
          </p>
        </div>
        <motion.div 
          className="pricing-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {plans.map((plan) => (
            <motion.article 
              key={plan.name} 
              className={`pricing-card ${plan.available ? "pricing-card--active" : "pricing-card--soon"}`}
              variants={itemVariants}
            >
              <p className="eyebrow" style={{ fontSize: "11px", color: plan.available ? "var(--accent)" : "var(--muted)", textTransform: "uppercase", marginBottom: "14px" }}>
                {plan.status}
              </p>
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <p style={{ margin: "0 0 24px" }}>{plan.description}</p>
              
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              {plan.available ? (
                <a className="button button--primary" href={plan.href} target="_blank" rel="noreferrer">
                  {plan.action} ↗
                </a>
              ) : (
                <span className="coming-soon">
                  Coming Soon
                </span>
              )}
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Ready to start?</p>
          <h2>Create your personal career database today.</h2>
          <p className="summary" style={{ margin: "0 auto 36px" }}>
            Fork the template, run the prompt workflow, and deploy your evidence-backed website in less than 15 minutes.
          </p>
          <div className="actions" style={{ justifyContent: "center" }}>
            <a className="button button--primary" href="/get-started">
              Get Started Guide
            </a>
            <a className="button" href="https://github.com/rollie1212/akos-core/generate" target="_blank" rel="noreferrer">
              Use GitHub Template ↗
            </a>
          </div>
        </motion.div>
      </section>

      <SupportFooter />
    </main>
  );
}
