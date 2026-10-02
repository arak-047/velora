"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useState } from "react";

const productData = {
  "layered-collar-cotton-top": {
    name: "Layered Collar Cotton Long-Sleeved Top",
    price: "$420 USD",
    category: "KNITWEAR",
    spec: "1326265",
    edition: "NO. 1326265-007",
    units: "65 units crafted",
    palette: "Espresso Brown / Pure White Insert",
    paletteCode: "PERMANENT CODE 007",
    color: "#2C1D18",
    images: {
      primary: "/images/Layered_Collar_Cotto_620461.png",
      fluid: "/images/Layered_Collar_Cotto_667942.png",
      reverse: "/images/Reverse_tailored_con_488252.png"
    },
    dossier: [
      {
        title: "FABRIC",
        text: "Spun from extra-long staple Pima yarn double-mercerized for subtle natural luster and shape retention."
      },
      {
        title: "DETAILS",
        text: "Crisp 120/2 Albini poplin inserts are anchored by interior blind edge-stitching, mitigating bulk entirely."
      },
      {
        title: "FIT",
        text: "Biella fine-gauge rib knit engineered with 8% elastane core for calibrated recovery through repeated wear."
      }
    ],
    composition: {
      main: "92% Mercerized Pima Cotton, 8% Elastane Body; 100% Crisp Poplin Collar and Hem Trim.",
      secondary: "Knit body precision-spun in Biella, Italy. Poplin accents sourced exclusively from Albini 1876, Bergamo."
    },
    construction: {
      main: "Trompe l'œil layered shirting neckline and shirttail hem tailored seamlessly into a micro-ribbed body.",
      secondary: "Features elongated cuff architecture designed to sit slightly over knuckles with subtle side-hem vent slits."
    }
  },
  "slim-ribbed-cotton-long-sleeved-top": {
    name: "Slim Ribbed Cotton Long-Sleeved Top",
    price: "$380 USD",
    category: "KNITWEAR",
    spec: "1356338",
    edition: "NO. 1356338-001",
    units: "80 units crafted",
    palette: "Chalk White",
    paletteCode: "PERMANENT CODE 001",
    color: "#E5E2DE",
    images: {
      primary: "/images/Slim_Ribbed_Cotton_L_785833.png",
      fluid: "/images/Slim_Ribbed_Cotton_L_966551.png",
      reverse: "/images/Slim_Ribbed_Cotton_L_773722.png"
    },
    dossier: [
      {
        title: "FABRIC",
        text: "100% Giza ribbed cotton harvested along the Nile Delta, ensuring superior tensile strength."
      },
      {
        title: "CONSTRUCTION",
        text: "Knitted entirely on Japanese fine-gauge machines for a true tubular construction with zero side seams."
      },
      {
        title: "FINISH",
        text: "Subjected to an exclusive bio-wash protocol that eliminates microscopic pilling and imparts a soft hand."
      }
    ],
    composition: {
      main: "100% Extra-Long Staple Giza Cotton.",
      secondary: "Yarn spun in Japan, knitted in Kyoto."
    },
    construction: {
      main: "Tubular knit with zero side seams for uninterrupted comfort against the skin.",
      secondary: "Fine ribbed texture adapts flawlessly to the body's natural contours."
    }
  },
  "inverness-fine-gauge-crew-knit": {
    name: "The Inverness Fine-Gauge Crew Knit",
    price: "$360 USD",
    category: "KNITWEAR",
    spec: "1421290",
    edition: "NO. 1421290-003",
    units: "120 units crafted",
    palette: "Jet Black",
    paletteCode: "PERMANENT CODE 003",
    color: "#181818",
    images: {
      primary: "/images/The_Inverness_Fine_C_082468.jpg",
      fluid: "/images/The_Inverness_Fine_C_219230.png",
      reverse: "/images/The_Inverness_Flat_P_077893.png"
    },
    dossier: [
      {
        title: "FABRIC",
        text: "18-gauge silk and Mongolian cashmere blend, delivering weightless warmth and thermoregulation."
      },
      {
        title: "CONSTRUCTION",
        text: "Engineered as a single continuous piece without seams, allowing maximum elasticity without shape deformation."
      },
      {
        title: "DETAILS",
        text: "Tightly plied yarns prevent stretching at stress points like the elbows and neckline over years of wear."
      }
    ],
    composition: {
      main: "70% Mongolian Cashmere, 30% Mulberry Silk.",
      secondary: "Sourced and spun in Perugia, Italy under strict ethical harvesting protocols."
    },
    construction: {
      main: "Seamless whole-garment knitting technology.",
      secondary: "Clean crew neckline with a micro-ribbed finish that sits flush against the clavicle."
    }
  },

  "the-dera-lightweight-crew-top": {
    name: "The Dera Lightweight Crew Top",
    price: "$290 USD",
    category: "KNITWEAR",
    spec: "1421291",
    edition: "NO. 1421291-003",
    units: "100 units crafted",
    palette: "Charcoal",
    paletteCode: "PERMANENT CODE 003",
    color: "#202020",
    images: {
      primary: "/images/The_Dera_Lightweight_459737.png",
      fluid: "/images/The_Dera_Lightweight_397170.png",
      reverse: "/images/The_Dera_Lightweight_459737.png"
    },
    dossier: [
      { title: "FABRIC", text: "Pure dry-touch linen jersey for relaxed drape." },
      { title: "DETAILS", text: "Clean lightweight construction." },
      { title: "FIT", text: "True to size. Designed for a comfortable, flattering fit." }
    ],
    composition: { main: "100% Linen.", secondary: "Meticulously sourced." },
    construction: { main: "Lightweight knit.", secondary: "Drapes elegantly." }
  },
  "the-denzel-square-neck": {
    name: "The Denzel Square-Neck Camisole",
    price: "$260 USD",
    category: "CAMISOLES",
    spec: "1421292",
    edition: "NO. 1421292-004",
    units: "50 units crafted",
    palette: "Midnight",
    paletteCode: "PERMANENT CODE 004",
    color: "#0F0F0F",
    images: {
      primary: "/images/The_Denzel_Square_875922.png",
      fluid: "/images/The_Denzel_Square_969111.png",
      reverse: "/images/The_Denzel_Square_875922.png"
    },
    dossier: [
      { title: "FABRIC", text: "Fine Milano rib knit." },
      { title: "DETAILS", text: "Crisp geometric collar line." },
      { title: "FIT", text: "Form-fitting square neck." }
    ],
    composition: { main: "Rib Knit Blend.", secondary: "Structured finish." },
    construction: { main: "Milano Rib.", secondary: "Clean minimal straps." }
  },
  "the-serata-seamed-tee": {
    name: "The Serata Seamed Tee",
    price: "$310 USD",
    category: "STRUCTURED",
    spec: "1421293",
    edition: "NO. 1421293-005",
    units: "150 units crafted",
    palette: "Heather Grey",
    paletteCode: "PERMANENT CODE 005",
    color: "#B2B1AE",
    images: {
      primary: "/images/The_Serata_Seamed_Te_590205.png",
      fluid: "/images/The_Serata_Seamed_Te_590205.png",
      reverse: "/images/The_Serata_Seamed_Te_590205.png"
    },
    dossier: [
      { title: "FABRIC", text: "Compact modal jersey." },
      { title: "DETAILS", text: "Spine center-stitch construction." },
      { title: "FIT", text: "Relaxed structural fit." }
    ],
    composition: { main: "100% Modal.", secondary: "Smooth compact finish." },
    construction: { main: "Sculptural back seam.", secondary: "Essential everyday wear." }
  },
  "the-stormie-ribbed-in-built-tank": {
    name: "The Stormie Ribbed In-Built Tank",
    price: "$240 USD",
    category: "CAMISOLES",
    spec: "1421294",
    edition: "NO. 1421294-006",
    units: "200 units crafted",
    palette: "Rosewood",
    paletteCode: "PERMANENT CODE 006",
    color: "#C99C8E",
    images: {
      primary: "/images/The_Stormie_Ribbed_I_535218.png",
      fluid: "/images/The_Stormie_Ribbed_I_535218.png",
      reverse: "/images/The_Stormie_Ribbed_I_535218.png"
    },
    dossier: [
      { title: "FABRIC", text: "Ergonomic heavyweight rib." },
      { title: "DETAILS", text: "Contoured interior bustier support." },
      { title: "FIT", text: "Second-skin compression." }
    ],
    composition: { main: "Ribbed Cotton Blend.", secondary: "Built-in support lining." },
    construction: { main: "Contoured fit.", secondary: "No bra required." }
  },
  "the-kelly-square-cut": {
    name: "The Kelly Square-Cut Crop Tank",
    price: "$220 USD",
    category: "CAMISOLES",
    spec: "1421295",
    edition: "NO. 1421295-007",
    units: "180 units crafted",
    palette: "Rust",
    paletteCode: "PERMANENT CODE 007",
    color: "#A25A47",
    images: {
      primary: "/images/The_Kelly_Square_142145.png",
      fluid: "/images/The_Kelly_Square_142145.png",
      reverse: "/images/The_Kelly_Square_142145.png"
    },
    dossier: [
      { title: "FABRIC", text: "Double-layered compact jersey." },
      { title: "DETAILS", text: "Self-lined band." },
      { title: "FIT", text: "Cropped boxy fit." }
    ],
    composition: { main: "Compact Jersey.", secondary: "Double layered." },
    construction: { main: "Clean cropped lines.", secondary: "Self-lined for opacity." }
  },

};



export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const product = productData[resolvedParams.slug as keyof typeof productData];

  const [activeSize, setActiveSize] = useState("S");
  const [showMetrics, setShowMetrics] = useState(false);
  const [isAddingToBag, setIsAddingToBag] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const displayProduct = product || {
    name: "Archival Collection Piece",
    price: "$290 USD",
    category: "NEW ARRIVALS",
    spec: "0000000",
    edition: "NO. 0000000-000",
    units: "Limited availability",
    palette: "Signature Tone",
    paletteCode: "PERMANENT CODE",
    color: "#2C1D18",
    images: {
      primary: "/images/02_Cascading_Cowl_083164.png",
      fluid: "/images/01_Minimal_Ribbed_Ta_668700.png",
      reverse: "/images/Reverse_tailored_con_488252.png"
    },
    dossier: [
      {
        title: "FABRIC",
        text: "Premium blended fibers sourced for optimal drape and comfort."
      },
      {
        title: "DETAILS",
        text: "Clean architectural finishes with signature subtle detailing."
      },
      {
        title: "FIT",
        text: "Engineered for movement with tailored proportions."
      }
    ],
    composition: {
      main: "Signature Fabric Blend.",
      secondary: "Meticulously sourced and woven."
    },
    construction: {
      main: "Tailored fit with modern architectural seams.",
      secondary: "Drapes elegantly for an effortless silhouette."
    }
  };


  const handleAddToBag = () => {
    setIsAddingToBag(true);
    setTimeout(() => {
      setIsAddingToBag(false);
      setShowToast(true);
      // Optional: scroll to toast behavior
      const toastEl = document.getElementById("cart-toast");
      if (toastEl) {
        toastEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }, 450);
  };

  return (
    <div className="flex flex-col w-full">
      
      <div className="w-full px-margin lg:px-margin-desktop py-4 bg-surface flex items-center">
        <Link href="/collections" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-label-uppercase text-label-uppercase tracking-widest">
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          <span>BACK TO COLLECTIONS</span>
        </Link>
      </div>
<div className="w-full px-margin lg:px-margin-desktop py-space-sm bg-surface">
        <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs text-on-surface-variant">
          <Link href="/" className="font-label-uppercase text-label-uppercase tracking-widest hover:text-on-surface transition-colors">HOME</Link>
          <span className="text-[10px] text-outline opacity-40">/</span>
          <Link href="/collections" className="font-label-uppercase text-label-uppercase tracking-widest hover:text-on-surface transition-colors">COLLECTION</Link>
          <span className="text-[10px] text-outline opacity-40">/</span>
          <Link href="/collections" className="font-label-uppercase text-label-uppercase tracking-widest hover:text-on-surface transition-colors">{displayProduct.category}</Link>
          <span className="text-[10px] text-outline opacity-40">/</span>
          <span className="font-label-uppercase text-label-uppercase tracking-widest text-on-surface uppercase">{displayProduct.name}</span>
        </nav>
      </div>

      <section className="w-full px-margin lg:px-margin-desktop pb-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-desktop items-start">
          <div className="lg:col-span-7 flex flex-col gap-space-lg">
            <div className="relative w-full aspect-[4/5] bg-surface-container-low overflow-hidden group">
              <img alt={`Front full silhouette - ${displayProduct.name}`} className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.01]" src={displayProduct.images.primary} />
              <div className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur-md px-space-sm py-space-xs">
                <span className="font-label-uppercase text-label-uppercase text-on-surface tracking-widest">FRONT VIEW</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
              <div className="relative w-full aspect-[4/5] bg-surface-container-low overflow-hidden group">
                <img alt="Full length movement and drape detail" className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]" src={displayProduct.images.fluid} />
                <div className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur-md px-space-sm py-space-xs">
                  <span className="font-label-uppercase text-label-uppercase text-on-surface tracking-widest">DETAIL VIEW</span>
                </div>
              </div>
              <div className="relative w-full aspect-[4/5] bg-surface-container-low overflow-hidden group">
                <img alt="Reverse tailored construction and extended cuffs" className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.01]" src={displayProduct.images.reverse} />
                <div className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur-md px-space-sm py-space-xs">
                  <span className="font-label-uppercase text-label-uppercase text-on-surface tracking-widest">BACK VIEW</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-space-lg flex flex-col gap-space-md mt-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-uppercase text-label-uppercase tracking-widest text-secondary">PRODUCT DETAILS</span>
                <span className="font-label-uppercase text-label-uppercase tracking-widest text-on-surface">SKU {displayProduct.spec}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
                {displayProduct.dossier.map((d, i) => (
                  <div key={i} className="space-y-space-xs">
                    <span className="font-label-uppercase text-[10px] text-secondary tracking-widest block uppercase">{d.title}</span>
                    <p className="font-body-sm text-body-sm text-on-surface leading-snug">{d.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col gap-space-lg">
            <div className="space-y-space-xs">
              <div className="flex items-center justify-between">
                <span className="font-label-uppercase text-label-uppercase text-secondary tracking-widest">COLLECTION</span>
                <span className="font-label-uppercase text-label-uppercase text-secondary tracking-wider">{displayProduct.edition}</span>
              </div>
              <h1 className="font-headline-md text-headline-md text-on-surface leading-snug">{displayProduct.name}</h1>
              <div className="flex items-baseline justify-between pt-space-xs">
                <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">{displayProduct.price}</span>
                <span className="font-body-sm text-body-sm text-secondary">Taxes & Duties Calculated at Final Dispatch</span>
              </div>
            </div>

            <div className="bg-surface-container px-space-md py-space-sm flex items-center justify-between">
              <div className="flex items-center gap-space-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                <span className="font-label-uppercase text-label-uppercase tracking-wider text-on-surface">Limited Edition</span>
              </div>
              <span className="font-body-sm text-body-sm text-secondary">{displayProduct.units}</span>
            </div>

            <div className="space-y-space-sm">
              <div className="flex justify-between items-center">
                <span className="font-label-uppercase text-label-uppercase text-secondary tracking-widest">COLOR</span>
                <span className="font-body-sm text-body-sm text-on-surface">{displayProduct.palette}</span>
              </div>
              <div className="flex items-center gap-space-sm pt-space-xs">
                <button aria-label={`Selected Tone: ${displayProduct.palette}`} className="w-8 h-8 rounded-none ring-2 ring-primary ring-offset-2 ring-offset-surface relative" style={{backgroundColor: displayProduct.color}} type="button"></button>
                <div className="h-8 px-space-sm bg-surface-container-high flex items-center">
                  <span className="font-label-uppercase text-[10px] text-secondary tracking-widest uppercase">{displayProduct.paletteCode}</span>
                </div>
              </div>
            </div>

            <div className="space-y-space-sm">
              <div className="flex justify-between items-center">
                <span className="font-label-uppercase text-label-uppercase text-secondary tracking-widest">SELECT SIZE</span>
                <button 
                  className="font-label-uppercase text-label-uppercase text-on-surface hover:text-secondary underline underline-offset-4 transition-colors" 
                  type="button"
                  onClick={() => setShowMetrics(!showMetrics)}
                >
                  SIZE GUIDE
                </button>
              </div>
              <div aria-label="Select Garment Size" className="grid grid-cols-5 gap-space-xs" role="radiogroup">
                {["XS", "S", "M", "L", "XL"].map((size) => {
                  const isActive = activeSize === size;
                  return (
                    <button 
                      key={size}
                      className={`size-btn h-12 flex items-center justify-center font-label-uppercase text-label-uppercase transition-colors ${isActive ? 'bg-primary text-on-primary' : 'bg-surface-container-low text-on-surface hover:bg-surface-container-highest'}`}
                      type="button"
                      aria-checked={isActive}
                      onClick={() => setActiveSize(size)}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>

              {/* Dimensional Metrics Panel */}
              <div className={`${showMetrics ? 'block' : 'hidden'} bg-surface-container-lowest p-space-md space-y-space-sm transition-all duration-300`} id="size-metrics-panel">
                <div className="flex justify-between items-center text-on-surface">
                  <span className="font-label-uppercase text-label-uppercase tracking-wider">MEASUREMENTS (SIZE {activeSize})</span>
                  <span className="font-label-uppercase text-label-uppercase text-secondary">CENTIMETERS</span>
                </div>
                <div className="grid grid-cols-3 gap-space-sm text-center pt-space-xs">
                  <div className="bg-surface-container-low p-space-xs">
                    <span className="font-body-sm text-[11px] text-secondary block">CHEST WIDTH</span>
                    <span className="font-label-price text-label-price text-on-surface font-medium">44.0 cm</span>
                  </div>
                  <div className="bg-surface-container-low p-space-xs">
                    <span className="font-body-sm text-[11px] text-secondary block">TOTAL LENGTH</span>
                    <span className="font-label-price text-label-price text-on-surface font-medium">66.5 cm</span>
                  </div>
                  <div className="bg-surface-container-low p-space-xs">
                    <span className="font-body-sm text-[11px] text-secondary block">SLEEVE INSEAM</span>
                    <span className="font-label-price text-label-price text-on-surface font-medium">64.0 cm</span>
                  </div>
                </div>
                <p className="font-body-sm text-[11px] text-secondary pt-space-xs italic">
                  True to size. Designed for a comfortable, flattering fit.
                </p>
              </div>
            </div>

            <div className="space-y-space-sm pt-space-xs">
              <button 
                className={`w-full bg-primary text-on-primary h-14 flex items-center justify-center gap-space-sm font-label-uppercase text-label-uppercase tracking-widest transition-all duration-300 ${isAddingToBag ? 'opacity-75 cursor-not-allowed' : 'hover:bg-surface-container-highest hover:text-on-surface'}`} 
                type="button"
                onClick={handleAddToBag}
                disabled={isAddingToBag}
              >
                {isAddingToBag ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                    <span>ADDING TO BAG...</span>
                  </>
                ) : (
                  <>
                    <span>ADD TO SHOPPING BAG</span>
                    <span className="material-symbols-outlined text-[18px]">east</span>
                  </>
                )}
              </button>
              <button className="w-full bg-surface-container-lowest text-on-surface h-14 flex items-center justify-center gap-space-sm font-label-uppercase text-label-uppercase tracking-widest hover:bg-surface-container-high transition-colors" type="button">
                <span className="material-symbols-outlined text-[18px]">chair</span>
                <span>BOOK IN-STORE STYLING</span>
              </button>
            </div>

            {/* Cart Toast Notification */}
            {showToast && (
              <div className="flex bg-surface-container-highest p-space-md items-center justify-between transition-opacity" id="cart-toast">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span className="font-body-sm text-body-sm text-on-surface">Added to your bag [1 Item: Size {activeSize}]</span>
                </div>
                <Link href="#" className="font-label-uppercase text-label-uppercase underline underline-offset-4 text-on-surface">REVIEW BAG</Link>
              </div>
            )}

            <div className="space-y-space-md pt-space-sm">
              <div className="bg-surface-container-lowest p-space-md space-y-space-xs">
                <span className="font-label-uppercase text-label-uppercase tracking-widest text-secondary block">FABRIC & CARE</span>
                <p className="font-body-md text-body-md text-on-surface pt-space-xs">{displayProduct.composition.main}</p>
                <p className="font-body-sm text-body-sm text-secondary pt-space-xs">{displayProduct.composition.secondary}</p>
              </div>
              <div className="bg-surface-container-lowest p-space-md space-y-space-xs">
                <span className="font-label-uppercase text-label-uppercase tracking-widest text-secondary block">FIT & DETAILS</span>
                <p className="font-body-md text-body-md text-on-surface pt-space-xs">{displayProduct.construction.main}</p>
                <p className="font-body-sm text-body-sm text-secondary pt-space-xs">{displayProduct.construction.secondary}</p>
              </div>
              <div className="bg-surface-container-lowest p-space-md space-y-space-xs">
                <div className="flex items-center gap-space-xs text-on-surface">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span className="font-label-uppercase text-label-uppercase tracking-widest">DELIVERY & PACKAGING</span>
                </div>
                <p className="font-body-sm text-body-sm text-secondary pt-space-xs leading-relaxed">
                  Enclosed in an archival acid-free linen storage box with custom brass garment pins. Delivered via climate-monitored White Glove transit within 48 hours worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ensemble section common across products */}
      <section className="w-full bg-surface-container-high py-space-xl px-margin lg:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-space-lg gap-space-md">
          <div className="space-y-space-xs">
            <span className="font-label-uppercase text-label-uppercase tracking-widest text-secondary block">STYLE IT WITH</span>
            <h2 className="font-headline-sm text-headline-sm text-on-surface">Complete the Look</h2>
          </div>
          <span className="font-editorial-italic text-editorial-italic italic text-secondary">Our stylists' recommendations</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter lg:gap-gutter-desktop">
          <div className="bg-surface-container-lowest p-space-md flex flex-col justify-between group cursor-pointer">
            <div className="relative aspect-[4/5] bg-surface-container overflow-hidden mb-space-md">
              <img alt="Fluid Wool Trousers" className="w-full h-full object-cover object-bottom transition-transform duration-700 ease-out group-hover:scale-105" src="/images/Fluid_Wool_Trousers__612285.png" />
              <div className="absolute top-3 left-3 bg-surface/90 px-space-xs py-space-xs">
                <span className="font-label-uppercase text-[10px] tracking-wider text-on-surface">SHOWN IN LOOK</span>
              </div>
            </div>
            <div className="space-y-space-xs">
              <div className="flex justify-between items-baseline">
                <h3 className="font-body-md text-body-md text-on-surface">Fluid Pleated Wool Trouser</h3>
                <span className="font-label-price text-label-price text-secondary">$680</span>
              </div>
              <span className="font-body-sm text-body-sm text-secondary block">Deep Burgundy Wool Twill</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-md flex flex-col justify-between group cursor-pointer">
            <div className="relative aspect-[4/5] bg-surface-container overflow-hidden mb-space-md">
              <img alt="Tortoise Optical" className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105" src="/images/Tortoise_Optical_Ace_122462.png" />
              <div className="absolute top-3 left-3 bg-surface/90 px-space-xs py-space-xs">
                <span className="font-label-uppercase text-[10px] tracking-wider text-on-surface">ACCOMPANIMENT</span>
              </div>
            </div>
            <div className="space-y-space-xs">
              <div className="flex justify-between items-baseline">
                <h3 className="font-body-md text-body-md text-on-surface">Monolithic Acetate Frames</h3>
                <span className="font-label-price text-label-price text-secondary">$390</span>
              </div>
              <span className="font-body-sm text-body-sm text-secondary block">Espresso Polish / Dark Grey Lens</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-md flex flex-col justify-between group cursor-pointer">
            <div className="relative aspect-[4/5] bg-surface-container overflow-hidden mb-space-md">
              <img alt="Overcoat" className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" src="/images/Archival_Tailored_Ov_498441.png" />
              <div className="absolute top-3 left-3 bg-surface/90 px-space-xs py-space-xs">
                <span className="font-label-uppercase text-[10px] tracking-wider text-on-surface">OUTERWEAR</span>
              </div>
            </div>
            <div className="space-y-space-xs">
              <div className="flex justify-between items-baseline">
                <h3 className="font-body-md text-body-md text-on-surface">Structured Cocoon Cashmere Coat</h3>
                <span className="font-label-price text-label-price text-secondary">$1,850</span>
              </div>
              <span className="font-body-sm text-body-sm text-secondary block">Double-Faced Loro Piana Wool</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
