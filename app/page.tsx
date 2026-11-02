import { Header } from "@/components/Header";
import { NeedsExplorer } from "@/components/NeedsExplorer";
import { RevealObserver } from "@/components/RevealObserver";
import { Paw } from "@/components/Paw";

const categories = [
  { name: "Wound Care", cls: "c1" },
  { name: "Skin & Coat", cls: "c2" },
  { name: "New Arrivals", cls: "c3" },
  { name: "Bestsellers", cls: "c4" },
];

const upcoming = [2, 3, 4];

const why = [
  { n: "01", t: "Made for pets", d: "Every product is made specifically for dogs and cats, not adapted from human care." },
  { n: "02", t: "Easy at home", d: "Simple to use with clear directions, so everyday care fits into your routine." },
  { n: "03", t: "[Your promise]", d: "[e.g. vet-tested, made in India, natural ingredients — only what's true for PetVet.]", yellow: true },
];

const bundles = [
  { cls: "b1", name: "Pet First-Aid Kit", sub: "Wound & Skin Care + [Product] · [PRICE]" },
  { cls: "b2", name: "[Bundle name]", sub: "[Product] + [Product] · [PRICE]" },
  { cls: "b3", name: "[Bundle name]", sub: "[Product] + [Product] · [PRICE]" },
  { cls: "b4", name: "[Bundle name]", sub: "[Product] + [Product] · [PRICE]" },
];

const chev = (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 6l6 6-6 6" /></svg>
);

export default function Home() {
  return (
    <div id="top" className="page">
      <RevealObserver />
      <a href="#main" className="skip">Skip to content</a>

      <div className="announce">
        [OFFER — e.g. Free shipping on orders over ₹X] · <a href="#range">Shop now</a>
      </div>
      <Header />

      <main id="main">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-inner">
            <div className="wordmark-wrap">
              <h1 className="wordmark" aria-label="PetVet">PETVET</h1>
              <span className="float-pill p1">Wound Care</span>
              <span className="float-pill p2">Skin &amp; Coat</span>
              <span className="float-pill p3 yellow">Everyday Care</span>
              <span className="float-pill p4">Dogs &amp; Cats</span>
            </div>

            <div className="hero-grid">
              <div className="hero-photo" data-reveal>
                <svg aria-hidden="true" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="3" /><circle cx="9" cy="10" r="2" /><path d="M21 16l-5-5-9 9" /></svg>
                <span>[HERO PHOTO: happy dog &amp; cat with the PetVet range]</span>
              </div>
              <div className="hero-copy" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
                <h2>Care for every paw, <span>every day.</span></h2>
                <p>Gentle, easy-to-use health and care products for dogs and cats — starting with wound and skin care, with more on the way.</p>
                <div className="btn-row">
                  <a href="#range" className="btn btn-yellow btn-lg">Shop all products</a>
                  <a href="#needs" className="btn btn-ghost btn-lg">Find what my pet needs</a>
                </div>
              </div>
            </div>
          </div>
          <svg aria-hidden="true" viewBox="0 0 1440 120" preserveAspectRatio="none" className="hero-wave"><path d="M0 70C180 10 300 110 520 80S860 0 1060 50 1340 110 1440 60V120H0z" fill="#FFFFFF" /></svg>
        </section>

        {/* CATEGORIES */}
        <section id="categories" className="section categories">
          <div className="container stack">
            <div className="head-row" data-reveal>
              <h2 className="h2">Shop by category</h2>
              <a href="#range" className="link-strong">View all</a>
            </div>
            <div className="cat-grid">
              {categories.map((c, i) => (
                <a key={c.name} href="#range" className={`cat-card ${c.cls}`} data-reveal style={{ "--d": `${i * 90}ms` } as React.CSSProperties}>
                  <span className="cat-ph">[Category photo]</span>
                  <span className="cat-pill">{c.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* RANGE */}
        <section id="range" className="section range">
          <div className="container stack">
            <div className="head-row end" data-reveal>
              <h2 className="h2">The PetVet range</h2>
              <p className="muted">One trusted product today, a full care kit tomorrow. New launches are on the way.</p>
            </div>
            <div className="card-grid">
              <article className="product-card" data-reveal>
                <div className="pc-media y">
                  [Wound &amp; Skin Care photo]
                  <span className="badge">Bestseller</span>
                </div>
                <h3>Wound &amp; Skin Care</h3>
                <p className="muted-sm">For minor cuts, scrapes and irritated skin</p>
                <div className="feats">
                  <span><i className="feat-ic y"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3A8C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(-35 12 12)" /><path d="M10.5 10.5h.01M13.5 13.5h.01M13.5 10.5h.01M10.5 13.5h.01" /></svg></i>Wound care</span>
                  <span><i className="feat-ic y"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3A8C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c3 4 6 7 6 11a6 6 0 0 1-12 0c0-4 3-7 6-11z" /></svg></i>Skin comfort</span>
                </div>
                <div className="pc-foot"><b>From [PRICE]</b><button className="btn btn-blue btn-sm">Add to cart</button></div>
              </article>

              {upcoming.map((n, i) => (
                <article key={n} className="product-card" data-reveal style={{ "--d": `${(i + 1) * 90}ms` } as React.CSSProperties}>
                  <div className={`pc-media ${n % 2 ? "y" : "b"}`}>
                    [Product {n} photo]
                    <span className="badge soon">Coming soon</span>
                  </div>
                  <h3>[Product {n}]</h3>
                  <p className="muted-sm">[One-line benefit]</p>
                  <div className="feats">
                    <span><i className={`feat-ic ${n % 2 ? "y" : "b"}`}>+</i>[Benefit]</span>
                    <span><i className={`feat-ic ${n % 2 ? "y" : "b"}`}>+</i>[Benefit]</span>
                  </div>
                  <div className="pc-foot"><b>From [PRICE]</b><button className="btn btn-outline btn-sm">Notify me</button></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED */}
        <section id="shop" className="section featured">
          <div className="container featured-grid">
            <div className="gallery" data-reveal>
              <div className="shot">
                [PRODUCT SHOT: Wound &amp; Skin Care]
                <span className="sticker s-a">Made for dogs &amp; cats</span>
                <span className="sticker s-b">Easy to apply</span>
              </div>
              <div className="thumbs">
                <button className="thumb active" aria-label="View angle 1">[Angle 1]</button>
                <button className="thumb" aria-label="View in use">[In use]</button>
                <button className="thumb" aria-label="View label">[Label]</button>
              </div>
            </div>
            <div className="buy" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
              <div className="eyebrow">Featured product</div>
              <div className="rating"><span className="stars" aria-hidden="true">★★★★★</span> [RATING] · [REVIEW COUNT] reviews</div>
              <h2 className="h2 big">PetVet Wound &amp; Skin Care</h2>
              <p className="muted-md">For dogs &amp; cats · [SIZE, e.g. 100 ml spray]</p>
              <div className="price">[YOUR PRICE]</div>
              <p className="lead-dark">[One or two sentences on what it does — how it cleans, soothes and protects minor wounds and irritated skin.]</p>
              <fieldset className="options">
                <legend className="sr">Purchase option</legend>
                <label><input type="radio" name="buy" defaultChecked /> One-time purchase <b>[PRICE]</b></label>
                <label className="sub"><input type="radio" name="buy" /> Subscribe &amp; save <span className="save">Save [X]%</span><b>[PRICE]</b></label>
              </fieldset>
              <div className="btn-row">
                <button className="btn btn-blue btn-xl grow">Add to cart</button>
                <button className="btn btn-yellow btn-xl">Buy now</button>
              </div>
              <div className="accordion">
                {[
                  ["Key ingredients", "[LIST ACTIVE INGREDIENTS]"],
                  ["How to use", "[DIRECTIONS]"],
                  ["Shipping", "Home delivery"],
                ].map(([k, v]) => (
                  <button key={k} className="acc-row"><span><small>{k}</small>{v}</span>{chev}</button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NEEDS */}
        <section id="needs" className="section needs">
          <svg aria-hidden="true" width="220" height="110" viewBox="0 0 220 110" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" className="cloud c-l"><path d="M30 80c-18 0-24-24-6-30 2-20 30-26 40-10 8-22 44-20 46 4 20-6 34 16 20 30-6 8-90 6-100 6z" /></svg>
          <svg aria-hidden="true" width="190" height="95" viewBox="0 0 220 110" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" className="cloud c-r"><path d="M30 80c-18 0-24-24-6-30 2-20 30-26 40-10 8-22 44-20 46 4 20-6 34 16 20 30-6 8-90 6-100 6z" /></svg>
          <div className="container stack center">
            <div className="center-text" data-reveal>
              <h2 className="h2">Find out what your pet needs</h2>
              <p className="muted">Tap an area on the dog to learn more.</p>
            </div>
            <div className="full" data-reveal><NeedsExplorer /></div>
          </div>
        </section>

        {/* WHY */}
        <section className="section why">
          <div className="container stack">
            <h2 className="h2 on-sky" data-reveal>Why pet parents<br />choose PetVet</h2>
            <div className="why-grid">
              {why.map((w, i) => (
                <div key={w.n} className={`why-card${w.yellow ? " yellow" : ""}`} data-reveal style={{ "--d": `${i * 100}ms` } as React.CSSProperties}>
                  <div className="why-n">{w.n}</div>
                  <h3>{w.t}</h3>
                  <p>{w.d}</p>
                </div>
              ))}
            </div>
            <div className="badges" data-reveal>
              <span className="badges-label">Certified &amp; tested:</span>
              {[1, 2, 3].map((b) => (<span key={b} className="badge-ring">[Badge]</span>))}
            </div>
          </div>
        </section>

        {/* STORY */}
        <section id="story" className="section story">
          <svg aria-hidden="true" viewBox="0 0 400 400" className="blob bl1"><path d="M300 60c60 50 80 150 30 230s-170 110-240 50S10 170 60 100 240 10 300 60z" fill="#CFF0FA" /></svg>
          <svg aria-hidden="true" viewBox="0 0 400 400" className="blob bl2"><path d="M320 80c70 60 60 190-10 250S110 380 60 300 40 110 120 70s130-50 200 10z" fill="#DCE8FF" /></svg>
          <div className="container narrow">
            <div className="story-card" data-reveal>
              <div className="founder">
                <div className="founder-photo">[Founder photo]</div>
                <strong>[Founder name]</strong>
                <span>Founder, PetVet</span>
              </div>
              <div className="story-copy">
                <h2>Why we started PetVet</h2>
                <p>[Your story in 3–4 sentences — what made you start PetVet, the pet or moment behind it, and what you want every product to do for pets and their families.]</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROMISE */}
        <section className="promise">
          <div className="promise-inner" data-reveal>
            <Paw size={30} color="#FFD24A" />
            <span className="eyebrow gold">The PetVet Promise</span>
            <p>[Your guarantee — e.g. If you or your pet aren&apos;t happy, we&apos;ll make it right within X days.]</p>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="section reviews">
          <div className="container stack">
            <div className="head-row end" data-reveal>
              <div className="rev-head">
                <h2 className="h2 on-dark">Reviews worth<br />wagging about</h2>
                <p><strong>[X]%</strong> would recommend PetVet · <strong>[RATING]</strong> average from <strong>[COUNT]</strong> reviews</p>
              </div>
              <div className="rev-actions">
                <button className="btn btn-ghost">Write a review</button>
                <button aria-label="Previous reviews" className="icon-btn icon-btn-ghost lg"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M11 6l-6 6 6 6" /></svg></button>
                <button aria-label="Next reviews" className="icon-btn icon-btn-yellow lg"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></button>
              </div>
            </div>
            <div className="rev-grid">
              {[
                { ph: "[Customer pet photo]" },
                { ph: "[Veterinarian photo]", vet: true },
                { ph: "[Before / after photo]" },
              ].map((r, i) => (
                <figure key={i} className={`rev-card${r.vet ? " vet" : ""}`} data-reveal style={{ "--d": `${i * 100}ms` } as React.CSSProperties}>
                  <div className="rev-ph">{r.ph}</div>
                  {r.vet ? <span className="eyebrow dark">Vet&apos;s view</span> : <span className="stars" aria-label="Rating placeholder">★★★★★</span>}
                  <blockquote>{r.vet ? "“[A real quote from a vet who recommends PetVet.]”" : "“[Real customer review.]”"}</blockquote>
                  <figcaption>{r.vet ? "Dr. [Name] · [Clinic]" : <>[Name] · [Pet, breed] · <span className="verified">Verified buyer</span></>}</figcaption>
                </figure>
              ))}
            </div>
            <div className="press">
              <span>Featured in:</span><b>[Press 1]</b><b>[Press 2]</b><b>[Press 3]</b>
            </div>
          </div>
        </section>

        {/* BUNDLES */}
        <section id="bundles" className="section bundles">
          <div className="container stack">
            <div className="head-row end" data-reveal>
              <h2 className="h2">Better together, for less</h2>
              <p className="muted">Care kits that pair PetVet products — and save you more.</p>
            </div>
            <div className="bundle-grid">
              {bundles.map((b, i) => (
                <article key={i} className={`bundle ${b.cls}`} data-reveal style={{ "--d": `${i * 90}ms` } as React.CSSProperties}>
                  <span className="save-pill">Save [X]%</span>
                  <div className="bundle-ph">[Bundle photo]</div>
                  <strong>{b.name}</strong>
                  <span>{b.sub}</span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="container stack">
          <div className="foot-top">
            <div className="join">
              <span className="join-t">Join the pack!</span>
              <p>New launches and pet care tips, straight to your inbox.</p>
              <form className="join-form">
                <label htmlFor="fn-email" className="sr">Email address</label>
                <input id="fn-email" type="email" autoComplete="email" placeholder="you@email.com" />
                <button type="button" className="btn btn-yellow btn-lg">Subscribe</button>
              </form>
            </div>
            <nav aria-label="Footer" className="foot-cols">
              <div><strong>Shop</strong><a href="#range">All products</a><a href="#categories">Categories</a><a href="#bundles">Bundles</a></div>
              <div><strong>Help</strong><a href="#needs">Take the quiz</a><a href="#contact">FAQs</a><a href="#contact">Contact</a></div>
              <div><strong>PetVet</strong><a href="#story">Our story</a><a href="#reviews">Reviews</a></div>
            </nav>
          </div>
          <p className="legal">For animal use only. Always follow label directions, and consult your veterinarian for serious or persistent conditions. © 2026 PetVet.</p>
        </div>
      </footer>
    </div>
  );
}
