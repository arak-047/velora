export function generateStaticParams() {
  const slugs = [
    "layered-collar-cotton-top",
    "slim-ribbed-cotton-long-sleeved-top",
    "inverness-fine-gauge-crew-knit",
    "the-dera-lightweight-crew-top",
    "the-denzel-square-neck",
    "the-serata-seamed-tee",
    "the-stormie-ribbed-in-built-tank",
    "the-kelly-square-cut",
    "danel-tank-top",
    "generic-product"
  ];
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
