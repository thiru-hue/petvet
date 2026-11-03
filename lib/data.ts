export const SITE = {
  name: "PetVet",
  tagline: "Pet care, from eyes to paws.",
  description:
    "PetVet makes gentle HOCl pet care for dogs and cats: paw spray, oral gel, itch-soothing gel and eye & ear spray — plus soft treats and cozy milk. Vet-smart, pet-loved.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://petvet-eta.vercel.app",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
};

export type Img = { src: string; w: number; h: number };
export const IMG = {
  cat_run: { src: "/images/cat-run.webp", w: 520, h: 447 },
  dog_bone: { src: "/images/dog-bone.webp", w: 520, h: 565 },
  dog_itch: { src: "/images/dog-itch.webp", w: 520, h: 682 },
  cat_fish: { src: "/images/cat-fish.webp", w: 520, h: 509 },
  hero: { src: "/images/hero.webp", w: 900, h: 620 },
} satisfies Record<string, Img>;
export type ArtKey = "cat_run" | "dog_bone" | "dog_itch" | "cat_fish";

export type Care = {
  id: string; name: string; th: "red" | "cream" | "navy" | "cream-r"; slogan: string[]; kind: string; size: string;
  art: ArtKey; bg: string; desc: string; how: string[]; know: string[];
};
export const CARE: Care[] = [
  { id: "pawtect", name: "Pawtect", th: "red", slogan: ["Walk.", "Wipe.", "Wag."], kind: "HOCl paw cleansing spray", size: "100 mL", art: "cat_run", bg: "#f5d9d3",
    desc: "A gentle everyday spray for paws after walks, play and muddy monsoon days — cleans pads and the gaps between toes where dirt and moisture hide.",
    how: ["Shake gently. Spray onto each paw pad and between the toes.", "Massage in for a few seconds.", "Let it air-dry or pat with a towel."],
    know: ["For external use on animals only.", "Do not mix with other cleaners."] },
  { id: "pawdent", name: "Pawdent", th: "cream", slogan: ["Big", "fresh", "smiles"], kind: "HOCl oral care gel", size: "50 g", art: "dog_bone", bg: "#dfe5f6",
    desc: "A gentle daily gel for teeth and gums, made for pets who won't sit still for a brush. Helps keep breath fresh between vet cleanings.",
    how: ["Squeeze a pea-sized amount onto your fingertip or a pet toothbrush.", "Rub gently along the gum line and teeth."],
    know: ["For animal use only.", "If gums bleed or look swollen, see your vet."] },
  { id: "pawse", name: "Pawse the Itch", th: "navy", slogan: ["Less itch,", "more naps"], kind: "HOCl soothing skin gel", size: "50 g", art: "dog_itch", bg: "#cfd8f2",
    desc: "A cooling gel for itchy, irritated patches of skin. It stays where you put it, so it keeps working on the spots your pet won't leave alone.",
    how: ["Part the fur so the gel reaches the skin.", "Apply a thin layer to the affected area.", "Let it dry. Distract your pet from licking for a few minutes."],
    know: ["For external use on animals only.", "If itching or redness doesn’t settle, see your vet."] },
  { id: "pawsense", name: "Pawsense", th: "cream-r", slogan: ["Clear eyes,", "clean ears"], kind: "HOCl eye & ear spray", size: "100 mL", art: "cat_fish", bg: "#f5e3dc",
    desc: "A gentle daily spray for cleaning around the eyes and the outer ear — helps lift tear stains, crust and everyday wax build-up.",
    how: ["Eyes: spray onto a cotton pad, wipe from the inner corner outwards. Fresh pad for each eye.", "Ears: spray onto a cotton pad, wipe the inner flap and outer ear only."],
    know: ["Never push anything into the ear canal.", "If eyes or ears look red, smell bad or have discharge, see your vet."] },
];

export type Treat = { id: string; name: string; for: string; size: string; f: string; w: "bars" | "cubes" | "wrap" | "shreds" | "lolly"; c1: string; c2: string; desc: string };
export const TREATS: Treat[] = [
  { id: "liver", name: "Soft Chicken Liver Bars", for: "Dogs", size: "50 g", f: "chicken", w: "bars", c1: "#4a2a1e", c2: "#6b3b27", desc: "Soft, rich liver bars that break easily into training-sized bites." },
  { id: "chickfish", name: "Soft Chicken & Fish Bars", for: "Dogs", size: "50 g", f: "chicken sea", w: "bars", c1: "#8a5a3a", c2: "#a87650", desc: "Chicken and fish together in a soft, chewable bar." },
  { id: "veggies", name: "Soft Chicken n' Veggies", for: "", size: "60 g", f: "chicken", w: "cubes", c1: "#9a6a40", c2: "#6f8a3a", desc: "Soft chicken treats with a mix of veggies." },
  { id: "anchovy", name: "Anchovy Wrapped with Chicken", for: "Dogs & cats", size: "50 g", f: "chicken sea", w: "wrap", c1: "#7b3b2a", c2: "#c9b8a0", desc: "A whole dried anchovy wrapped in tender chicken — a crunchy-chewy favourite." },
  { id: "shrimp", name: "Soft Shrimp Jerky Shreds", for: "", size: "50 g", f: "sea", w: "shreds", c1: "#b89a7a", c2: "#9c7d5e", desc: "Little shrimp jerky shreds — perfect for rewarding or topping." },
  { id: "lollipop", name: "Soft Chicken Lollipop", for: "Dogs", size: "50 g", f: "chicken", w: "lolly", c1: "#7a3a2e", c2: "#e8dcc4", desc: "Soft chicken lollipops on a chew stick, made for slow, happy chewing." },
];

export const KITS = [
  { id: "k-monsoon", name: "Monsoon paw kit", pill: "Walk season", items: ["pawtect", "pawse"], inc: "Pawtect + Pawse the Itch" },
  { id: "k-face", name: "Fresh face kit", pill: "Head care", items: ["pawdent", "pawsense"], inc: "Pawdent + Pawsense" },
  { id: "k-full", name: "Head-to-tail kit", pill: "Complete set", items: ["pawtect", "pawdent", "pawse", "pawsense"], inc: "All four care packs" },
  { id: "k-treat", name: "Treat sampler", pill: "Treat time", items: ["liver", "anchovy", "shrimp"], inc: "Liver bars + anchovy wrap + shrimp shreds" },
];

export const ALL: Record<string, { name: string; sub: string }> = {};
CARE.forEach((p) => (ALL[p.id] = { name: p.name, sub: `${p.kind} · ${p.size}` }));
TREATS.forEach((t) => (ALL[t.id] = { name: t.name, sub: `Soft treat · ${t.size}` }));
ALL.cozy = { name: "Cozy Milk", sub: "Gut health milk" };

export const NEEDS = [
  { id: "paws", label: "Muddy paws", sub: "Walks, play, monsoon", art: "cat_run" as ArtKey, rec: "pawtect" },
  { id: "breath", label: "Bad breath", sub: "Teeth & gums", art: "dog_bone" as ArtKey, rec: "pawdent" },
  { id: "itch", label: "Itchy skin", sub: "Scratching & licking", art: "dog_itch" as ArtKey, rec: "pawse" },
  { id: "eyes", label: "Tear stains / ears", sub: "Eyes & outer ears", art: "cat_fish" as ArtKey, rec: "pawsense" },
  { id: "tummy", label: "Happy tummy", sub: "Gut health", em: "🥛", rec: "cozy" },
  { id: "treats", label: "Treat time", sub: "Training & rewards", em: "🍖", rec: "treat" },
] as { id: string; label: string; sub: string; art?: ArtKey; em?: string; rec: string }[];

export const AREAS = [
  { id: "eyes", n: "1", label: "Eyes", x: 30, y: 29, rel: "pawsense", text: "Watery eyes, tear stains or crusty corners are common. Wipe gently from the inner corner outwards — and see your vet if eyes look red, cloudy or painful." },
  { id: "ears", n: "2", label: "Ears", x: 62, y: 17, rel: "pawsense", text: "Head shaking, scratching or a waxy smell can mean ears need attention. Clean the inner flap and outer ear only — never push anything into the canal." },
  { id: "mouth", n: "3", label: "Teeth & breath", x: 16, y: 50, rel: "pawdent", text: "Bad breath and build-up along the gum line are easy to miss. A daily gel routine helps keep smiles fresh between vet cleanings." },
  { id: "skin", n: "4", label: "Skin & itch", x: 74, y: 58, rel: "pawse", text: "Constant scratching, licking or red patches mean skin needs soothing. Part the fur, keep the area clean, and see your vet if it doesn’t settle." },
  { id: "tummy", n: "5", label: "Tummy", x: 52, y: 76, rel: "cozy", text: "A happy gut shows up as steady appetite, good energy and regular digestion. A gentle, gut-friendly milk can be part of the routine." },
  { id: "paws", n: "6", label: "Paws", x: 28, y: 93, rel: "pawtect", text: "Mud, dust and monsoon puddles get trapped between toes. Clean pads after walks and keep the gaps between toes dry." },
];

export const NAV = [
  { href: "#care", label: "Pet care" },
  { href: "#quiz", label: "Build a kit" },
  { href: "#treats", label: "Treats" },
  { href: "#cozy", label: "Cozy milk" },
  { href: "#hocl", label: "Why HOCl" },
];
