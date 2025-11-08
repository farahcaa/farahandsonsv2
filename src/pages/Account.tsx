import * as React from "react";
import { Link } from "react-router";

export default function Account() {
  // Default to the Tracking view
  const [active, setActive] = React.useState<"tracking">("tracking");

  return (
    <div className="w-full max-w-screen-md mx-auto px-4">
      {/* Options bar */}
      <nav className="sticky top-14 z-10 bg-white">
        <ul className="flex gap-4 border-b overflow-x-auto no-scrollbar">
          <Tab
            label="Tracking"
            active={active === "tracking"}
            onClick={() => setActive("tracking")}
          />
          {/* Future options (placeholders only) */}
          <Tab label="Orders" disabled />
          <Tab label="Addresses" disabled />
          <Tab label="Settings" disabled />
        </ul>
      </nav>

      {/* Content */}
      <div className="py-6">{active === "tracking" && <TrackingSection />}</div>
    </div>
  );
}

/* ============== Components ============== */

function Tab({
  label,
  active,
  disabled,
  onClick,
}: {
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}) {
  const base =
    "px-2 pb-3 text-sm md:text-base whitespace-nowrap -mb-[1px] border-b-2";
  const state = disabled
    ? "text-gray-400 border-transparent cursor-not-allowed"
    : active
      ? "font-semibold border-black"
      : "text-gray-700 border-transparent hover:border-black/40";
  return (
    <li>
      <button
        className={`${base} ${state}`}
        onClick={disabled ? undefined : onClick}
      >
        {label}
      </button>
    </li>
  );
}

function TrackingSection() {
  const [orderId, setOrderId] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [result, setResult] = React.useState<TrackingResult | null>(null);

  const onTrack = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo lookup — replace with your API call
    const mock = mockLookup(orderId.trim(), email.trim());
    setResult(mock);
  };

  return (
    <section className="rounded-2xl border bg-white p-4 md:p-6">
      <h1 className="text-lg md:text-xl font-semibold mb-4">
        Track your order
      </h1>

      <form
        onSubmit={onTrack}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
      >
        <input
          type="text"
          required
          placeholder="Order number (e.g., JAGA-12345)"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="rounded-lg border px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black"
        />
        <input
          type="email"
          required
          placeholder="Email used at checkout"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black"
        />
        <button
          type="submit"
          className="rounded-lg bg-black text-white px-4 py-2 text-sm font-medium hover:opacity-90"
        >
          Track
        </button>
      </form>

      {/* Result */}
      {result && (
        <div className="mt-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-sm">
              <div className="font-medium">Order {result.orderId}</div>
              <div className="text-gray-600">Placed {result.placedAt}</div>
            </div>
            <div className="text-sm">
              <span className="mr-2 text-gray-600">Status:</span>
              <span className="font-semibold">{result.currentStage.label}</span>
            </div>
          </div>

          {/* Progress */}
          <Progress stages={result.stages} currentIndex={result.currentIndex} />

          {/* Shipment summary */}
          <div className="rounded-xl border p-4 text-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Carrier</div>
                <div className="text-gray-600">{result.carrier}</div>
              </div>
              <div className="text-right">
                <div className="font-medium">Tracking #</div>
                <a
                  className="text-gray-700 underline"
                  href={result.trackingUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {result.trackingNumber}
                </a>
              </div>
            </div>
          </div>

          <div className="text-xs text-gray-500">
            Having trouble?{" "}
            <Link to="/cart" className="underline">
              return to cart
            </Link>{" "}
            or{" "}
            <a href="mailto:support@jaga.shop" className="underline">
              contact support
            </a>
            .
          </div>
        </div>
      )}
    </section>
  );
}

/* ------------ Progress display ------------ */

function Progress({
  stages,
  currentIndex,
}: {
  stages: Array<{ key: string; label: string }>;
  currentIndex: number;
}) {
  return (
    <div className="flex flex-col gap-3">
      {/* Bar */}
      <div className="relative h-2 w-full rounded-full bg-gray-200">
        <div
          className="absolute left-0 top-0 h-2 rounded-full bg-black transition-all"
          style={{ width: `${(currentIndex / (stages.length - 1)) * 100}%` }}
        />
      </div>
      {/* Labels */}
      <div className="flex justify-between text-[11px] md:text-xs text-gray-700">
        {stages.map((s, i) => (
          <span key={s.key} className={i <= currentIndex ? "font-medium" : ""}>
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------ Mock tracking ------------- */

type TrackingResult = {
  orderId: string;
  placedAt: string;
  carrier: string;
  trackingNumber: string;
  trackingUrl: string;
  stages: Array<{ key: string; label: string }>;
  currentIndex: number;
  currentStage: { key: string; label: string };
};

function mockLookup(orderId: string, email: string): TrackingResult {
  // Replace with a real fetch to your orders/shipments API later
  const stages = [
    { key: "placed", label: "Placed" },
    { key: "packed", label: "Packed" },
    { key: "shipped", label: "Shipped" },
    { key: "out", label: "Out for delivery" },
    { key: "delivered", label: "Delivered" },
  ];

  // simple deterministic “progress” just for demo
  const idx = Math.min(
    Math.max(orderId.length % stages.length, 1),
    stages.length - 1
  );
  return {
    orderId: orderId || "JAGA-12345",
    placedAt: "Oct 15, 2025",
    carrier: "UPS",
    trackingNumber: "1Z999AA10123456784",
    trackingUrl:
      "https://www.ups.com/track?loc=en_US&tracknum=1Z999AA10123456784",
    stages,
    currentIndex: idx,
    currentStage: stages[idx],
  };
}

/* Hide scrollbar utility (optional) */
declare global {
  interface Document {}
}
