import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="w-full bg-surface py-20 px-margin md:px-margin-desktop border-b border-secondary-container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
            Contact Us
          </h1>
          <p className="font-editorial-italic text-editorial-italic text-secondary max-w-xl mx-auto">
            Our client advisors are available to assist you with fit inquiries, styling advice, and order support.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="w-full px-margin md:px-margin-desktop py-20 bg-surface-container-low">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Email Support */}
          <div className="flex flex-col space-y-4">
            <span className="material-symbols-outlined text-secondary text-3xl">mail</span>
            <h2 className="font-headline-sm text-headline-sm text-primary">Email Support</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              For general inquiries, order updates, and returns.
            </p>
            <Link href="mailto:clientservices@velora.com" className="font-label-uppercase text-label-uppercase tracking-widest text-primary border-b border-primary self-start hover:text-secondary hover:border-secondary transition-colors pt-2">
              CLIENTSERVICES@VELORA.COM
            </Link>
            <p className="font-body-sm text-[11px] text-secondary pt-2">
              We aim to reply within 24 hours.
            </p>
          </div>

          {/* Phone Support */}
          <div className="flex flex-col space-y-4">
            <span className="material-symbols-outlined text-secondary text-3xl">call</span>
            <h2 className="font-headline-sm text-headline-sm text-primary">Call Us</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Speak directly with a Velora client advisor.
            </p>
            <Link href="tel:+18005550199" className="font-label-uppercase text-label-uppercase tracking-widest text-primary border-b border-primary self-start hover:text-secondary hover:border-secondary transition-colors pt-2">
              +1 800 555 0199
            </Link>
            <p className="font-body-sm text-[11px] text-secondary pt-2">
              Mon–Fri, 9am–6pm EST.
            </p>
          </div>

          {/* Studio Appointments */}
          <div className="flex flex-col space-y-4">
            <span className="material-symbols-outlined text-secondary text-3xl">storefront</span>
            <h2 className="font-headline-sm text-headline-sm text-primary">In-Store Styling</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Book a private appointment at our flagship studio.
            </p>
            <Link href="#" className="font-label-uppercase text-label-uppercase tracking-widest text-primary border-b border-primary self-start hover:text-secondary hover:border-secondary transition-colors pt-2">
              BOOK AN APPOINTMENT
            </Link>
            <p className="font-body-sm text-[11px] text-secondary pt-2">
              142 Mercer Street, New York, NY
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ Link Section */}
      <section className="w-full bg-surface-container-highest py-16 text-center px-margin md:px-margin-desktop">
        <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Looking for immediate answers?</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6">
          Find information about shipping, returns, and product care in our FAQ.
        </p>
        <Link href="#" className="inline-block px-8 py-4 bg-primary text-on-primary font-label-uppercase text-label-uppercase tracking-widest uppercase hover:bg-on-primary-fixed-variant transition-colors">
          READ OUR FAQ
        </Link>
      </section>
    </div>
  );
}
