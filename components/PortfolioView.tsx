'use client';

import React from "react";
import { motion } from "motion/react";
import { ProfileData } from "@/lib/profile";
import SupportFooter from "./SupportFooter";

interface PortfolioViewProps {
  data: ProfileData;
}

export default function PortfolioView({ data }: PortfolioViewProps) {
  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
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
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg)", color: "var(--ink)" }}>
      <nav className="topbar" id="portfolio-nav">
        <a href="/" className="brand">
          {data.name}
        </a>
        <div>
          <a href="#capabilities">Capabilities</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="/get-started" style={{ color: "var(--accent)", fontWeight: "600" }}>
            Create Your AKOS
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="page-hero">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">
            {data.location || "Available Worldwide"}
          </p>
          <h1>
            {data.name}
          </h1>
          <p className="summary" style={{ fontSize: "26px", fontWeight: "650", color: "var(--ink)", lineHeight: 1.25, marginBottom: "28px", maxWidth: "860px" }}>
            {data.headline}
          </p>
          <p className="summary" style={{ color: "var(--ink-soft)" }}>
            {data.summary}
          </p>

          {data.links && data.links.length > 0 && (
            <div className="hero__actions">
              {data.links.map((link) => (
                <a
                  key={link.label}
                  className="button button--primary"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </motion.div>
      </section>

      {/* Capabilities section */}
      <section className="section section--split" id="capabilities">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">
            Capabilities
          </p>
          <h2>
            Evidence-backed professional superpowers.
          </h2>
          <p className="summary" style={{ fontSize: "18.5px", lineHeight: 1.6 }}>
            These focus areas represent core strengths developed and refined through hands-on practice, technical problem-solving, and professional delivery.
          </p>
        </motion.div>

        <motion.div 
          className="capability-grid example-capabilities"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {data.capabilities.map((cap, i) => (
            <motion.article 
              className="capability-item" 
              key={cap}
              variants={itemVariants}
            >
              <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", color: "var(--accent)", fontWeight: "600", display: "block", marginBottom: "8px" }}>
                0{i + 1}
              </span>
              <h3>{cap}</h3>
              <p>
                Proven execution capability and specialized experience in this area, backed by verifiable professional outcomes.
              </p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Experience Timeline */}
      {data.experience && data.experience.length > 0 && (
        <section className="section" id="experience">
          <div className="section__header" style={{ marginBottom: "54px" }}>
            <p className="eyebrow">Experience</p>
            <h2>
              Professional timeline and track record.
            </h2>
            <p className="summary" style={{ fontSize: "18.5px" }}>
              A history of structured employment with concrete evidence of personal contributions and business results.
            </p>
          </div>
          <motion.div 
            className="process-list"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {data.experience.map((exp, index) => (
              <motion.article
                className="process-step"
                key={exp.company + exp.role + index}
                variants={itemVariants}
              >
                <div>
                  <h2 style={{ fontSize: "28px", fontWeight: "650", margin: "0 0 8px", lineHeight: 1.15, fontFamily: "var(--font-display)" }}>{exp.company}</h2>
                  <p className="eyebrow" style={{ margin: 0, fontSize: "11px" }}>{exp.period}</p>
                </div>
                <div>
                  <h3 style={{ fontSize: "22px", fontWeight: "600", margin: "0 0 12px", fontFamily: "var(--font-display)" }}>{exp.role}</h3>
                  <p style={{ color: "var(--ink-soft)", fontSize: "16px", margin: 0, lineHeight: 1.6 }}>{exp.summary}</p>
                </div>
                <div style={{ background: "var(--accent-faint)", border: "1px solid rgba(15, 98, 92, 0.08)", padding: "24px", borderRadius: "10px" }}>
                  <strong style={{ display: "block", marginBottom: "12px", fontSize: "11px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent)" }}>
                    Verifiable Evidence
                  </strong>
                  {exp.evidence && exp.evidence.length > 0 ? (
                    <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "14.5px", color: "var(--ink-soft)" }}>
                      {exp.evidence.map((ev, i) => (
                        <li key={i} style={{ marginBottom: "8px", lineHeight: 1.45 }}>{ev}</li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0 }}>No evidence points listed.</p>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>
      )}

      {/* Featured Projects Grid */}
      {data.projects && data.projects.length > 0 && (
        <section className="section" id="projects">
          <div className="section__header" style={{ marginBottom: "48px" }}>
            <p className="eyebrow">Projects</p>
            <h2>
              Featured work and technical proof.
            </h2>
            <p className="summary" style={{ fontSize: "18.5px" }}>
              Case studies, tools, and open-source contributions demonstrating hands-on technical execution.
            </p>
          </div>
          <motion.div 
            className="additional-work__grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {data.projects.map((project) => (
              <motion.article
                className="compact-project"
                key={project.name}
                variants={itemVariants}
              >
                <div className="compact-project__copy">
                  <h3 style={{ fontSize: "24px", fontWeight: "650", margin: "0 0 12px", fontFamily: "var(--font-display)" }}>{project.name}</h3>
                  <p style={{ color: "var(--ink-soft)", fontSize: "15.5px", lineHeight: 1.6, margin: "0 0 16px" }}>{project.description}</p>
                  
                  {project.skills && project.skills.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", margin: "20px 0" }}>
                      {project.skills.map((skill) => (
                        <code
                          key={skill}
                          style={{
                            fontSize: "11.5px",
                            background: "var(--faint)",
                            border: "1px solid var(--line)",
                            borderRadius: "5px",
                            padding: "3px 8px",
                            color: "var(--accent)"
                          }}
                        >
                          {skill}
                        </code>
                      ))}
                    </div>
                  )}

                  {project.url ? (
                    <a
                      className="text-link"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{ marginTop: "12px", display: "inline-flex" }}
                    >
                      View Project Reference ↗
                    </a>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>
      )}

      <SupportFooter isPortfolio={true} />
    </main>
  );
}
