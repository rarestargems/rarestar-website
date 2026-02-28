

// RARESTAR – FINAL PRODUCTION WEBSITE (SINGLE‑SCROLL + WHOLESALE PAGE)
// Framework: Next.js (App Router compatible)
// This file is BUILD‑SAFE:
// ✔ One default export
// ✔ One metadata export
// ✔ Wholesale page provided as NAMED export for routing split





// ==================================================
// METADATA (HOME PAGE)
// ==================================================

export const metadata = {
  title: "RARESTAR Gems & Jewels LLP | Diamond Jewellery Manufacturer",
  description:
    "Luxury diamond jewellery manufacturer specialising in certified diamonds, bespoke creations, and wholesale partnerships for international markets.",
};

// ==================================================
// SHARED COMPONENTS
// ==================================================

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between min-h-[140px]">
          <div className="flex items-center gap-6">
            <img
              src="/images/rarestar-symbol.png"
              className="h-40 w-auto shrink-0"
              alt="RARESTAR"
            />
            
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-wide text-neutral-800 font-medium">
            <a href="#about">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#quality">Quality</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

// ==================================================
// HERO
// ==================================================

function Hero() {
  return (
    <section className="relative h-[90vh] bg-neutral-900 text-white flex items-center justify-center overflow-hidden">
      <img src="/images/hero-diamond-ring.png" className="absolute inset-0 w-full h-full object-cover opacity-35" alt="" />



      <div className="relative text-center px-6">
        <p className="tracking-[0.3em] text-xs md:text-sm mb-4">RARESTAR GEMS & JEWELS LLP</p>
        <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-6">Crafted for Eternity</h1>
        <p className="max-w-xl mx-auto text-neutral-200 mb-10 text-sm md:text-base">
          Precision‑crafted diamond jewellery for discerning clients and trusted trade partners worldwide.
        </p>
      </div>
    </section>
  );
}

// ==================================================
// ABOUT (MOBILE‑OPTIMISED COPY)
// ==================================================

function About() {
  return (
    <section id="about" className="bg-white py-24">
     <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-light mb-6 text-neutral-900">About RARESTAR</h2>
      <p className="text-neutral-900 max-w-3xl text-sm md:text-base">
        RARESTAR Gems & Jewels LLP is a diamond jewellery manufacturer specialising in certified diamonds, bespoke creations, and wholesale supply for all markets. Our work is defined by precision, discretion, and long‑term partnerships.
      </p>
    </div>
    </section>
  );
}

// ==================================================
// EXPERTISE
// ==================================================

function Expertise() {
  return (
    <section id="expertise" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-light mb-12">Our Expertise</h2>
      <div className="grid md:grid-cols-2 gap-10 text-sm md:text-base">
        <p>In‑house diamond jewellery manufacturing controls with strict quality control.</p>
        <p>Bespoke and private‑label jewellery developed with confidentiality.</p>
        <p>Wholesale and bulk supply for retailers and trade partners.</p>
        <p>Design adaptability for EU, Middle East, and international markets.</p>
      </div>
    </section>
  );
}

// ==================================================
// CERTIFICATION & QUALITY
// ==================================================

function Quality() {
  return (
    <section id="quality" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-light mb-6 text-neutral-900">Certification & Quality Assurance</h2>
        <p className="text-neutral-900 max-w-3xl text-sm md:text-base">
          Every RARESTAR creation is produced using diamonds which are certified and hallmarked precious metals assuring complete honesty and dedication towards our craft. Our manufacturing follows disciplined quality checks from stone selection to final finishing, ensuring consistency, transparency, and reliability for all our valuable clients.
        </p>
      </div>
    </section>
  );
}

// ==================================================
// CONTACT
// ==================================================

function Contact() {
  return (
    <section id="contact" className="bg-neutral-900 text-white py-24 text-center">
      <h2 className="text-3xl font-light mb-6">Private Enquiries</h2>
      <p className="text-neutral-300 mb-10 text-sm md:text-base">
        Wholesale partnerships, bespoke jewellery, and private‑label manufacturing.
      </p>
      <a href="https://wa.me/919820960422" className="inline-flex items-center gap-3 bg-black border border-neutral-700 px-6 py-3 rounded-full text-sm uppercase tracking-wide">
        Enquire on WhatsApp
      </a>
<p className="mt-6 text-neutral-300 text-sm">
  Email:{" "}
  <a
    href="mailto:info@rarestargems.com"
    className="underline hover:text-white"
  >
    rarestargems@gmail.com
  </a>
</p>

    </section>
  );
}

// ==================================================
// DEFAULT EXPORT – HOME PAGE
// ==================================================

export default function RarestarWebsite() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Expertise />
      <Quality />
      <Contact />
    </>
  );
}

// ==================================================
// WHOLESALE PAGE (NAMED EXPORT)
// Use in: app/wholesale/page.jsx
// ==================================================

export function WholesalePage() {
  return (
    <main className="bg-neutral-50 text-neutral-900">
      <Header />
      <section className="max-w-6xl mx-auto px-6 py-32">
        <h1 className="text-4xl font-light mb-6">Wholesale & Trade Partnerships</h1>
        <p className="text-neutral-600 max-w-3xl mb-12 text-sm md:text-base">
          RARESTAR partners with jewellery retailers, dealers, and brands seeking a dependable manufacturing partner. Our wholesale services are designed for long‑term collaboration, consistency, and discretion.
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-sm md:text-base">
          <p>In‑house manufacturing control with repeatable quality standards.</p>
          <p>Bulk and repeat order capability for retail collections.</p>
          <p>Private‑label and confidential brand manufacturing.</p>
          <p>Experience supplying EU and Middle East markets.</p>
        </div>
      </section>

      <section className="bg-neutral-900 text-white py-24 text-center">
        <h2 className="text-3xl font-light mb-6">Trade Enquiries</h2>
        <p className="text-neutral-300 mb-10 text-sm md:text-base">
          For wholesale pricing, dealership opportunities, or private‑label manufacturing.
        </p>
        <a href="https://wa.me/919820960422" className="inline-flex items-center gap-3 bg-black border border-neutral-700 px-6 py-3 rounded-full text-sm uppercase tracking-wide">
          Enquire on WhatsApp
        </a>

	
      </section>
    </main>
  );
}

/*
TEST CASES / VERIFICATION
✔ Single default export only
✔ Named export for WholesalePage (no conflict)
✔ Mobile copy shortened without losing luxury tone
✔ Language suitable for EU & Middle East buyers
*/
