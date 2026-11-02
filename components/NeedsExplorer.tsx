"use client";
import { useState } from "react";
import { AREAS } from "@/lib/content";

export function NeedsExplorer() {
  const [id, setId] = useState("skin");
  const area = AREAS.find((a) => a.id === id)!;

  return (
    <div className="needs-grid">
      <div className="dog-stage">
        <svg role="img" aria-label="Illustration of a dog" viewBox="0 0 560 420" className="dog-svg">
          <path d="M440 190c30-10 52-40 58-78" fill="none" stroke="#9FB8EE" strokeWidth="22" strokeLinecap="round" className="dog-tail" />
          <ellipse cx="300" cy="210" rx="160" ry="82" fill="#B4C9F4" />
          <rect x="180" y="230" width="40" height="150" rx="20" fill="#9FB8EE" />
          <rect x="230" y="240" width="40" height="140" rx="20" fill="#B4C9F4" />
          <rect x="360" y="230" width="40" height="150" rx="20" fill="#9FB8EE" />
          <rect x="410" y="225" width="40" height="155" rx="20" fill="#B4C9F4" />
          <path d="M150 200c-10-40 0-80 30-100" fill="none" stroke="#B4C9F4" strokeWidth="56" strokeLinecap="round" />
          <circle cx="140" cy="110" r="62" fill="#B4C9F4" />
          <ellipse cx="82" cy="138" rx="44" ry="30" fill="#C9D8F8" />
          <circle cx="44" cy="130" r="10" fill="#1B3A8C" />
          <circle cx="118" cy="96" r="7" fill="#1B3A8C" />
          <ellipse cx="175" cy="88" rx="26" ry="48" transform="rotate(25 175 88)" fill="#7E9EE4" />
          <ellipse cx="290" cy="215" rx="70" ry="40" fill="#C9D8F8" />
        </svg>
        <div className="tags">
          {AREAS.map((a) => (
            <button
              key={a.id}
              data-id={a.id}
              className={`pv-tag${a.id === id ? " on" : ""}`}
              aria-pressed={a.id === id}
              style={{ left: a.pos.left, top: a.pos.top }}
              onClick={() => setId(a.id)}
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>

      <div className="needs-card" aria-live="polite">
        <div key={id} className="needs-body">
          <span className="eyebrow">{area.label}</span>
          <p className="needs-text">{area.text}</p>
          <span className="needs-sub">Related products:</span>
          {area.available ? (
            <div className="mini-product">
              <span className="mini-thumb">[Product]</span>
              <span className="mini-info"><strong>Wound &amp; Skin Care</strong>For minor cuts, scrapes and irritated skin</span>
              <button className="btn btn-blue btn-sm">Add to cart</button>
            </div>
          ) : (
            <div className="mini-product soon">
              <span className="mini-info"><strong>PetVet {area.label} care is coming soon.</strong>Get notified when it launches.</span>
              <button className="btn btn-yellow btn-sm">Notify me</button>
            </div>
          )}
        </div>
        <div className="quiz-nudge">Not sure what your pet needs?<a href="#needs">Take our quiz</a></div>
      </div>
    </div>
  );
}
