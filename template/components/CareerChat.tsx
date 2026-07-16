"use client";

import { FormEvent, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

export default function CareerChat({ personName }: { personName: string }) {
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

  if (!open) {
    return (
      <button className="career-chat__launcher" type="button" onClick={() => setOpen(true)}>
        Ask about {personName}
      </button>
    );
  }

  return (
    <section className="career-chat__panel" aria-label={`Ask about ${personName}`}>
      <header className="career-chat__header">
        <div><strong>Ask about {personName}</strong><span>AI portfolio assistant</span></div>
        <button type="button" onClick={() => setOpen(false)} aria-label="Close chat">×</button>
      </header>
      <div className="career-chat__body" aria-live="polite">
        {messages.length === 0 ? (
          <p>Ask about experience, projects, skills or fit for a role. Answers use only the Markdown knowledge base in this repository.</p>
        ) : null}
        {messages.map((message, index) => (
          <article className={`career-chat__message career-chat__message--${message.role}`} key={`${message.role}-${index}`}>
            {message.content}
          </article>
        ))}
        {loading ? <p>Thinking…</p> : null}
        {error ? <p className="career-chat__error">{error}</p> : null}
      </div>
      <form className="career-chat__form" onSubmit={submit}>
        <textarea value={draft} onChange={(event) => setDraft(event.target.value)} maxLength={2000} placeholder="Ask a factual question" rows={3} />
        <button type="submit" disabled={loading || !draft.trim()}>Send</button>
      </form>
    </section>
  );
}
