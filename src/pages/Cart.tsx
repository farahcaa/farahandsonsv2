import * as React from "react";
import { Link, useNavigate } from "react-router";

type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  qty: number;
  note?: string;
};

const CURRENCY = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const demoItems: CartItem[] = [
  {
    id: "tee-1",
    title: "Jaga Classic Tee",
    price: 24.99,
    qty: 2,
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop",
    note: "Black / M",
  },
  {
    id: "hoodie-1",
    title: "Jaga Oversize Hoodie",
    price: 54.0,
    qty: 1,
    image:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=800&auto=format&fit=crop",
    note: "Heather Gray / L",
  },
];

export default function Cart() {
  const [items, setItems] = React.useState<CartItem[]>(demoItems);
  const navigate = useNavigate();

  const updateQty = (id: string, qty: number) => {
    if (qty < 1) return;
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  };

  const removeItem = (id: string) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const clearCart = () => setItems([]);

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = subtotal >= 75 || subtotal === 0 ? 0 : 5.99;
  const tax = +(subtotal * 0.07).toFixed(2);
  const total = +(subtotal + shipping + tax).toFixed(2);

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4">
      <h1 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
        Your cart
      </h1>

      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="md:grid md:grid-cols-12 md:gap-6">
          {/* Items */}
          <div className="md:col-span-8">
            <ul className="space-y-3 md:space-y-4">
              {items.map((item) => (
                <CartRow
                  key={item.id}
                  item={item}
                  onQtyChange={(q) => updateQty(item.id, q)}
                  onRemove={() => removeItem(item.id)}
                />
              ))}
            </ul>

            {/* Continue shopping */}
            <div className="mt-4 md:mt-6">
              <Link to="/" className="text-sm underline hover:opacity-80">
                Continue shopping
              </Link>
            </div>
          </div>

          {/* Summary (sticky on md+) */}
          <aside className="md:col-span-4 md:sticky md:top-20 mt-6 md:mt-0">
            <section
              aria-label="Summary"
              className="rounded-xl border bg-white p-4 md:p-5"
            >
              <div className="space-y-2 text-sm">
                <Row label="Subtotal" value={CURRENCY.format(subtotal)} />
                <Row
                  label={
                    <span>
                      Shipping{" "}
                      <span className="text-gray-500">(free over $75)</span>
                    </span>
                  }
                  value={shipping === 0 ? "Free" : CURRENCY.format(shipping)}
                />
                <Row label="Estimated tax" value={CURRENCY.format(tax)} />
                <div className="border-t my-2" />
                <Row
                  label={<span className="font-medium">Total</span>}
                  value={
                    <span className="font-semibold">
                      {CURRENCY.format(total)}
                    </span>
                  }
                />
              </div>

              <div className="mt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => navigate("/checkout")}
                  className="flex-1 rounded-full bg-black px-4 py-3 text-sm font-medium text-white hover:opacity-90"
                >
                  Proceed to checkout
                </button>
                <button
                  type="button"
                  onClick={clearCart}
                  className="rounded-full border px-4 py-3 text-sm font-medium hover:bg-black hover:text-white transition"
                >
                  Clear
                </button>
              </div>

              <p className="mt-3 text-xs text-gray-500">
                Taxes and shipping are estimates. You’ll confirm details at
                payment.
              </p>
            </section>
          </aside>
        </div>
      )}
      <RecommendedSection />
    </div>
  );
}

/* -------------------- Components -------------------- */

function CartRow({
  item,
  onQtyChange,
  onRemove,
}: {
  item: CartItem;
  onQtyChange: (qty: number) => void;
  onRemove: () => void;
}) {
  return (
    <li className="rounded-xl border bg-white p-3 md:p-4">
      <div className="flex gap-3 md:gap-4">
        {/* Image */}
        <div className="h-20 w-24 md:h-28 md:w-36 overflow-hidden rounded-lg border bg-gray-100 shrink-0">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-sm md:text-base font-medium line-clamp-1">
                {item.title}
              </h3>
              {item.note && (
                <p className="mt-0.5 text-xs md:text-sm text-gray-600">
                  {item.note}
                </p>
              )}
            </div>
            <div className="text-sm md:text-base font-semibold">
              {CURRENCY.format(item.price * item.qty)}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-3 flex items-center justify-between">
            <Quantity value={item.qty} onChange={onQtyChange} />
            <button
              type="button"
              onClick={onRemove}
              className="text-xs md:text-sm underline hover:opacity-80"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

function Quantity({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="inline-flex items-center rounded-full border">
      <button
        type="button"
        className="px-3 py-1.5 md:px-4 md:py-2 text-sm hover:bg-black hover:text-white transition"
        onClick={() => onChange(value - 1)}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <input
        type="number"
        min={1}
        value={value}
        onChange={(e) => onChange(Math.max(1, Number(e.target.value)))}
        className="w-12 md:w-14 border-x px-2 py-1.5 md:py-2 text-center text-sm outline-none"
      />
      <button
        type="button"
        className="px-3 py-1.5 md:px-4 md:py-2 text-sm hover:bg-black hover:text-white transition"
        onClick={() => onChange(value + 1)}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}

function Row({
  label,
  value,
}: {
  label: React.ReactNode;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-700">{label}</span>
      <span>{value}</span>
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="rounded-xl border bg-white p-6 text-center">
      <p className="text-sm text-gray-700">Your cart is empty.</p>
      <Link
        to="/"
        className="mt-3 inline-block rounded-full border px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition"
      >
        Start shopping
      </Link>
    </div>
  );
}
/* -------------------- Recommended Section -------------------- */

function RecommendedSection() {
  const products = [
    {
      id: "rec-1",
      title: "Jaga Vintage Tee",
      price: 27.0,
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: "rec-2",
      title: "Jaga Trail Windbreaker",
      price: 79.0,
      image:
        "https://images.unsplash.com/photo-1520974655509-0c0a7a3b284f?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: "rec-3",
      title: "Jaga Campus Crewneck",
      price: 49.0,
      image:
        "https://images.unsplash.com/photo-1520975922203-b4ea52c5b4f9?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: "rec-4",
      title: "Jaga Everyday Joggers",
      price: 42.5,
      image:
        "https://images.unsplash.com/photo-1605733160314-4f2f06cddde9?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <section className="mt-10 md:mt-14 mb-10">
      <h2 className="text-lg md:text-xl font-semibold mb-4">
        You might also like
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.slice(0, 3).map((p) => (
          <article
            key={p.id}
            className="group rounded-2xl border bg-white text-black overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="p-3 md:p-4">
              <h3 className="text-sm md:text-base font-medium line-clamp-1">
                {p.title}
              </h3>
              <p className="text-sm md:text-base font-semibold mt-1">
                ${p.price.toFixed(2)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
