"use client";

import { useEffect, useState, type FormEvent } from "react";
import { OPEN_SIGNUP } from "./ScrollEffects";

const PLANS = ["Explorer", "Voyager", "Globetrotter"];

export default function SignupModal() {
  const [open, setOpen] = useState(false);
  const [plan, setPlan] = useState(PLANS[0]);
  const [done, setDone] = useState<string | null>(null);

  useEffect(() => {
    const onOpen = (e: Event) => {
      const p = (e as CustomEvent<string | undefined>).detail;
      if (p && PLANS.includes(p)) setPlan(p);
      setDone(null);
      setOpen(true);
    };
    window.addEventListener(OPEN_SIGNUP, onOpen);
    return () => window.removeEventListener(OPEN_SIGNUP, onOpen);
  }, []);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("travel:modal", { detail: open }));
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = String(new FormData(e.currentTarget).get("name") || "").trim();
    setDone(name.split(" ")[0] || "traveler");
  };

  return (
    <div className="modal-backdrop" onClick={() => setOpen(false)} data-lenis-prevent="">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="signup-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" aria-label="Close" onClick={() => setOpen(false)}>
          ×
        </button>
        {done ? (
          <>
            <h3 id="signup-title">You’re on board, {done}! ✈</h3>
            <p>
              We’ve reserved your <strong>{plan}</strong> seat. Check your inbox for a link to
              start building your first trip.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); setOpen(false); }}>
              <button className="btn btn-primary" type="submit">Start exploring</button>
            </form>
          </>
        ) : (
          <>
            <h3 id="signup-title">Start your journey</h3>
            <p>Create a free account — no credit card, cancel anytime.</p>
            <form onSubmit={submit}>
              <label>
                Full name
                <input name="name" required autoComplete="name" autoFocus placeholder="Alex Morgan" />
              </label>
              <label>
                Email
                <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
              </label>
              <label>
                Plan
                <select value={plan} onChange={(e) => setPlan(e.target.value)}>
                  {PLANS.map((p) => <option key={p}>{p}</option>)}
                </select>
              </label>
              <button className="btn btn-primary" type="submit">Create free account</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
