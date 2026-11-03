"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ALL, CARE, IMG, type ArtKey, type Care } from "@/lib/data";
import { useStore } from "./Store";

export function Art({ k, className, sizes = "120px" }: { k: ArtKey; className?: string; sizes?: string }) {
  const i = IMG[k];
  return <Image src={i.src} width={i.w} height={i.h} alt="" className={className} sizes={sizes} />;
}

export function PackFace({ p }: { p: Care }) {
  return (
    <>
      <div className="top">
        <div className="brand">PETVET<small>PET CARE</small></div>
        <div className="mini-stamp"><i /></div>
      </div>
      <div className="slogan">
        {p.slogan.map((l, i) => (<Fragment key={l}>{l}{i < p.slogan.length - 1 && <br />}</Fragment>))}
      </div>
      <div className="art"><Art k={p.art} sizes="200px" /></div>
      <div className="foot">
        <div className="name">{p.name}</div>
        <div className="sub"><span>{p.kind} · dogs &amp; cats</span><span>{p.size}</span></div>
      </div>
    </>
  );
}

/** Swatch used in kit/quiz rows */
export function Swatch({ id }: { id: string }) {
  const c = CARE.find((x) => x.id === id);
  if (c) return <span className={`sw th-${c.th}`}><Art k={c.art} sizes="46px" /></span>;
  if (id === "cozy") return <span className="sw" style={{ background: "var(--cream)", border: "1.5px solid var(--line)", fontSize: 24 }}>🥛</span>;
  return <span className="sw" style={{ background: "linear-gradient(160deg,var(--kraft),var(--kraft-d))" }} />;
}

export function MiniPack({ id }: { id: string }) {
  const c = CARE.find((x) => x.id === id);
  return c ? <span className={`mp th-${c.th}`}><Art k={c.art} sizes="60px" /></span> : <span className="mp k" />;
}

type AddProps = { id?: string; kit?: string; className: string; label?: string; qty?: number; style?: React.CSSProperties; onDone?: () => void };
export function AddButton({ id, kit, className, label = "Add to bag", qty = 1, style }: AddProps) {
  const { add, addKit } = useStore();
  const [done, setDone] = useState(false);
  const t = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(t.current), []);
  return (
    <button
      type="button"
      className={`${className}${done ? " done" : ""}`}
      style={style}
      onClick={() => {
        if (kit) addKit(kit); else if (id) add(id, qty);
        setDone(true); clearTimeout(t.current); t.current = setTimeout(() => setDone(false), 1200);
      }}
    >
      {done ? "Added ✓" : label}
    </button>
  );
}

export function FeatureLink({ id, className, children, href = "#shop" }: { id: string; className?: string; children: React.ReactNode; href?: string }) {
  const { select } = useStore();
  return (
    <a href={href} className={className} data-feature={id} onClick={(e) => { e.preventDefault(); select(id, true); }}>{children}</a>
  );
}
export function FeatureButton({ id, className, children, ...rest }: { id: string; className?: string; children: React.ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { select } = useStore();
  return <button type="button" className={className} onClick={() => select(id, true)} {...rest}>{children}</button>;
}

export function RowName({ id }: { id: string }) {
  return <span className="tx"><b>{ALL[id].name}</b><small>{ALL[id].sub}</small></span>;
}
