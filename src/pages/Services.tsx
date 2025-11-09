import React, { useEffect } from "react";
import { ServiceExpert, whyus } from "../constants";
import { Box, redbox, Levee, Ls } from "../assets";
// If you have lucide-react installed already, uncomment the import below and the icon in WhyUs.
// import { CheckCircle2 } from "lucide-react";

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Intersection fade-in
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("srv-visible");
        });
      },
      { threshold: 0.12 }
    );

    const els = document.querySelectorAll(".srv-fade");
    els.forEach((el) => io.observe(el));

    return () => {
      els.forEach((el) => io.unobserve(el));
      io.disconnect();
    };
  }, []);

  return (
    <>
      <StyleBlock />

      {/* HERO */}
      <section className="w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-DarkBlue to-blue-950 opacity-90" />
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="srv-fade font-serif font-semibold text-center text-4xl md:text-6xl 2xl:text-7xl text-white">
            Services at Farah &amp; Sons, Inc.
          </h1>
          <p className="srv-fade text-stone-200 text-center max-w-3xl mx-auto mt-6 md:mt-8 text-lg md:text-2xl leading-relaxed">
            We deliver reliable, high-quality civil and infrastructure
            solutions—with the craftsmanship, safety, and schedule discipline
            your project deserves. Explore our core capabilities and why teams
            choose to work with us.
          </p>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <header className="srv-fade flex flex-col items-center">
            <span className="text-blue-900 text-sm tracking-wider uppercase font-medium">
              What we do
            </span>
            <h2 className="font-serif font-semibold text-3xl md:text-5xl mt-2 text-center">
              Our Expertise
            </h2>
            <div className="h-1 w-20 bg-blue-900 rounded-full mt-4" />
          </header>

          {/* Grid of expertise items */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ServiceExpert.map((item) => (
              <article
                key={item.id}
                className="srv-fade rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow p-6 bg-white"
              >
                <h3 className="font-serif text-xl md:text-2xl font-semibold mb-3">
                  {item.header}
                </h3>
                <p className="text-stone-700 leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>

          {/* Collage */}
          <div className="srv-fade mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden">
              <img
                src={redbox}
                alt="Project collage 1"
                className="w-full h-64 md:h-72 2xl:h-80 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src={Box}
                alt="Project collage 2"
                className="w-full h-64 md:h-72 2xl:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="w-full bg-DarkBlue text-white">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <header className="srv-fade flex flex-col items-center">
            <span className="text-blue-200 text-sm tracking-wider uppercase font-medium">
              What sets us apart
            </span>
            <h2 className="font-serif font-semibold text-3xl md:text-5xl mt-2 text-center">
              Why Us?
            </h2>
            <div className="h-1 w-20 bg-blue-200 rounded-full mt-4" />
          </header>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* bullets */}
            <div className="srv-fade order-2 lg:order-1">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyus.map((item) => (
                  <li
                    key={item.id}
                    className="rounded-2xl bg-blue-950/30 border border-blue-900 p-6"
                  >
                    <h3 className="font-serif text-xl md:text-2xl font-semibold mb-2">
                      {/* If using lucide, add icon here:
                      <span className="inline-flex items-center gap-2">
                        <CheckCircle2 className="size-5" />
                        {item.header}
                      </span> */}
                      {item.header}
                    </h3>
                    <p className="text-blue-100 leading-relaxed">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* imagery */}
            <div className="srv-fade order-1 lg:order-2 grid grid-cols-1 gap-6">
              <div className="rounded-xl overflow-hidden">
                <img
                  src={Ls}
                  alt="Project field photo 1"
                  className="w-full h-64 md:h-72 2xl:h-80 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img
                  src={Levee}
                  alt="Project field photo 2"
                  className="w-full h-64 md:h-72 2xl:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <div className="srv-fade rounded-2xl bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl md:text-4xl font-semibold">
                Ready to discuss your project?
              </h3>
              <p className="text-blue-100 mt-2 max-w-xl">
                Let’s align timeline, scope, and budget—then bring your vision
                to life with quality and safety at every step.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white text-blue-900 font-medium px-5 py-3 shadow hover:shadow-md transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

/** Inline styles for simple fade-in */
const StyleBlock = () => (
  <style>{`
    .srv-fade {
      opacity: 0;
      transform: translateY(26px);
      transition: opacity 700ms ease-out, transform 700ms ease-out;
    }
    .srv-visible {
      opacity: 1;
      transform: translateY(0);
    }
  `}</style>
);
