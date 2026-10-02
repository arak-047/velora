"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

const products = [
  {
    id: "slim-ribbed-cotton-long-sleeved",
    slug: "slim-ribbed-cotton-long-sleeved-top",
    name: "Slim Ribbed Cotton Long-Sleeve",
    price: 380,
    category: "knits ribbed",
    desc: "100% Giza Ribbed Cotton • Fine Japanese gauge",
    images: {
      primary: "/velora/images/Slim_Ribbed_Cotton_L_785833.png",
      hover: "/velora/images/Slim_Ribbed_Cotton_L_966551.png"
    },
    colors: ["#E5E2DE", "#2A1D1A", "#111111"],
    colorText: "3 Colors",
    archetype: "01"
  },
  {
    id: "layered-collar-cotton",
    slug: "layered-collar-cotton-top",
    name: "Layered Collar Cotton Long-Sleeve",
    price: 420,
    category: "knits structured",
    desc: "Fine mercerized cotton • Dual-tone collar insert",
    images: {
      primary: "/velora/images/Layered_Collar_Cotto_620461.png",
      hover: "/velora/images/Layered_Collar_Cotto_667942.png"
    },
    colors: ["#3B2820", "#FFFFFF"],
    colorText: "Dual Finish",
    archetype: "02"
  },
  {
    id: "dera-lightweight-crew",
    slug: "the-dera-lightweight-crew-top",
    name: "The Dera Lightweight Crew Top",
    price: 290,
    category: "knits",
    desc: "Pure dry-touch linen jersey • Relaxed drape",
    images: {
      primary: "/velora/images/The_Dera_Lightweight_459737.png",
      hover: "/velora/images/The_Dera_Lightweight_397170.png"
    },
    colors: ["#202020", "#5D6366"],
    colorText: "2 Shades",
    archetype: "03"
  },
  {
    id: "denzel-square-neck",
    slug: "the-denzel-square-neck",
    name: "The Denzel Square-Neck Camisole",
    price: 260,
    category: "camisoles ribbed",
    desc: "Fine Milano rib knit • Crisp geometric collar line",
    images: {
      primary: "/velora/images/The_Denzel_Square_875922.png",
      hover: "/velora/images/The_Denzel_Square_969111.png"
    },
    colors: ["#0F0F0F", "#FAF8F5"],
    colorText: "2 Palettes",
    archetype: "04"
  },
  {
    id: "inverness-fine-crew",
    slug: "inverness-fine-gauge-crew-knit",
    name: "The Inverness Fine Crew Knit",
    price: 360,
    category: "knits",
    desc: "18-gauge silk-cashmere blend • Seamless whole-garment",
    images: {
      primary: "/velora/images/The_Inverness_Fine_C_082468.jpg",
      hover: "/velora/images/The_Inverness_Fine_C_219230.png"
    },
    colors: ["#181818", "#F3EFE9"],
    colorText: "Silk Blend",
    archetype: "05"
  },
  {
    id: "serata-seamed-tee",
    slug: "the-serata-seamed-tee",
    name: "The Serata Seamed Tee",
    price: 310,
    category: "structured",
    desc: "Sculptural back seam construction • Compact modal",
    images: {
      primary: "/velora/images/The_Serata_Seamed_Te_590205.png",
      hover: "/velora/images/The_Serata_Seamed_Te_590205.png" // single image mapped
    },
    colors: ["#B2B1AE", "#7D7C79"],
    colorText: "2 Tonals",
    archetype: "06",
    overlay: "Spine Center-Stitch Construction"
  },
  {
    id: "stormie-ribbed-inbuilt",
    slug: "the-stormie-ribbed-in-built-tank",
    name: "The Stormie Ribbed In-Built Tank",
    price: 240,
    category: "ribbed camisoles",
    desc: "Contoured interior bustier support • Ergonomic rib",
    images: {
      primary: "/velora/images/The_Stormie_Ribbed_I_535218.png",
      hover: "/velora/images/The_Stormie_Ribbed_I_535218.png"
    },
    colors: ["#5D4638", "#C99C8E", "#EDEBE6", "#B2997D"],
    colorText: "4 Colors",
    archetype: "07"
  },
  {
    id: "kelly-square-cut",
    slug: "the-kelly-square-cut",
    name: "The Kelly Square-Cut Crop Tank",
    price: 220,
    category: "structured camisoles",
    desc: "Double-layered compact jersey • Self-lined band",
    images: {
      primary: "/velora/images/The_Kelly_Square_142145.png",
      hover: "/velora/images/The_Kelly_Square_142145.png"
    },
    colors: ["#A25A47", "#E5DFD7", "#39393A", "#151515"],
    colorText: "4 Colors",
    archetype: "08"
  },
  {
    id: "danel-tank-top",
    slug: "danel-tank-top",
    name: "Danel Tank Top",
    price: 490,
    category: "camisoles",
    desc: "Lightweight jersey • Slim fit",
    images: {
      primary: "/velora/images/danel_tank_top_2.webp",
      hover: "/velora/images/danel_tank_top_3.webp"
    },
    colors: ["#000000", "#FFFFF0"],
    colorText: "2 Colors",
    archetype: "09",
    overlay: "NEW ARRIVAL"
  }
];

export default function TopsCollection() {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("curated");
  const [gridCols, setGridCols] = useState(3);
  const [isLoaded, setIsLoaded] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];
    if (filter !== "all") {
      result = result.filter(p => p.category.includes(filter));
    }
    
    if (sort === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }
    return result;
  }, [filter, sort]);

  return (
    <div className="flex flex-col w-full">
      {/* Editorial Monograph Masthead */}
      <section className="w-full px-margin lg:px-margin-desktop pt-8 pb-12 bg-surface">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                <span className="font-label-uppercase text-label-uppercase tracking-widest text-secondary uppercase">
                  Spring / Summer 2026
                </span>
                <span className="text-outline-variant font-body-sm">/</span>
                <span className="font-label-uppercase text-label-uppercase tracking-widest text-on-surface-variant uppercase">
                  New Arrivals
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                The Tops & Knitwear Collection
              </h1>
              <p className="font-editorial-italic text-editorial-italic text-secondary max-w-2xl pt-1">
                An exploration of tactile knits and refined silhouettes designed for modern everyday dressing.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-right">
              <div className="flex items-center gap-6 text-on-surface">
                <div className="text-left sm:text-right">
                  <span className="font-label-uppercase text-label-uppercase text-secondary block uppercase">
                    Collection Size
                  </span>
                  <span className="font-body-md text-body-md font-normal">
                    18 Essential Pieces
                  </span>
                </div>
                <div className="w-px h-8 bg-surface-container-highest"></div>
                <div className="text-left sm:text-right">
                  <span className="font-label-uppercase text-label-uppercase text-secondary block uppercase">
                    Fabric Sourcing
                  </span>
                  <span className="font-body-md text-body-md font-normal">
                    Italy & Japan
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Architectural Control & Taxonomy Bar */}
          <div className="pt-6 pb-4 bg-surface-container-low px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <nav aria-label="Archive Filters" className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              <button 
                onClick={() => setFilter("all")} 
                className={`px-4 py-2 font-label-uppercase text-label-uppercase uppercase tracking-wider transition-colors duration-150 whitespace-nowrap ${filter === 'all' ? 'bg-primary text-on-primary' : 'bg-surface text-on-surface hover:bg-surface-container-high'}`}
                type="button"
              >
                All Collections
              </button>
              <button 
                onClick={() => setFilter("knits")} 
                className={`px-4 py-2 font-label-uppercase text-label-uppercase uppercase tracking-wider transition-colors duration-150 whitespace-nowrap ${filter === 'knits' ? 'bg-primary text-on-primary' : 'bg-surface text-on-surface hover:bg-surface-container-high'}`}
                type="button"
              >
                Knitwear
              </button>
              <button 
                onClick={() => setFilter("ribbed")} 
                className={`px-4 py-2 font-label-uppercase text-label-uppercase uppercase tracking-wider transition-colors duration-150 whitespace-nowrap ${filter === 'ribbed' ? 'bg-primary text-on-primary' : 'bg-surface text-on-surface hover:bg-surface-container-high'}`}
                type="button"
              >
                Ribbed Tops
              </button>
              <button 
                onClick={() => setFilter("camisoles")} 
                className={`px-4 py-2 font-label-uppercase text-label-uppercase uppercase tracking-wider transition-colors duration-150 whitespace-nowrap ${filter === 'camisoles' ? 'bg-primary text-on-primary' : 'bg-surface text-on-surface hover:bg-surface-container-high'}`}
                type="button"
              >
                Camisoles
              </button>
              <button 
                onClick={() => setFilter("structured")} 
                className={`px-4 py-2 font-label-uppercase text-label-uppercase uppercase tracking-wider transition-colors duration-150 whitespace-nowrap ${filter === 'structured' ? 'bg-primary text-on-primary' : 'bg-surface text-on-surface hover:bg-surface-container-high'}`}
                type="button"
              >
                Structured Tops
              </button>
            </nav>
            <div className="flex items-center justify-between md:justify-end gap-6 self-stretch md:self-auto">
              <div className="flex items-center gap-3">
                <span className="font-label-uppercase text-label-uppercase text-secondary uppercase">
                  Sort:
                </span>
                <div className="relative inline-block">
                  <select 
                    aria-label="Sort archetype listing" 
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="bg-surface text-on-surface font-body-sm text-body-sm pl-3 pr-8 py-1.5 focus:outline-none focus:bg-surface-container cursor-pointer uppercase appearance-none"
                  >
                    <option value="curated">Curated Order</option>
                    <option value="price-asc">Price: Ascending</option>
                    <option value="price-desc">Price: Descending</option>
                    <option value="recent">New Arrivals</option>
                  </select>
                  <span className="material-symbols-outlined text-[16px] pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-secondary">
                    expand_more
                  </span>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1 text-on-surface">
                <button 
                  aria-label="Three column standard grid" 
                  onClick={() => setGridCols(3)}
                  className={`w-8 h-8 flex items-center justify-center transition-colors ${gridCols === 3 ? 'bg-surface-container-high text-primary' : 'text-secondary hover:text-primary'}`}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">grid_view</span>
                </button>
                <button 
                  aria-label="Two column editorial grid" 
                  onClick={() => setGridCols(2)}
                  className={`w-8 h-8 flex items-center justify-center transition-colors ${gridCols === 2 ? 'bg-surface-container-high text-primary' : 'text-secondary hover:text-primary'}`}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">view_column</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Listing Grid */}
      <section className="w-full px-margin lg:px-margin-desktop py-6">
        <div className="max-w-[1600px] mx-auto">
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${gridCols} gap-x-gutter lg:gap-x-gutter-desktop gap-y-16`}>
            
            {filteredAndSortedProducts.map((p, idx) => {
              const isInsertAtIdx = sort === "curated" && filter === "all" && idx === 3;
              
              return (
                <div key={p.id} className="contents">
                  {/* Insert Curatorial Thesis before 4th item if standard sorted */}
                  {isInsertAtIdx && (
                    <div className={`col-span-1 md:col-span-2 lg:col-span-${gridCols} py-10 my-4 bg-surface-container-high px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8`}>
                      <div className="max-w-2xl space-y-3">
                        <span className="font-label-uppercase text-label-uppercase text-secondary tracking-widest uppercase block">Our Philosophy</span>
                        <p className="font-editorial-italic text-headline-sm lg:text-headline-md text-on-surface tracking-tight">
                          "Garments designed with simplicity to highlight the beauty of premium fabrics."
                        </p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant pt-1">
                          Crafted to move perfectly with your body, offering effortless elegance for every day.
                        </p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-3 flex-shrink-0">
                        <span className="font-label-uppercase text-label-uppercase text-on-surface uppercase tracking-widest">DESIGN DIARY</span>
                        <Link href="/blog" className="px-6 py-3 bg-primary text-on-primary font-label-uppercase text-label-uppercase uppercase tracking-wider hover:bg-on-primary-fixed-variant transition-colors">Read Our Story</Link>
                      </div>
                    </div>
                  )}

                  <article className="group flex flex-col product-item">
                    <Link href={`/product/${p.slug}`} className="relative w-full aspect-[4/5] bg-surface-container overflow-hidden block">
                      <img alt={p.name} className={`w-full h-full object-cover object-center transition-opacity duration-500 ease-out ${p.images.hover ? 'group-hover:opacity-0' : ''}`} loading="lazy" src={p.images.primary} />
                      {p.images.hover && (
                        <img alt={`${p.name} - Alternate`} className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" loading="lazy" src={p.images.hover} />
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="px-2.5 py-1 bg-surface/90 backdrop-blur-sm font-label-uppercase text-[10px] text-on-surface uppercase tracking-widest">NEW ARRIVAL</span>
                      </div>
                      {p.overlay && (
                        <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="font-body-sm text-body-sm text-on-surface block text-center">
                            {p.overlay}
                          </span>
                        </div>
                      )}
                      <button aria-label="Save to Wishlist" className="absolute top-4 right-4 w-9 h-9 bg-surface/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-surface" type="button">
                        <span className="material-symbols-outlined text-[18px] text-on-surface">bookmark_border</span>
                      </button>
                    </Link>
                    <div className="pt-5 flex flex-col gap-1.5">
                      <div className="flex items-baseline justify-between">
                        <h2 className="font-body-md text-body-md text-on-surface font-medium tracking-tight">{p.name}</h2>
                        <span className="font-label-price text-label-price text-secondary">${p.price}</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-secondary">{p.desc}</p>
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-1.5">
                          {p.colors.map((color, cIdx) => (
                            <span key={cIdx} className="w-3 h-3 rounded-full border border-outline-variant/30 inline-block" style={{ backgroundColor: color }}></span>
                          ))}
                          <span className="font-label-uppercase text-[10px] text-secondary ml-1 tracking-wider uppercase">{p.colorText}</span>
                        </div>
                        <Link href={`/product/${p.slug}`} className="font-label-uppercase text-label-uppercase text-primary tracking-widest uppercase hover:underline underline-offset-4">Select Size</Link>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}

            {/* Archival Study Preview Tile at the end (always visible unless heavily filtered) */}
            {(sort === "curated" && filter === "all") && (
              <article className="flex flex-col justify-between p-8 bg-surface-container-high h-full min-h-[460px]">
                <div className="space-y-4">
                  <span className="font-label-uppercase text-label-uppercase text-secondary uppercase tracking-widest block">Fabrication Dossier</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Perennial 100% Giza Cotton</h3>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                    Harvested along the fertile Nile Delta, long-staple Giza fiber yields unmatched tensile strength with an ultra-soft handle. Every top in this capsule is combed twice to prevent surface pilling across cycles of wear.
                  </p>
                  <div className="pt-2 flex flex-col gap-2">
                    <div className="flex justify-between items-center text-on-surface">
                      <span className="font-label-uppercase text-[10px] uppercase text-secondary">Yarn Count</span>
                      <span className="font-label-price text-label-price">80/2 Compact Ply</span>
                    </div>
                    <div className="w-full bg-surface h-1 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-4/5"></div>
                    </div>
                  </div>
                </div>
                <div className="pt-8">
                  <span className="font-label-uppercase text-label-uppercase text-secondary tracking-wider block mb-2 uppercase">ATELIER ARCHIVE NUMBER</span>
                  <div className="font-label-price text-label-price text-on-surface">VEL-SS25-TEX-004</div>
                </div>
              </article>
            )}

          </div>
        </div>

        {/* Load More / Archetype Pagination Control */}
        <div className="w-full py-20 flex flex-col items-center justify-center gap-5 text-center">
          <div className="flex items-center gap-2">
            <span className="font-label-price text-label-price text-on-surface font-medium">
              {isLoaded ? "18" : filteredAndSortedProducts.length}
            </span>
            <span className="text-outline-variant font-body-sm">of</span>
            <span className="font-label-price text-label-price text-secondary">18 Styles Displayed</span>
          </div>
          <div className="w-48 bg-surface-container-highest h-0.5 relative">
            <div className="bg-primary h-0.5 transition-all duration-300" style={{ width: isLoaded ? '100%' : '44%' }}></div>
          </div>
          <button 
            onClick={() => setIsLoaded(true)}
            disabled={isLoaded}
            className={`mt-2 px-10 py-4 font-label-uppercase text-label-uppercase uppercase tracking-widest transition-colors ${isLoaded ? 'bg-surface-container-high text-secondary cursor-not-allowed opacity-50' : 'bg-primary text-on-primary hover:bg-on-primary-fixed-variant'}`}
            type="button"
          >
            {isLoaded ? "All Styles Loaded" : "Load 10 Additional Styles"}
          </button>
          <span className="font-body-sm text-body-sm text-secondary">
            Complimentary express delivery on all orders.
          </span>
        </div>
      </section>
    </div>
  );
}
