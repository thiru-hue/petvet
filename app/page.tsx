import Image from "next/image";
import { KITS, IMG } from "@/lib/data";
import { BagDrawer, Header, JoinForm, MobileBar, RevealObserver } from "@/components/Chrome";
import { BodyMap, CarePacks, Crew, Featured, Quiz, Treats } from "@/components/Sections";
import { AddButton, FeatureLink, MiniPack } from "@/components/ui";

const PawPaths = () => (
  <>
    <circle cx="6" cy="9" r="2.2" /><circle cx="10" cy="5.5" r="2.2" /><circle cx="14" cy="5.5" r="2.2" /><circle cx="18" cy="9" r="2.2" />
    <path d="M12 11c3 0 6 4 6 6.5 0 2-2 2.5-3 2.5-1.3 0-1.8-.8-3-.8s-1.7.8-3 .8c-1 0-3-.5-3-2.5C6 15 9 11 12 11z" />
  </>
);
const Ring = ({ id, text }: { id: string; text: string }) => (
  <svg className="ring" viewBox="0 0 120 120" aria-hidden="true">
    <defs><path id={id} d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" /></defs>
    <text fontSize="12.5" letterSpacing="4" fill="currentColor"><textPath href={`#${id}`}>{text}</textPath></text>
  </svg>
);
const ANN = ["Powered by HOCl", "Made for dogs & cats", "New: soft treats & cozy milk", "From eyes to paws", "Made in India"];
const MARQ = ["Walk. Wipe. Wag.", "Big fresh smiles", "Less itch, more naps", "Clear eyes, clean ears", "Soft treats", "Cozy milk"];

export default function Home() {
  return (
    <>
      <RevealObserver />
      <a href="#main" className="skip">Skip to content</a>
      <div className="announce" aria-hidden="true">
        <div>{[0, 1].map((k) => ANN.map((a) => <span key={`${k}${a}`}>✦ {a}</span>))}</div>
      </div>
      <Header />

      <main id="main">
        <div id="top" />
        {/* HERO */}
        <section className="hero" style={{ paddingBottom: 0 }}>
          <div className="wrap grid">
            <div>
              <span className="label" style={{ color: "var(--blush)" }}>PetVet · Everyday pet care</span>
              <h1 style={{ marginTop: 16 }}>
                From eyes<br />to{" "}
                <span className="r scrib">paws.
                  <svg viewBox="0 0 300 40" preserveAspectRatio="none" aria-hidden="true"><path d="M5 30 C 80 8, 200 6, 295 22" fill="none" stroke="#B3311E" strokeWidth="7" strokeLinecap="round" /></svg>
                </span>
              </h1>
              <p className="lead">Gentle HOCl care for paws, teeth, skin, eyes and ears — plus soft treats and a cozy gut-health milk. Everything your dog or cat needs, between the walks and the naps.</p>
              <div className="ctas"><a className="btn red" href="#care">Shop pet care</a><a className="btn cream" href="#quiz">Build my pet&apos;s kit</a></div>
              <div className="proof"><div>Dogs &amp; cats</div><div>Powered by HOCl</div><div>Made in India</div></div>
            </div>
            <div className="hero-art">
              <div className="stamp" aria-hidden="true">
                <Ring id="r1" text="PETVET · EVERYDAY · CARE · PETVET ·" />
                <div className="core"><svg viewBox="0 0 24 24" fill="#173798"><PawPaths /></svg></div>
              </div>
              <div className="sticker" style={{ right: "4%", top: 40 }}>Walk.<br />Wipe.<br />Wag.</div>
              <div className="sticker s2" style={{ left: "6%", bottom: 110 }}>Less itch,<br />more naps</div>
              <Image className="main" src={IMG.hero.src} width={IMG.hero.w} height={IMG.hero.h} alt="PetVet dog with a bone among flowers" priority sizes="(max-width:1000px) 90vw, 560px" />
            </div>
          </div>
        </section>

        <div className="marq" aria-hidden="true">
          <div>{[0, 1].map((k) => MARQ.map((m) => <span key={`${k}${m}`} style={{ color: "var(--navy)", margin: 0 }}>{m}<span>✦</span></span>))}</div>
        </div>

        {/* CARE */}
        <section id="care">
          <div className="wrap">
            <div className="shead rv">
              <div><span className="label">The care range</span><h2 className="h2">Four packs.<br />Head to tail.</h2></div>
              <p>HOCl essentials for dogs &amp; cats. Hover (or tap) a pack to flip it and see how to use it.</p>
            </div>
            <CarePacks />
            <div className="fliptip rv">↻ flip a pack for the how-to</div>
          </div>
        </section>

        {/* QUIZ */}
        <section className="quiz" id="quiz">
          <div className="stamp" aria-hidden="true">
            <Ring id="r2" text="60 SECONDS · YOUR PET'S KIT ·" />
            <div className="core" style={{ background: "var(--cream)" }}><svg viewBox="0 0 24 24" fill="#B3311E"><PawPaths /></svg></div>
          </div>
          <div className="wrap grid">
            <div className="rv">
              <span className="label" style={{ color: "var(--blush)" }}>Build a kit</span>
              <h2 style={{ marginTop: 14 }}>What does<br />your pet<br />need?</h2>
              <p className="lead">Two quick taps and we&apos;ll put together a kit made for your dog or cat — then add it all to your bag in one go.</p>
            </div>
            <Quiz />
          </div>
        </section>

        {/* FEATURED */}
        <section className="feat" id="shop"><Featured /></section>

        {/* HOCl */}
        <section className="hocl" id="hocl">
          <div className="wrap grid">
            <div className="rv"><h2><small>What&apos;s inside</small>What&apos;s</h2><div className="mol">HOCl?</div></div>
            <div className="rv">
              <p>Hypochlorous acid — the same molecule your pet&apos;s own white blood cells make as part of the body&apos;s natural defences. We bottle it for gentle, everyday care.</p>
              <div className="facts">
                <div className="fact"><b>Body-familiar</b><span>A molecule your pet&apos;s immune cells already make.</span></div>
                <div className="fact"><b>Daily gentle</b><span>Made for routine use on paws, gums, skin, eyes and ears.</span></div>
                <div className="fact"><b>Dogs &amp; cats</b><span>Every pack in the range is made for both.</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* MAP */}
        <section className="map" id="map">
          <div className="wrap">
            <div className="shead rv" style={{ justifyContent: "center", textAlign: "center" }}>
              <div><span className="label">Head to tail</span><h2 className="h2">Tap the pup</h2></div>
            </div>
            <BodyMap />
          </div>
        </section>

        {/* TREATS */}
        <section className="treats" id="treats">
          <div className="wrap">
            <div className="shead rv">
              <div><span className="label">Treat drawer</span><h2 className="h2">Soft treats,<br />real food</h2></div>
              <p>Chicken, fish and shrimp treats in kraft pouches, made in India. Small bites, big wags.</p>
            </div>
            <Treats />
          </div>
        </section>

        {/* COZY */}
        <section className="cozy" id="cozy">
          <div className="wrap grid">
            <div className="rv">
              <span className="label" style={{ color: "var(--blush)" }}>Gut health</span>
              <h2 style={{ marginTop: 12 }}>Cozy<br /><span>milk.</span></h2>
              <p>A warm, comforting milk made with your pet&apos;s tummy in mind — a little bowl of calm for happy guts and sleepy evenings.</p>
              <ul><li>Supports gut health</li><li>A treat they&apos;ll lap up</li><li>Part of the PetVet routine</li></ul>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <AddButton id="cozy" className="btn cream" />
                <a className="btn ghost" href="#join">Get launch updates</a>
              </div>
            </div>
            <div className="milk rv">
              <div className="nt">slurp.<br />purr. repeat.</div>
              <div className="carton">
                <div className="brand">PETVET<small>PET CARE</small></div>
                <div className="big">Cozy<br />milk</div>
                <div className="sb">Gut health milk</div>
                <div className="bt"><span>Happy tummies</span><span>✦</span></div>
              </div>
              <Image className="cat" src={IMG.cat_fish.src} width={IMG.cat_fish.w} height={IMG.cat_fish.h} alt="Cat curled up asleep" sizes="220px" />
            </div>
          </div>
        </section>

        {/* KITS */}
        <section id="kits">
          <div className="wrap">
            <div className="shead rv">
              <div><span className="label">Better together</span><h2 className="h2">Ready-made kits</h2></div>
              <p>Packs that go together, for the moments that need them. One tap adds the whole kit.</p>
            </div>
            <div className="kgrid">
              {KITS.map((k) => (
                <article className="kit rv" key={k.id}>
                  <span className="pill">{k.pill}</span>
                  <div className="pics">{k.items.map((i) => <MiniPack key={i} id={i} />)}</div>
                  <strong>{k.name}</strong>
                  <span className="inc">{k.inc}</span>
                  <AddButton kit={k.id} className="add solid" label="Add kit to bag" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CREW */}
        <section className="crew">
          <div className="wrap">
            <div className="shead rv" style={{ justifyContent: "center", textAlign: "center" }}>
              <div><span className="label">Meet the crew</span><h2 className="h2">One for every job</h2></div>
            </div>
            <Crew />
          </div>
        </section>

        {/* JOIN */}
        <section className="join" id="join">
          <Image className="peek-dog" src={IMG.dog_bone.src} width={IMG.dog_bone.w} height={IMG.dog_bone.h} alt="" sizes="160px" />
          <Image className="peek-cat" src={IMG.cat_run.src} width={IMG.cat_run.w} height={IMG.cat_run.h} alt="" sizes="180px" />
          <div className="wrap rv">
            <span className="label" style={{ color: "var(--blush)" }}>Join the pack</span>
            <h2 style={{ marginTop: 12 }}>Be first in line</h2>
            <p>Launch news, new treats and pet-care tips — straight to your inbox.</p>
            <JoinForm />
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div>
            <div className="logo-f"><Image src="/brand/petvet-logo-white.svg" alt="PetVet" width={787} height={288} unoptimized /></div>
            <p style={{ fontSize: 14, maxWidth: 300 }}>Pet care, from eyes to paws. HOCl essentials, soft treats and cozy milk for dogs &amp; cats.</p>
          </div>
          <div>
            <h4>Pet care</h4>
            <ul>
              <li><FeatureLink id="pawtect">Pawtect</FeatureLink></li>
              <li><FeatureLink id="pawdent">Pawdent</FeatureLink></li>
              <li><FeatureLink id="pawse">Pawse the Itch</FeatureLink></li>
              <li><FeatureLink id="pawsense">Pawsense</FeatureLink></li>
            </ul>
          </div>
          <div><h4>Food</h4><ul><li><a href="#treats">Soft treats</a></li><li><a href="#cozy">Cozy milk</a></li><li><a href="#kits">Kits</a></li></ul></div>
          <div><h4>Help</h4><ul><li><a href="#quiz">Build a kit</a></li><li><a href="#hocl">What&apos;s HOCl?</a></li><li><a href="#join">Contact</a></li></ul></div>
          <div className="legal"><span>© 2026 PetVet Pet Care. Made in India.</span><span>For animal use only. If symptoms persist, see your vet.</span></div>
        </div>
      </footer>

      <MobileBar />
      <BagDrawer />
    </>
  );
}
