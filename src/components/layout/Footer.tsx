import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low">
      <div className="w-full px-margin md:px-margin-desktop pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter-desktop">
          <div className="lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-gutter-desktop">
            <div className="space-y-space-md">
              <span className="font-label-uppercase text-label-uppercase uppercase tracking-widest text-on-surface-variant block">
                Newsletter Archival
              </span>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
                Curated announcements, capsule previews, and private salon appointments delivered sparingly.
              </p>
            </div>
            <form className="mt-space-lg space-y-space-sm max-w-md">
              <div className="flex items-center bg-transparent border-b border-outline-variant focus-within:border-primary transition-colors py-2">
                <input className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none" placeholder="Enter your email address" type="email" />
                <button className="font-label-uppercase text-label-uppercase uppercase tracking-widest text-primary hover:text-secondary transition-colors pl-space-sm" type="submit">
                  Subscribe
                </button>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                By subscribing, you agree to our Privacy Protocols and Discretionary Terms.
              </p>
            </form>
          </div>
          <div className="lg:col-span-2 space-y-space-md mt-10 md:mt-0">
            <span className="font-label-uppercase text-label-uppercase uppercase tracking-widest text-on-surface-variant block">
              Client Care
            </span>
            <ul className="space-y-space-sm">
              <li className="leading-none"><Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Client Relations</Link></li>
              <li className="leading-none"><Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Shipping & Express Courier</Link></li>
              <li className="leading-none"><Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Archival Garment Care</Link></li>
              <li className="leading-none"><Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Returns & Exchanges</Link></li>
              <li className="leading-none"><Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Complimentary Alterations</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-2 space-y-space-md mt-10 lg:mt-0">
            <span className="font-label-uppercase text-label-uppercase uppercase tracking-widest text-on-surface-variant block">
              The Maison
            </span>
            <ul className="space-y-space-sm">
              <li className="leading-none"><Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Private Salon Appointments</Link></li>
              <li className="leading-none"><Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Paris & New York Salons</Link></li>
              <li className="leading-none"><Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Silk & Cashmere Sourcing</Link></li>
              <li className="leading-none"><Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Ethos of Restraint</Link></li>
              <li className="leading-none"><Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Careers & Apprenticeship</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-3 space-y-space-md mt-10 lg:mt-0">
            <span className="font-label-uppercase text-label-uppercase uppercase tracking-widest text-on-surface-variant block">
              Sartorial Ethos
            </span>
            <p className="font-editorial-italic text-editorial-italic text-on-surface leading-snug">
              "Drapery, weight, and timeless silence. An intentional wardrobe crafted for continuous presence."
            </p>
            <div className="pt-space-sm space-y-1">
              <span className="font-body-sm text-body-sm text-on-surface-variant block">
                Atelier Salons: 14 Rue de Beaujolais, Paris
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant block">
                By Appointment Only
              </span>
            </div>
          </div>
        </div>
        <div className="mt-space-xl pt-space-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            © 2026 VELORA S.A. All rights reserved.
          </span>
          <div className="flex flex-wrap items-center gap-space-md">
            <Link href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">Privacy Policy</Link>
            <Link href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">Terms of Sale</Link>
            <Link href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">Ethical Production</Link>
            <Link href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">Cookies Preference</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
