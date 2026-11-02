"use client";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/content";
import { Paw } from "./Paw";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <nav aria-label="Main" className="nav container">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark"><Paw color="#1B3A8C" /></span>
          petvet
        </a>
        <div className="nav-links">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </div>
        <div className="nav-actions">
          <a href="#needs" className="btn btn-ghost nav-quiz">Take the quiz</a>
          <button aria-label="Search" className="icon-btn icon-btn-ghost">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
          </button>
          <button aria-label="Cart, 0 items" className="icon-btn icon-btn-yellow">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>
          </button>
          <button
            className="icon-btn icon-btn-ghost menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`burger${open ? " open" : ""}`} aria-hidden="true"><i /><i /><i /></span>
          </button>
        </div>
      </nav>
      <div id="mobile-menu" className={`mobile-menu${open ? " open" : ""}`} aria-hidden={!open}>
        {NAV.map((n, i) => (
          <a key={n.href} href={n.href} tabIndex={open ? 0 : -1} style={{ transitionDelay: `${i * 45}ms` }} onClick={() => setOpen(false)}>
            {n.label}
          </a>
        ))}
        <a href="#needs" tabIndex={open ? 0 : -1} className="btn btn-yellow" onClick={() => setOpen(false)}>Take the quiz</a>
      </div>
    </header>
  );
}
