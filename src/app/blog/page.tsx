import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="w-full bg-surface py-20 px-margin md:px-margin-desktop border-b border-secondary-container">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
            Design Diary
          </h1>
          <p className="font-editorial-italic text-editorial-italic text-secondary max-w-2xl mx-auto">
            Stories on craftsmanship, material sourcing, and the philosophy behind Velora's collections.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="w-full px-margin md:px-margin-desktop py-16">
        <article className="group cursor-pointer">
          <Link href="#" className="flex flex-col md:flex-row gap-8 items-center bg-surface-container-low hover:bg-surface-container transition-colors p-6">
            <div className="w-full md:w-1/2 aspect-[4/3] bg-surface-container overflow-hidden">
              <img 
                alt="Behind the scenes at the Italian mill" 
                className="w-full h-full object-cover filter grayscale contrast-105 group-hover:scale-105 transition-all duration-700" 
                src="/velora/images/02_Cascading_Cowl_083164.png" 
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <span className="font-label-uppercase text-label-uppercase tracking-widest text-secondary block">
                SPRING / SUMMER 2026
              </span>
              <h2 className="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors">
                The Pursuit of Perfect Tension
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                We travel to Biella, Italy to explore the centuries-old knitting techniques that give our ribbed cotton its signature fit and unparalleled recovery.
              </p>
              <div className="pt-4">
                <span className="font-label-uppercase text-label-uppercase text-primary border-b border-primary pb-1 group-hover:border-secondary transition-colors">
                  READ ARTICLE
                </span>
              </div>
            </div>
          </Link>
        </article>
      </section>

      {/* Article Grid */}
      <section className="w-full px-margin md:px-margin-desktop pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Sourcing Giza Cotton",
              date: "February 12, 2026",
              img: "/velora/images/Slim_Ribbed_Cotton_L_785833.png",
              desc: "Why we source our extra-long staple cotton exclusively from the Nile Delta."
            },
            {
              title: "The Zero-Waste Studio",
              date: "January 28, 2026",
              img: "/velora/images/Layered_Collar_Cotto_620461.png",
              desc: "Our commitment to minimal waste in pattern making and cutting."
            },
            {
              title: "Caring for Cashmere",
              date: "December 15, 2025",
              img: "/velora/images/The_Inverness_Fine_C_082468.jpg",
              desc: "A comprehensive guide to washing and storing your fine knitwear."
            }
          ].map((post, idx) => (
            <article key={idx} className="group flex flex-col space-y-4">
              <Link href="#" className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container">
                <img 
                  alt={post.title} 
                  className="w-full h-full object-cover filter grayscale contrast-105 group-hover:scale-105 transition-all duration-700" 
                  src={post.img} 
                />
              </Link>
              <div className="space-y-2">
                <span className="font-label-uppercase text-[10px] tracking-widest text-secondary block">
                  {post.date}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                  <Link href="#">{post.title}</Link>
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  {post.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
