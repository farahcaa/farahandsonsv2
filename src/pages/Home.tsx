import { Link } from "react-router";

type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
};

const demoProducts: Product[] = [
  {
    id: "1",
    title: "Jaga Classic Tee",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Jaga Oversize Hoodie",
    price: 54.0,
    image:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Jaga Everyday Joggers",
    price: 42.5,
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Jaga Minimal Cap",
    price: 19.0,
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Jaga Campus Crewneck",
    price: 49.0,
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "Jaga Performance Tee",
    price: 29.0,
    image:
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "7",
    title: "Jaga Vintage Tee",
    price: 27.0,
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "8",
    title: "Jaga Trail Windbreaker",
    price: 79.0,
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      {/* Hero */}
      <Hero />

      {/* Product grid */}
      <section aria-label="Products" id="Products">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {demoProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

/* ============ Hero ============ */
/* ============ Hero ============ */
const Hero = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-2xl border bg-black">
      {/* Large Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2000&auto=format&fit=crop)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content pinned bottom-left */}
      <div className="relative z-10 flex h-full w-full items-end">
        <div className="p-6 md:p-10 text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Jaga
          </h1>

          <p className="mt-2 text-white/90 text-sm sm:text-base md:text-lg max-w-sm">
            Minimal looks. Maximum comfort.
          </p>

          <div className="mt-4 flex gap-3">
            <a
              href="/#Products"
              className="inline-flex items-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
            >
              Shop now
            </a>
            <a
              href="/#Products"
              className="inline-flex items-center rounded-full border border-white text-white px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition"
            >
              View collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ ProductCard (customize me) ============ */
export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <article className="group rounded-xl border bg-white text-black overflow-hidden">
      <div className="relative aspect-[3/3] w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      <div className="p-3">
        <h3 className="text-sm font-medium line-clamp-1">{product.title}</h3>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-base font-semibold">
            ${product.price.toFixed(2)}
          </span>

          {/* replace with your cart action later */}
          <button
            type="button"
            className="rounded-full border px-3 py-1 text-xs font-medium hover:bg-black hover:text-white transition"
            onClick={() => console.log("Add to cart:", product.id)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
};
