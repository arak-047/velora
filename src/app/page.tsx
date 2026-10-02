import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO EDITORIAL STATEMENT */}
      <section className="w-full px-margin md:px-margin-desktop py-space-lg lg:py-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          {/* Text & Typography Column */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full pr-0 lg:pr-space-lg order-2 lg:order-1">
            <div className="space-y-space-md">
              <div className="flex items-center gap-space-sm">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                <span className="font-label-uppercase text-label-uppercase text-secondary uppercase tracking-[0.2em]">
                  SPRING / SUMMER 2026
                </span>
              </div>
              <h1 className="font-display text-headline-lg lg:text-display text-primary leading-[1.05] tracking-tight">
                MODERN ESSENTIALS
              </h1>
              <p className="font-editorial-italic text-editorial-italic text-secondary leading-snug pt-space-xs max-w-lg">
                Thoughtfully designed essentials and refined silhouettes made for modern everyday dressing.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md pt-space-xs">
                Discover our latest collection of premium knits and structured tops, engineered for effortless elegance and lasting comfort.
              </p>
            </div>
            <div className="pt-space-lg lg:pt-space-xl space-y-space-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-md sm:gap-space-lg">
                <Link
                  href="/collections"
                  className="font-label-uppercase text-label-uppercase uppercase px-8 py-4 bg-primary text-on-primary hover:bg-neutral-800 transition-colors duration-200 tracking-[0.16em] inline-block text-center"
                >
                  SHOP THE COLLECTION
                </Link>
                <Link
                  href="/collections"
                  className="font-label-uppercase text-label-uppercase uppercase text-primary hover:text-secondary underline underline-offset-4 decoration-1 tracking-[0.14em] transition-colors py-2"
                >
                  VIEW NEW ARRIVALS →
                </Link>
              </div>
              <div className="pt-space-md border-t border-secondary-container flex flex-wrap items-center gap-x-6 gap-y-2 text-on-surface-variant font-label-uppercase text-[10px] tracking-[0.18em] uppercase">
                <span>SS26 COLLECTION</span>
                <span className="text-neutral-300">•</span>
                <span>PREMIUM CRAFTSMANSHIP</span>
                <span className="text-neutral-300">•</span>
                <span>ITALIAN & JAPANESE FABRICS</span>
              </div>
            </div>
          </div>
          {/* Hero Visual Column */}
          <div className="lg:col-span-6 order-1 lg:order-2 mb-10 lg:mb-0">
            <div className="relative w-full aspect-[4/5] bg-surface-container overflow-hidden group">
              <img
                alt="SS25 Sleeveless Archetype Campaign - High-neck ribbed top"
                className="w-full h-full object-cover object-center grayscale contrast-[1.04] hover:grayscale-0 transition-all duration-700 ease-out"
                src="/images/01_Minimal_Ribbed_Ta_668700.png"
              />
              <div className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur-sm px-3 py-1.5 font-label-uppercase text-[9px] uppercase tracking-[0.2em] text-primary">
                Lightweight Ribbed Knit In Camel
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESTRAINED MARQUEE STATS */}
      <section className="w-full bg-surface-container-low border-y border-secondary-container py-space-sm">
        <div className="px-margin md:px-margin-desktop flex flex-wrap items-center justify-between gap-4 font-label-uppercase text-[11px] uppercase tracking-[0.16em] text-on-surface-variant">
          <span>Limited Edition Collections</span>
          <span className="hidden md:inline text-neutral-300">/</span>
          <span>Hand-Finished Details</span>
          <span className="hidden md:inline text-neutral-300">/</span>
          <span>Custom Color Palettes</span>
          <span className="hidden md:inline text-neutral-300">/</span>
          <span>Premium Sourcing</span>
        </div>
      </section>

      {/* SECTION 2: CURATED EDITORIAL TRIPTYCH */}
      <section className="w-full px-margin md:px-margin-desktop py-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
          <div className="space-y-space-xs">
            <span className="font-label-uppercase text-label-uppercase text-secondary uppercase tracking-[0.2em]">
              FEATURED PIECES
            </span>
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight">
              Everyday Essentials
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mt-3 md:mt-0">
            Foundation pieces designed to take you effortlessly from day to night.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
          {/* Card 1 */}
          <article className="flex flex-col group">
            <Link href="/product/layered-collar-cotton-top" className="relative aspect-[4/5] bg-surface-container overflow-hidden block">
              <img
                alt="Layered Collar Cotton Top"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                src="/images/Layered_Collar_Cotto_620461.png"
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 inset-x-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  className="w-full py-2.5 bg-surface text-primary font-label-uppercase text-[10px] uppercase tracking-[0.15em] hover:bg-primary hover:text-on-primary transition-colors text-center"
                  type="button"
                >
                  Quick View
                </button>
              </div>
            </Link>
            <div className="pt-space-sm space-y-1">
              <div className="flex justify-between items-baseline">
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Layered Collar Cotton Top
                </h3>
                <span className="font-label-price text-label-price text-secondary">
                  $390
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Structured ivory cotton • Flattering fit
              </p>
              <div className="pt-1">
                <Link
                  href="/product/layered-collar-cotton-top"
                  className="font-label-uppercase text-[10px] uppercase tracking-[0.16em] text-primary hover:text-secondary inline-flex items-center gap-1"
                >
                  Shop Now
                  <span className="text-xs">→</span>
                </Link>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="flex flex-col group">
            <Link href="/product/slim-ribbed-cotton-long-sleeved-top" className="relative aspect-[4/5] bg-surface-container overflow-hidden block">
              <img
                alt="Slim Ribbed Cotton Long-Sleeved Top"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                src="/images/Slim_Ribbed_Cotton_L_785833.png"
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 inset-x-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  className="w-full py-2.5 bg-surface text-primary font-label-uppercase text-[10px] uppercase tracking-[0.15em] hover:bg-primary hover:text-on-primary transition-colors text-center"
                  type="button"
                >
                  Quick View
                </button>
              </div>
            </Link>
            <div className="pt-space-sm space-y-1">
              <div className="flex justify-between items-baseline">
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Slim Ribbed Cotton Top
                </h3>
                <span className="font-label-price text-label-price text-secondary">
                  $340
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Featherweight rib • Seamless hem
              </p>
              <div className="pt-1">
                <Link
                  href="/product/slim-ribbed-cotton-long-sleeved-top"
                  className="font-label-uppercase text-[10px] uppercase tracking-[0.16em] text-primary hover:text-secondary inline-flex items-center gap-1"
                >
                  Shop Now
                  <span className="text-xs">→</span>
                </Link>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="flex flex-col group">
            <Link href="/product/inverness-fine-gauge-crew-knit" className="relative aspect-[4/5] bg-surface-container overflow-hidden block">
              <img
                alt="The Inverness Fine-Gauge Crew Knit"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                src="/images/The_Inverness_Fine_C_082468.jpg"
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 inset-x-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  className="w-full py-2.5 bg-surface text-primary font-label-uppercase text-[10px] uppercase tracking-[0.15em] hover:bg-primary hover:text-on-primary transition-colors text-center"
                  type="button"
                >
                  Quick View
                </button>
              </div>
            </Link>
            <div className="pt-space-sm space-y-1">
              <div className="flex justify-between items-baseline">
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  The Inverness Crew Knit
                </h3>
                <span className="font-label-price text-label-price text-secondary">
                  $310
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Double-faced worsted wool • Clean linear cut
              </p>
              <div className="pt-1">
                <Link
                  href="/product/inverness-fine-gauge-crew-knit"
                  className="font-label-uppercase text-[10px] uppercase tracking-[0.16em] text-primary hover:text-secondary inline-flex items-center gap-1"
                >
                  Shop Now
                  <span className="text-xs">→</span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* SECTION 3: THE ATELIER TAXONOMY TEASER & PHILOSOPHY */}
      <section className="w-full bg-surface-container-lowest py-space-xl">
        <div className="px-margin md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-space-md pr-0 lg:pr-space-md mb-10 lg:mb-0">
              <div className="inline-flex items-center gap-2 border border-secondary-container px-3 py-1 bg-surface">
                <span className="material-symbols-outlined text-[14px] text-primary">
                  architecture
                </span>
                <span className="font-label-uppercase text-[10px] uppercase tracking-[0.2em] text-on-surface">
                  BEHIND THE BRAND: OUR DESIGN PHILOSOPHY
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight leading-tight">
                ELEVATING THE EVERYDAY WARDROBE
              </h2>
              <p className="font-editorial-italic text-editorial-italic text-secondary leading-snug">
                “True luxury lies in the perfection of the simplest garments. When you remove the unnecessary, only the perfect cut remains.”
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                In our Paris studio, we spend countless hours perfecting the fit of every piece. We adjust by millimeters so the fabric stays flush during natural motion without pulling or gaping. VELORA's collection is an ongoing exploration of perfect fits: relaxed tees, structured tops, and elegant knits.
              </p>
              <div className="pt-space-sm space-y-3">
                <div className="flex items-center justify-between border-b border-secondary-container pb-2">
                  <span className="font-body-sm text-body-sm text-primary font-medium">
                    01. The Perfect Fit
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-secondary-container pb-2">
                  <span className="font-body-sm text-body-sm text-primary font-medium">
                    02. Premium Fabrics
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-secondary-container pb-2">
                  <span className="font-body-sm text-body-sm text-primary font-medium">
                    03. Timeless Design
                  </span>
                </div>
              </div>
              <div className="pt-space-md">
                <Link
                  href="/blog"
                  className="font-label-uppercase text-label-uppercase uppercase px-8 py-4 bg-transparent border border-primary text-primary hover:bg-primary hover:text-on-primary transition-all duration-200 tracking-[0.16em] inline-block"
                >
                  READ OUR STORY
                </Link>
              </div>
            </div>
            {/* Right Large Visual with Asymmetric Offset */}
            <div className="lg:col-span-7">
              <div className="relative w-full aspect-[4/5] bg-surface-container overflow-hidden">
                <img
                  alt="Model in black bandeau and neutral tailoring"
                  className="w-full h-full object-cover object-top"
                  src="/images/Model_styled_in_The__523406.png"
                />
                <div className="absolute top-6 right-6 bg-surface/95 px-4 py-3 border border-secondary-container text-right">
                  <span className="font-label-uppercase text-[9px] uppercase tracking-[0.2em] text-secondary block">
                    DESIGN DIARY
                  </span>
                  <span className="font-headline-sm text-primary block text-sm">
                    SUMMER COLLECTION
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: MATERIALITY & TACTILITY GRID */}
      <section className="w-full px-margin md:px-margin-desktop py-space-xl">
        <div className="text-center max-w-xl mx-auto space-y-space-xs mb-space-lg">
          <span className="font-label-uppercase text-label-uppercase text-secondary uppercase tracking-[0.2em]">
            PREMIUM FABRICS
          </span>
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight">
            Our Materials
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Every garment begins with the finest fabrics sourced from generations-old mills in Italy and Japan.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop">
          {/* Material 1 */}
          <div className="bg-surface-container-low p-space-md flex flex-col justify-between min-h-[220px] transition-colors hover:bg-surface-container">
            <div className="space-y-2">
              <span className="font-label-uppercase text-[10px] uppercase tracking-[0.2em] text-secondary block">
                01 / FABRIC
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Micro-Modal Jersey
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant pt-1 leading-relaxed">
                Derived from certified forestry. Delivers a weightless feel that glides across the skin effortlessly.
              </p>
            </div>
            <div className="pt-4 border-t border-secondary-container flex items-center justify-between text-secondary font-label-uppercase text-[10px] tracking-widest">
              <span>COMO, ITALY</span>
            </div>
          </div>
          {/* Material 2 */}
          <div className="bg-surface-container-low p-space-md flex flex-col justify-between min-h-[220px] transition-colors hover:bg-surface-container">
            <div className="space-y-2">
              <span className="font-label-uppercase text-[10px] uppercase tracking-[0.2em] text-secondary block">
                02 / FABRIC
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Wool Crepe
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant pt-1 leading-relaxed">
                Italian two-ply wool faille with a crisp drape. Engineered to retain its shape and structure throughout the day.
              </p>
            </div>
            <div className="pt-4 border-t border-secondary-container flex items-center justify-between text-secondary font-label-uppercase text-[10px] tracking-widest">
              <span>BIELLA, ITALY</span>
            </div>
          </div>
          {/* Material 3 */}
          <div className="bg-surface-container-low p-space-md flex flex-col justify-between min-h-[220px] transition-colors hover:bg-surface-container">
            <div className="space-y-2">
              <span className="font-label-uppercase text-[10px] uppercase tracking-[0.2em] text-secondary block">
                03 / FABRIC
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Pure Silk Satin
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant pt-1 leading-relaxed">
                22-momme pure organic silk with a matte luster. Cascades along diagonal lines with natural elegance.
              </p>
            </div>
            <div className="pt-4 border-t border-secondary-container flex items-center justify-between text-secondary font-label-uppercase text-[10px] tracking-widest">
              <span>LYON, FRANCE</span>
            </div>
          </div>
          {/* Material 4 */}
          <div className="bg-surface-container-low p-space-md flex flex-col justify-between min-h-[220px] transition-colors hover:bg-surface-container">
            <div className="space-y-2">
              <span className="font-label-uppercase text-[10px] uppercase tracking-[0.2em] text-secondary block">
                04 / FABRIC
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Lightweight Cashmere
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant pt-1 leading-relaxed">
                18-gauge featherweight cashmere knit. Seamless finish allows maximum elasticity and warmth.
              </p>
            </div>
            <div className="pt-4 border-t border-secondary-container flex items-center justify-between text-secondary font-label-uppercase text-[10px] tracking-widest">
              <span>PERUGIA, ITALY</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: EDITORIAL CAMPAIGN BANNER & SALON APPOINTMENTS */}
      <section className="w-full px-margin md:px-margin-desktop pb-space-xl">
        <div className="relative w-full overflow-hidden bg-primary text-on-primary">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
            {/* Imagery Half */}
            <div className="lg:col-span-6 relative aspect-[4/5] lg:aspect-auto">
              <img
                alt="Velora Salon Bespoke Fittings"
                className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
                src="/images/02_Cascading_Cowl_083164.png"
              />
            </div>
            {/* Salon Info Half */}
            <div className="lg:col-span-6 p-space-lg lg:p-space-xl flex flex-col justify-between bg-primary">
              <div className="space-y-space-md">
                <span className="font-label-uppercase text-label-uppercase uppercase text-neutral-400 tracking-[0.25em] block">
                  PERSONAL STYLING
                </span>
                <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-on-primary tracking-tight">
                  COMPLIMENTARY STYLING SESSIONS
                </h2>
                <p className="font-editorial-italic text-editorial-italic text-neutral-300">
                  Online • Paris • New York
                </p>
                <p className="font-body-md text-body-md text-neutral-400 max-w-md pt-space-xs">
                  Experience VELORA with private one-on-one appointments. Our stylists provide personalized recommendations and fit advice tailored to your exact measurements and lifestyle.
                </p>
              </div>
              <div className="pt-space-lg flex flex-col sm:flex-row items-start sm:items-center gap-space-md">
                <Link
                  href="/contact"
                  className="font-label-uppercase text-label-uppercase uppercase px-8 py-4 bg-on-primary text-primary hover:bg-neutral-200 transition-colors tracking-[0.18em] text-center inline-block"
                >
                  BOOK AN APPOINTMENT
                </Link>
                <span className="font-body-sm text-body-sm text-neutral-400">
                  Complimentary alterations included.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESTRAINED VALUE PILLARS */}
      <section className="w-full border-t border-secondary-container py-space-md">
        <div className="px-margin md:px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <span className="material-symbols-outlined text-secondary text-[22px]">
              package_2
            </span>
            <div>
              <h4 className="font-label-uppercase text-[11px] uppercase tracking-wider text-primary">
                Premium Packaging
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Delivered in signature protective boxes.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <span className="material-symbols-outlined text-secondary text-[22px]">
              local_shipping
            </span>
            <div>
              <h4 className="font-label-uppercase text-[11px] uppercase tracking-wider text-primary">
                Express Global Delivery
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Fast and carbon-neutral shipping.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <span className="material-symbols-outlined text-secondary text-[22px]">
              published_with_changes
            </span>
            <div>
              <h4 className="font-label-uppercase text-[11px] uppercase tracking-wider text-primary">
                Lifetime Alterations
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Complimentary tailoring for all pieces.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
