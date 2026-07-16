"use client";

import { FormEvent, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

export default function CareerChat() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent) {
    event.preventDefault();
    const content = draft.trim();
    if (!content || loading) return;

    const nextMessages: Message[] = [...messages, { role: "user", content }];
    setMessages(nextMessages);
    setDraft("");
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.slice(-12) }),
      });
      const data = (await response.json()) as { answer?: string; error?: string };
      if (!response.ok || !data.answer) throw new Error(data.error || "Chat request failed.");
      setMessages((current) => [...current, { role: "assistant", content: data.answer! }]);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "The assistant is unavailable.");
    } finally {
      setLoading(false);
    }
  }

  const shell = { position: "fixed" as const, right: 20, bottom: 20, zIndex: 50 };

  if (!open) {
    return (
      <div style={shell}>
        <button style={{ border: 0, borderRadius: 999, background: "#0e0f11", color: "white", padding: "13px 18px", fontWeight: 700, cursor: "pointer" }} type="button" onClick={() => setOpen(true)}>
          Ask this profile
        </button>
      </div>
    );
  }

  return (
    <section style={{ ...shell, width: "min(400px, calc(100vw - 32px))", height: "min(600px, calc(100vh - 40px))", background: "white", border: "1px solid #e6e4de", borderRadius: 14, boxShadow: "0 24px 68px rgba(11,11,12,.16)", display: "grid", gridTemplateRows: "auto 1fr auto", overflow: "hidden" }} aria-label="AI portfolio assistant">
      <header style={{ padding: 14, borderBottom: "1px solid #e6e4de", display: "flex", justifyContent: "space-between", gap: 12 }}>
        <div><strong style={{ display: "block" }}>Ask this profile</strong><span style={{ color: "#717680", fontSize: 12 }}>Answers from the Markdown knowledge base</span></div>
        <button style={{ border: 0, background: "transparent", fontSize: 24, cursor: "pointer" }} type="button" onClick={() => setOpen(false)} aria-label="Close chat">×</button>
      </header>
      <div style={{ padding: 16, overflowY: "auto", display: "grid", alignContent: "start", gap: 12 }} aria-live="polite">
        {messages.length === 0 ? <p style={{ margin: 0, color: "#2d3036" }}>Ask about experience, projects, skills or fit for a role.</p> : null}
        {messages.map((message, index) => (
          <article key={`${message.role}-${index}`} style={{ whiteSpace: "pre-wrap", lineHeight: 1.55, padding: message.role === "user" ? "9px 11px" : 0, background: message.role === "user" ? "#f2f1ed" : "transparent", borderRadius: 10, justifySelf: message.role === "user" ? "end" : "start", maxWidth: "92%" }}>
            {message.content}
          </article>
        ))}
        {loading ? <p style={{ margin: 0 }}>Thinking…</p> : null}
        {error ? <p style={{ margin: 0, color: "#8b1e1e", fontSize: 13 }}>{error}</p> : null}
      </div>
      <form style={{ padding: 12, borderTop: "1px solid #e6e4de", display: "grid", gap: 8 }} onSubmit={submit}>
        <textarea style={{ width: "100%", resize: "none", border: "1px solid #e6e4de", borderRadius: 10, padding: 12, font: "inherit" }} value={draft} onChange={(event) => setDraft(event.target.value)} maxLength={2000} placeholder="Ask a factual question" rows={3} />
        <button style={{ justifySelf: "end", border: 0, borderRadius: 999, background: "#0f625c", color: "white", padding: "10px 16px", fontWeight: 700, cursor: "pointer" }} type="submit" disabled={loading || !draft.trim()}>Send</button>
      </form>
    </section>
  );
}
