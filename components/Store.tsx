"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { ALL, KITS } from "@/lib/data";

type Bag = Record<string, number>;
type Ctx = {
  bag: Bag; count: number; open: boolean; featured: string; toast: string; toastOn: boolean;
  add: (id: string, q?: number) => void;
  addMany: (ids: string[], label: string) => void;
  addKit: (kid: string) => void;
  change: (id: string, d: number) => void;
  setOpen: (v: boolean) => void;
  select: (id: string, scroll?: boolean) => void;
  notify: (m: string) => void;
};
const C = createContext<Ctx | null>(null);
export const useStore = () => {
  const c = useContext(C);
  if (!c) throw new Error("StoreProvider missing");
  return c;
};
const KEY = "petvet-bag-v5";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [bag, setBag] = useState<Bag>({});
  const [open, setOpen] = useState(false);
  const [featured, setFeatured] = useState("pawtect");
  const [toast, setToast] = useState("");
  const [toastOn, setToastOn] = useState(false);
  const loaded = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    try { setBag(JSON.parse(localStorage.getItem(KEY) || "{}")); } catch {}
    loaded.current = true;
  }, []);
  useEffect(() => {
    if (!loaded.current) return;
    try { localStorage.setItem(KEY, JSON.stringify(bag)); } catch {}
  }, [bag]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);

  const notify = useCallback((m: string) => {
    setToast(m); setToastOn(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToastOn(false), 2000);
  }, []);
  const add = useCallback((id: string, q = 1) => {
    setBag((b) => ({ ...b, [id]: (b[id] || 0) + q }));
    notify(`${ALL[id].name} added to bag`);
  }, [notify]);
  const addMany = useCallback((ids: string[], label: string) => {
    setBag((b) => { const n = { ...b }; ids.forEach((i) => (n[i] = (n[i] || 0) + 1)); return n; });
    notify(`${label} added to bag`);
  }, [notify]);
  const addKit = useCallback((kid: string) => {
    const k = KITS.find((x) => x.id === kid)!;
    addMany(k.items, k.name);
  }, [addMany]);
  const change = useCallback((id: string, d: number) => {
    setBag((b) => { const n = { ...b, [id]: (b[id] || 0) + d }; if (n[id] <= 0) delete n[id]; return n; });
  }, []);
  const select = useCallback((id: string, scroll = false) => {
    setFeatured(id);
    if (scroll) document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const count = useMemo(() => Object.values(bag).reduce((a, b) => a + b, 0), [bag]);
  const value = useMemo(
    () => ({ bag, count, open, featured, toast, toastOn, add, addMany, addKit, change, setOpen, select, notify }),
    [bag, count, open, featured, toast, toastOn, add, addMany, addKit, change, select, notify],
  );
  return <C.Provider value={value}>{children}</C.Provider>;
}
