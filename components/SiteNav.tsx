import React from "react";

interface SiteNavProps {
  isPortfolio?: boolean;
}

export default function SiteNav({ isPortfolio = false }: SiteNavProps) {
  return (
    <nav className="topbar" id="site-nav">
      <a href="/" className="brand">
        {isPortfolio ? "Portfolio" : "AKOS Core"}
      </a>
      <div>
        {isPortfolio ? (
          <>
            <a href="#capabilities">Capabilities</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
          </>
        ) : (
          <>
            <a href="/get-started">Get started</a>
            <a href="/prompts">Prompts</a>
            <a href="/examples">Examples</a>
            <a href="/pricing">Pricing</a>
          </>
        )}
        <a
          href="https://github.com/rollie1212/akos-core"
          target="_blank"
          rel="noreferrer"
          className="button"
          style={{
            fontSize: "13.5px",
            padding: "4px 12px",
            minHeight: "auto",
            border: "1px solid var(--line-strong)",
            borderRadius: "6px",
          }}
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}
