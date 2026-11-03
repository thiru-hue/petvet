"use client";
import { useState } from "react";
import Image from "next/image";
import { ALL, AREAS, CARE, IMG, NEEDS, TREATS, type Treat } from "@/lib/data";
import { useStore } from "./Store";
import { AddButton, Art, FeatureButton, PackFace, RowName, Swatch } from "./ui";

/* ---------------- care packs (flip cards) ---------------- */
export function CarePacks() {
  const [on, setOn] = useState<string | null>(null);
  return (
    <div className="packs">
      {CARE.map((p) => (
        <div className="pcard rv" key={p.id}>
          <div
            className={`flip${on === p.id ? " on" : ""}`}
            tabIndex={0}
            role="button"
            aria-label={`${p.name} — flip for how to use`}
            onClick={() => { if (!matchMedia("(hover:hover)").matches) setOn(on === p.id ? null : p.id); }}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOn(on === p.id ? null : p.id); } }}
          >
            <div className="inner">
              <div className={`face th-${p.th}`}><PackFace p={p} /></div>
              <div className={`face back th-${p.th}`}>
                <div className="top"><div className="brand">{p.name.toUpperCase()}<small>HOW TO USE</small></div><div className="mini-stamp"><i /></div></div>
                <h4>How to use</h4>
                <ol>{p.how.map((h) => <li key={h}>{h}</li>)}</ol>
                <h4>Good to know</h4>
                <ol style={{ listStyle: "disc" }}>{p.know.map((h) => <li key={h}>{h}</li>)}</ol>
                <div className="hint">{p.kind} · {p.size}</div>
              </div>
            </div>
          </div>
          <div className="row">
            <AddButton id={p.id} className="add solid" />
            <FeatureButton id={p.id} className="peek" aria-label={`More about ${p.name}`}>→</FeatureButton>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- quiz ---------------- */
export function Quiz() {
  const { addMany } = useStore();
  const [step, setStep] = useState(0);
  const [pet, setPet] = useState<"dog" | "cat" | null>(null);
  const [needs, setNeeds] = useState<Set<string>>(new Set());
  const recs = () => {
    const out: string[] = [];
    NEEDS.filter((n) => needs.has(n.id)).forEach((n) => {
      if (n.rec === "treat") (pet === "cat" ? ["anchovy"] : ["liver", "lollipop"]).forEach((i) => out.push(i)); else out.push(n.rec);
    });
    return out;
  };
  const steps = (
    <div className="qsteps">{[0, 1, 2].map((i) => <i key={i} className={i <= step ? "on" : ""} />)}</div>
  );
  const toggle = (k: string) => setNeeds((s) => { const n = new Set(s); if (n.has(k)) n.delete(k); else n.add(k); return n; });

  if (step === 0)
    return (
      <div className="qbox rv">
        {steps}
        <h3>Who&apos;s it for?</h3>
        <div className="qs">Every PetVet care pack works for both — we&apos;ll tune the treats.</div>
        <div className="opts">
          <button className={`opt${pet === "dog" ? " on" : ""}`} onClick={() => setPet("dog")}><Art k="dog_bone" sizes="56px" /><span><b>My dog</b><small>Woof</small></span></button>
          <button className={`opt${pet === "cat" ? " on" : ""}`} onClick={() => setPet("cat")}><Art k="cat_run" sizes="56px" /><span><b>My cat</b><small>Meow</small></span></button>
        </div>
        <div className="qnav"><span /><button className="btn navy sm" disabled={!pet} style={pet ? undefined : { opacity: 0.4 }} onClick={() => pet && setStep(1)}>Next →</button></div>
      </div>
    );
  if (step === 1)
    return (
      <div className="qbox rv in">
        {steps}
        <h3>What&apos;s going on?</h3>
        <div className="qs">Pick everything that sounds like your {pet}.</div>
        <div className="opts">
          {NEEDS.map((n) => (
            <button key={n.id} className={`opt${needs.has(n.id) ? " on" : ""}`} onClick={() => toggle(n.id)} aria-pressed={needs.has(n.id)}>
              {n.art ? <Art k={n.art} sizes="56px" /> : <span className="em">{n.em}</span>}
              <span><b>{n.label}</b><small>{n.sub}</small></span>
            </button>
          ))}
        </div>
        <div className="qnav"><button className="qback" onClick={() => setStep(0)}>← Back</button><button className="btn navy sm" disabled={!needs.size} style={needs.size ? undefined : { opacity: 0.4 }} onClick={() => needs.size && setStep(2)}>See my kit →</button></div>
      </div>
    );
  const r = recs();
  return (
    <div className="qbox rv in">
      {steps}
      <h3>Your {pet}&apos;s kit</h3>
      <div className="qs">{r.length} pick{r.length > 1 ? "s" : ""} based on what you told us.</div>
      <div className="res">
        {r.map((id) => (
          <div className="ritem" key={id}><Swatch id={id} /><RowName id={id} /><AddButton id={id} className="add" label="Add" style={{ flex: "none", height: 40, padding: "0 14px" }} /></div>
        ))}
      </div>
      <div className="qnav">
        <button className="qback" onClick={() => { setStep(0); setPet(null); setNeeds(new Set()); }}>← Start over</button>
        <button className="btn red sm" onClick={() => addMany(r, "Kit")}>Add all to bag</button>
      </div>
    </div>
  );
}

/* ---------------- featured product ---------------- */
export function Featured() {
  const { featured, select } = useStore();
  const [qty, setQty] = useState(1);
  const p = CARE.find((x) => x.id === featured)!;
  return (
    <div className="wrap grid">
      <div className="showcase rv" style={{ background: p.bg }}>
        <div className={`bigpack face th-${p.th}`} style={{ position: "relative", inset: "auto" }}><PackFace p={p} /></div>
        <span className="tagx" style={{ left: 20, top: 22 }}>Dogs &amp; cats</span>
        <span className="tagx" style={{ right: 16, top: "46%" }}>Powered by HOCl</span>
        <span className="tagx" style={{ left: 30, bottom: 30 }}>{p.size}</span>
      </div>
      <div className="finfo rv">
        <span className="label">{p.id === "pawtect" ? "Bestseller pick" : "Product spotlight"}</span>
        <h2>{p.name}</h2>
        <div className="sub">{p.kind} · dogs &amp; cats · {p.size}</div>
        <p className="lead">{p.desc}</p>
        <div className="tabs" role="tablist" aria-label="Choose a product">
          {CARE.map((o) => (
            <button key={o.id} role="tab" aria-selected={o.id === featured} className={`tab${o.id === featured ? " on" : ""}`} onClick={() => { select(o.id); setQty(1); }}>{o.name}</button>
          ))}
        </div>
        <div className="buyrow">
          <div className="qty"><button aria-label="Less" onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button><span>{qty}</span><button aria-label="More" onClick={() => setQty((q) => q + 1)}>+</button></div>
          <AddButton id={p.id} qty={qty} className="btn navy" />
        </div>
        <div className="acc">
          <details open><summary>How to use</summary><div className="in"><ol>{p.how.map((h) => <li key={h}>{h}</li>)}</ol></div></details>
          <details><summary>Good to know</summary><div className="in"><ul>{p.know.map((h) => <li key={h}>{h}</li>)}</ul></div></details>
          <details><summary>What&apos;s HOCl?</summary><div className="in">Hypochlorous acid — the same molecule your pet&apos;s own white blood cells make as part of the body&apos;s natural defences.</div></details>
        </div>
      </div>
    </div>
  );
}

/* ---------------- body map ---------------- */
export function BodyMap() {
  const [id, setId] = useState("ears");
  const a = AREAS.find((x) => x.id === id)!;
  return (
    <div className="grid">
      <div className="dogwrap rv">
        <Image src={IMG.dog_itch.src} width={IMG.dog_itch.w} height={IMG.dog_itch.h} alt="Illustration of a dog scratching its ear" sizes="(max-width:720px) 90vw, 440px" />
        {AREAS.map((x) => (
          <button key={x.id} className={`pin${x.id === id ? " on" : ""}`} aria-label={x.label} aria-pressed={x.id === id}
            style={{ left: `calc(30px + (100% - 60px)*${x.x / 100})`, top: `calc(40px + (100% - 40px)*${x.y / 100})` }} onClick={() => setId(x.id)}>{x.n}</button>
        ))}
      </div>
      <div className="mpanel rv" aria-live="polite">
        <span className="label">Spot {a.n} of 6</span>
        <h3>{a.label}</h3>
        <p>{a.text}</p>
        <div className="ritem"><Swatch id={a.rel} /><RowName id={a.rel} /><AddButton id={a.rel} className="add" label="Add" style={{ flex: "none", height: 40, padding: "0 14px" }} /></div>
        <div className="mlist">{AREAS.map((x) => <button key={x.id} className={x.id === id ? "on" : ""} onClick={() => setId(x.id)}>{x.label}</button>)}</div>
        <div className="vet">General guidance only — for anything serious or persistent, please see your vet.</div>
      </div>
    </div>
  );
}

/* ---------------- treats ---------------- */
function rng(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); }
  return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 10000) / 10000; };
}
function WindowArt({ t }: { t: Treat }) {
  const R = rng(t.id);
  const r = (a: number, b: number) => +(a + R() * (b - a)).toFixed(1);
  const els: React.ReactNode[] = [];
  if (t.w === "bars") for (let i = 0; i < 4; i++) els.push(<rect key={i} x={8 + i * 2} y={8 + i * 42} width={64 - i * 3} height={34} rx={5} fill={i % 2 ? t.c1 : t.c2} transform={`rotate(${r(-6, 6)} 40 ${25 + i * 42})`} />);
  if (t.w === "cubes") for (let i = 0; i < 22; i++) els.push(<rect key={i} x={r(4, 62)} y={r(6, 160)} width={14} height={14} rx={3} fill={i % 3 ? t.c1 : t.c2} />);
  if (t.w === "wrap") for (let i = 0; i < 4; i++) { const y = 12 + i * 42; els.push(<g key={i}><ellipse cx={40} cy={y + 16} rx={34} ry={13} fill={t.c1} /><path d={`M8 ${y + 16} q32 -8 64 0`} stroke={t.c2} strokeWidth={5} fill="none" /></g>); }
  if (t.w === "shreds") for (let i = 0; i < 30; i++) els.push(<rect key={i} x={r(2, 66)} y={r(4, 165)} width={r(12, 20)} height={6} rx={3} fill={i % 2 ? t.c1 : t.c2} transform={`rotate(${r(-60, 60)})`} style={{ transformBox: "fill-box", transformOrigin: "center" }} />);
  if (t.w === "lolly") for (let i = 0; i < 3; i++) { const y = 30 + i * 55; els.push(<g key={i}><rect x={44} y={y - 4} width={34} height={8} rx={4} fill={t.c2} /><circle cx={30} cy={y} r={22} fill={t.c1} /><circle cx={30} cy={y} r={13} fill="none" stroke="#5a2a20" strokeWidth={2} opacity={0.5} /></g>); }
  return <svg viewBox="0 0 80 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">{els}</svg>;
}

export function Treats() {
  const { notify } = useStore();
  const [f, setF] = useState("all");
  const [pick, setPick] = useState<string | null>(null);
  const [wig, setWig] = useState(false);
  const list = TREATS.filter((t) => f === "all" || t.f.includes(f));
  const shake = () => {
    setWig(false); requestAnimationFrame(() => setWig(true));
    const t = list[Math.floor(Math.random() * list.length)];
    setPick(null);
    setTimeout(() => { setPick(t.id); document.querySelector(`[data-t="${t.id}"]`)?.scrollIntoView({ behavior: "smooth", block: "center" }); notify(`Today’s pick: ${ALL[t.id].name}`); }, 350);
  };
  return (
    <>
      <div className="tbar">
        <div className="chips" role="group" aria-label="Filter treats">
          {[["all", "All treats"], ["chicken", "Chicken"], ["sea", "From the sea"]].map(([k, l]) => (
            <button key={k} className={`chip${f === k ? " on" : ""}`} aria-pressed={f === k} onClick={() => setF(k)}>{l}</button>
          ))}
        </div>
        <div className="shake">can&apos;t decide? <button className={wig ? "go" : ""} aria-label="Pick a random treat" onClick={shake}>🎲</button></div>
      </div>
      <div className="tgrid">
        {list.map((t) => (
          <article className={`treat${pick === t.id ? " pick" : ""}`} data-t={t.id} key={t.id}>
            <div className="pouch">
              <div className="window"><WindowArt t={t} /></div>
              <div className="tlabel">
                <div className="tn">{t.name}{t.for ? ` – ${t.for}` : ""}</div>
                <div className="row">Pack size: {t.size}</div>
                <div className="row">Store in a cool, dry place away from sunlight.</div>
                <div className="mii">Made in India</div>
              </div>
            </div>
            <div className="meta"><h3>{t.name}</h3><span className="tag">{t.size}</span></div>
            <p>{t.desc}{t.for ? ` For ${t.for.toLowerCase()}.` : ""}</p>
            <AddButton id={t.id} className="add" />
          </article>
        ))}
      </div>
    </>
  );
}

/* ---------------- crew ---------------- */
export function Crew() {
  const items = [
    { id: "pawtect", a: "cat_run" as const, n: "Pawtect", s: "the zoomie paws", c: "var(--red)" },
    { id: "pawdent", a: "dog_bone" as const, n: "Pawdent", s: "the big smile", c: "var(--navy)" },
    { id: "pawse", a: "dog_itch" as const, n: "Pawse the Itch", s: "the scratcher", c: "var(--navy)" },
    { id: "pawsense", a: "cat_fish" as const, n: "Pawsense", s: "the napper", c: "var(--red)" },
  ];
  return (
    <div className="crew-grid">
      {items.map((i) => (
        <FeatureButton key={i.id} id={i.id} className="rv">
          <Art k={i.a} sizes="(max-width:720px) 40vw, 200px" />
          <b style={{ color: i.c }}>{i.n}</b>
          <span>{i.s}</span>
        </FeatureButton>
      ))}
    </div>
  );
}
