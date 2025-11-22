import React, { useEffect, useRef } from "react";
import { Link } from "react-router";
import { Layer1Pic1, StreamPic } from "../assets";

/**
 * Home — Creative edition
 * - Bold hero with gradient text + floating badges
 * - Angled divider and layered image collage
 * - Staggered reveal-on-scroll (no external libs)
 * - Brand colors: Blue, DarkBlue, Orange, White, Black
 */

function useReveal() {
  const rootRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const root = rootRef.current ?? document.body;
    const targets = root.querySelectorAll<HTMLElement>("[data-reveal]");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.remove(
              "opacity-0",
              "translate-y-6",
              "scale-[.98]"
            );
            e.target.classList.add("opacity-100", "translate-y-0", "scale-100");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return rootRef;
}

const Chip: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className = "",
  children,
}) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full border border-White/20 bg-White/10 px-3 py-1 text-White/90 backdrop-blur ${className}`}
  >
    {children}
  </span>
);

const Home: React.FC = () => {
  const pageRef = useReveal();

  return (
    <main ref={pageRef as any} className="w-full">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* background layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-DarkBlue to-Blue" />
        {/* angled accent */}
        <div className="absolute -left-24 -top-16 h-[32rem] w-[32rem] rotate-12 rounded-3xl bg-White/10 blur-2xl" />
        <div className="absolute -right-32 -bottom-24 h-[28rem] w-[28rem] -rotate-12 rounded-3xl bg-Orange/20 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div
                data-reveal
                style={{ transitionDelay: "50ms" }}
                className="opacity-0 translate-y-6 scale-[.98] transition-all duration-700"
              >
                <Chip>Family-Owned • Since 2004</Chip>
                <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-White">
                  Quality engineering that
                  <span className="block bg-gradient-to-r from-White to-Orange bg-clip-text text-transparent">
                    {" "}
                    stands the test of time
                  </span>
                </h1>
                <p className="mt-4 max-w-xl text-White/80 text-lg">
                  Construction inspection and management with uncompromising
                  standards — delivered by a focused, reliable team.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/Services"
                    className="rounded-xl bg-White text-DarkBlue px-5 py-3 font-medium hover:bg-Orange hover:text-White transition"
                  >
                    Explore Services
                  </Link>
                  <Link
                    to="/contact"
                    className="rounded-xl border border-White/40 px-5 py-3 font-medium text-White hover:bg-White/10 transition"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* floating badges */}
              <div
                className="mt-8 flex flex-wrap gap-3"
                data-reveal
                style={{ transitionDelay: "200ms" }}
              >
                <Chip>MBE/DBE Certified</Chip>
                <Chip>Inspection • Management</Chip>
                <Chip>Digital Reporting</Chip>
              </div>
            </div>

            {/* collage */}
            <div
              className="relative"
              data-reveal
              style={{ transitionDelay: "150ms" }}
            >
              <div className="opacity-100 translate-y-6 scale-[.98] transition-all duration-700">
                <div className="relative mx-auto w-full max-w-xl">
                  <img
                    src={Layer1Pic1}
                    alt="Active construction site"
                    className="w-full rounded-2xl shadow-2xl ring-1 ring-White/10 object-cover"
                  />
                  <img
                    src={StreamPic}
                    alt="Stream & infrastructure work"
                    className="absolute -right-6 -bottom-8 w-2/3 rounded-2xl border-4 border-White/10 shadow-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* angled divider */}
        <div className="h-12 bg-gradient-to-b from-Blue to-transparent -mb-6" />
      </section>

      {/* EXPERTISE CARDS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div
          className="text-center"
          data-reveal
          style={{ transitionDelay: "150ms" }}
        >
          <h2 className="opacity-100 translate-y-6 scale-[.98] transition-all duration-700 font-serif text-3xl sm:text-4xl text-Black">
            Our Expertise
          </h2>
          <p className="mt-3 opacity-100 translate-y-6 scale-[.98] transition-all duration-700 delay-100 text-Black/70">
            Quality & safety across every phase of your project.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Construction Inspection",
              desc: "On‑site verification, materials checks, and daily reporting to keep projects compliant and on schedule.",
            },
            {
              title: "Construction Management",
              desc: "Coordinating teams, timelines, and budgets with transparent communication and documentation.",
            },
            {
              title: "Civil Infrastructure",
              desc: "Roads, sewers, and stream work executed to exacting standards for longevity and resilience.",
            },
          ].map((c, i) => (
            <article
              key={c.title}
              data-reveal
              style={{ transitionDelay: `${150 + i * 100}ms` }}
              className="opacity-0 translate-y-6 scale-[.98] transition-all duration-700 rounded-2xl border border-Black/10 bg-White p-6 shadow-sm hover:shadow-md"
            >
              <h3 className="font-semibold text-Black text-lg">{c.title}</h3>
              <p className="mt-2 text-Black/70">{c.desc}</p>
              <div className="mt-4 h-1 w-16 rounded-full bg-Orange/70" />
            </article>
          ))}
        </div>
      </section>

      {/* MISSION STRIP */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-DarkBlue to-Blue" />
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div
              data-reveal
              style={{ transitionDelay: "50ms" }}
              className="opacity-0 translate-y-6 scale-[.98] transition-all duration-700"
            >
              <h2 className="font-serif text-3xl sm:text-4xl text-White">
                At Farah & Sons, Inc.
              </h2>
              <p className="mt-4 text-White/90">
                The foundation of every great construction project lies in
                rigorous engineering. Our legacy is precision: inspections,
                documentation, and management that protect schedules and
                safeguard quality.
              </p>
              <div className="mt-6 flex gap-3">
                <Chip className="border-White/30 bg-White/5">Safety First</Chip>
                <Chip className="border-White/30 bg-White/5">
                  Transparent Reporting
                </Chip>
              </div>
            </div>

            <div
              className="grid grid-cols-2 gap-4"
              data-reveal
              style={{ transitionDelay: "150ms" }}
            >
              {["Pre‑Pour Checks", "Utilities", "Paving", "Stream Work"].map(
                (t, i) => (
                  <div
                    key={t}
                    className="opacity-100 translate-y-6 scale-[.98] transition-all duration-700 rounded-xl bg-White/10 p-4 text-White shadow-inner"
                    style={{ transitionDelay: `${200 + i * 80}ms` }}
                  >
                    <div className="text-sm uppercase tracking-wide text-White/70">
                      Focus
                    </div>
                    <div className="mt-1 text-lg font-semibold">{t}</div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div
          data-reveal
          className="opacity-0 translate-y-6 scale-[.98] transition-all duration-700 rounded-2xl border border-Black/10 bg-White p-8 sm:p-10 shadow-sm"
        >
          <div className="grid items-center gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-Black">
                Ready to start your project?
              </h3>
              <p className="mt-2 text-Black/70">
                Tell us about your timeline and scope. We’ll respond with a
                clear plan and next steps.
              </p>
            </div>
            <div className="flex sm:justify-end gap-3">
              <Link
                to="/contact"
                className="rounded-xl bg-DarkBlue text-White px-5 py-3 font-medium hover:bg-Blue transition"
              >
                Request a Quote
              </Link>
              <Link
                to="/projects"
                className="rounded-xl border border-Black/10 px-5 py-3 font-medium text-Black hover:bg-Black/5 transition"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
