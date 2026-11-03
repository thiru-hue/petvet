"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ALL, IMG, NAV, SITE } from "@/lib/data";
import { useStore } from "./Store";

export function Header() {
  const { count, setOpen } = useStore();
  const [menu, setMenu] = useState(false);
  const [bump, setBump] = useState(false);
  useEffect(() => {
    if (!count) return;
    setBump(true);
    const t = setTimeout(() => setBump(false), 200);
    return () => clearTimeout(t);
  }, [count]);
  return (
    <header className="nav">
      <div className="wrap">
        <Link className="logo" href="#top" aria-label="PetVet home" onClick={() => setMenu(false)}>
          <Image src="/brand/petvet-logo-cobalt.svg" alt="PetVet" width={787} height={288} priority unoptimized />
        </Link>
        <ul id="menu" className={menu ? "open" : ""}>
          {NAV.map((n) => (<li key={n.href}><a href={n.href} onClick={() => setMenu(false)}>{n.label}</a></li>))}
        </ul>
        <div className="navr">
          <button className="menubtn" aria-expanded={menu} aria-controls="menu" onClick={() => setMenu((m) => !m)}>{menu ? "Close" : "Menu"}</button>
          <button className="bagbtn" aria-label={`Open bag, ${count} items`} onClick={() => setOpen(true)}>
            Bag <span className={`count${bump ? " bump" : ""}`}>{count}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export function MobileBar() {
  const { count, setOpen } = useStore();
  return (
    <nav className="mbar" aria-label="Quick links">
      <a href="#care">Shop</a>
      <a href="#quiz" className="hot">Build a kit</a>
      <button onClick={() => setOpen(true)}>Bag · <span>{count}</span></button>
    </nav>
  );
}

export function BagDrawer() {
  const { bag, open, setOpen, change, notify, toast, toastOn } = useStore();
  const ids = Object.keys(bag);
  const order = () => "Hi PetVet! I’d like to order:\n" + ids.map((id) => `• ${ALL[id].name} × ${bag[id]}`).join("\n");
  const close = () => setOpen(false);
  return (
    <>
      <div className={`scrim${open ? " on" : ""}`} onClick={close} />
      <aside className={`drawer${open ? " on" : ""}`} aria-label="Your bag" aria-hidden={!open}>
        <div className="dh"><h3>Your bag</h3><button className="x" aria-label="Close bag" onClick={close}>×</button></div>
        <div className="items">
          {!ids.length ? (
            <div className="empty">
              <Image src={IMG.dog_bone.src} width={IMG.dog_bone.w} height={IMG.dog_bone.h} alt="" style={{ height: 130, width: "auto", margin: "0 auto 14px" }} />
              <p>Your bag is empty.<br />Go on, treat them.</p>
            </div>
          ) : ids.map((id) => (
            <div className="bline" key={id}>
              <div><b>{ALL[id].name}</b><small>{ALL[id].sub}</small></div>
              <div className="bq">
                <button aria-label={`Less ${ALL[id].name}`} onClick={() => change(id, -1)}>−</button>
                <span>{bag[id]}</span>
                <button aria-label={`More ${ALL[id].name}`} onClick={() => change(id, 1)}>+</button>
              </div>
            </div>
          ))}
        </div>
        <div className="df">
          {!ids.length ? (
            <a className="btn navy" href="#care" onClick={close}>Start shopping</a>
          ) : (
            <>
              <a className="btn red" target="_blank" rel="noopener" href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(order())}`}>Order on WhatsApp</a>
              <button className="btn ghost" style={{ color: "var(--navy)" }} onClick={async () => { try { await navigator.clipboard.writeText(order()); notify("Order copied"); } catch { notify("Couldn’t copy — try again"); } }}>Copy order</button>
              <small>Prices &amp; online checkout coming at launch.</small>
            </>
          )}
        </div>
      </aside>
      <div className={`toast${toastOn ? " on" : ""}`} role="status">{toast}</div>
    </>
  );
}

export function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".rv");
    els.forEach((el, i) => (el.style.transitionDelay = `${(i % 4) * 80}ms`));
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((es) => es.forEach((x) => { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

export function JoinForm() {
  const [ok, setOk] = useState("");
  return (
    <>
      <form onSubmit={(e) => { e.preventDefault(); setOk("Thanks! 🐾 Email sign-ups go live with the launch."); (e.target as HTMLFormElement).reset(); }}>
        <input type="email" required autoComplete="email" placeholder="your@email.com" aria-label="Email address" />
        <button type="submit">Notify me</button>
      </form>
      <div className="ok" role="status">{ok}</div>
    </>
  );
}
