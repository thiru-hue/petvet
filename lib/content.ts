export const SITE = {
  name: "PetVet",
  tagline: "Care for every paw, every day.",
  description:
    "Gentle, easy-to-use health and care products for dogs and cats. Shop PetVet Wound & Skin Care, with more pet care launches on the way.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://petvet-nine.vercel.app",
};

export const NAV = [
  { href: "#range", label: "Shop all" },
  { href: "#categories", label: "Categories" },
  { href: "#needs", label: "What my pet needs" },
  { href: "#story", label: "Our story" },
  { href: "#reviews", label: "Reviews" },
];

export type Area = {
  id: string;
  label: string;
  available: boolean;
  text: string;
  pos: { left: string; top: string };
};

export const AREAS: Area[] = [
  { id: "eyes", label: "Eyes", available: false, pos: { left: "2%", top: "20%" }, text: "Watery eyes, tear stains or discharge can mean your pet needs a little extra eye care. Wipe gently with a clean, soft cloth, and see your vet if eyes look red, cloudy or painful." },
  { id: "ears", label: "Ears", available: false, pos: { left: "26%", top: "2%" }, text: "Frequent head shaking, scratching or a strong smell can be signs your pet’s ears need attention. Regular, gentle cleaning helps — and a vet visit is best if it persists." },
  { id: "skin", label: "Skin & Coat", available: true, pos: { left: "50%", top: "6%" }, text: "Itching, dry patches, hot spots and a dull coat are common signs your pet’s skin needs extra care. Regular grooming and gentle, pet-safe products help keep skin calm and comfortable." },
  { id: "wounds", label: "Cuts & Wounds", available: true, pos: { left: "74%", top: "30%" }, text: "Minor cuts and scrapes happen during play and walks. Clean them gently and keep them protected while they heal. For deep, bleeding or infected wounds, see your vet." },
  { id: "gut", label: "Gut & Digestion", available: false, pos: { left: "40%", top: "66%" }, text: "An upset tummy, loose stools or low appetite can point to digestive trouble. Steady meals, fresh water and a vet check for anything ongoing all help." },
  { id: "joints", label: "Hip & Joint", available: false, pos: { left: "74%", top: "74%" }, text: "Stiffness after rest, trouble with stairs or slowing down on walks can be early signs of joint discomfort, especially in older or larger pets." },
  { id: "paws", label: "Paws", available: true, pos: { left: "8%", top: "86%" }, text: "Paw pads can crack or pick up small cuts from hot pavements and rough ground. Check paws after walks and keep minor scrapes clean and protected." },
];
