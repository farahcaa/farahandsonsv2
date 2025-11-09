import React, { useEffect } from "react";

const Careers: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("pos-visible")
        ),
      { threshold: 0.12 }
    );
    const els = document.querySelectorAll(".pos-fade");
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
      <section className="w-full relative overflow-hidden bg-gradient-to-b from-blue-950 via-DarkBlue to-blue-900">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="pos-fade font-serif font-semibold text-center text-white text-4xl md:text-6xl">
            We’re Actively Hiring
          </h1>
          <p className="pos-fade text-blue-100 text-center max-w-3xl mx-auto mt-6 md:mt-8 text-lg md:text-2xl leading-relaxed">
            Join Farah &amp; Sons, Inc. a team dedicated to delivering safe,
            high-quality civil and infrastructure projects on schedule.
          </p>
          <div className="pos-fade flex justify-center gap-3 mt-8">
            <a
              href="mailto:jfarah@farahandsons.com?subject=Application%20-%20Construction%20Inspector"
              className="inline-flex items-center justify-center rounded-xl bg-white text-blue-900 font-medium px-5 py-3 shadow hover:shadow-md transition"
            >
              Email Your Résumé
            </a>
            <a
              href="#open-roles"
              className="inline-flex items-center justify-center rounded-xl bg-blue-800 text-white font-medium px-5 py-3 border border-blue-300/30 hover:bg-blue-700 transition"
            >
              View Open Roles
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <header className="pos-fade text-center">
            <span className="text-blue-900/80 text-sm tracking-wider uppercase font-medium">
              Who we are
            </span>
            <h2 className="font-serif font-semibold text-3xl md:text-5xl mt-2">
              Craftsmanship. Safety. Integrity.
            </h2>
            <div className="h-1 w-20 bg-blue-900 rounded-full mx-auto mt-4" />
          </header>
          <p className="pos-fade max-w-4xl mx-auto mt-6 text-stone-700 text-lg leading-relaxed">
            Farah &amp; Sons, Inc. is a civil and infrastructure contractor
            known for disciplined execution, quality workmanship, and strong
            partnerships. From water/wastewater to heavy civil and site
            improvements, we align scope, safety, budget, and schedule to
            deliver dependable results.
          </p>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section id="open-roles" className="w-full bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <header className="pos-fade text-center">
            <span className="text-blue-900/80 text-sm tracking-wider uppercase font-medium">
              Open roles
            </span>
            <h2 className="font-serif font-semibold text-3xl md:text-5xl mt-2">
              Join Our Field &amp; Office Teams
            </h2>
            <div className="h-1 w-20 bg-blue-900 rounded-full mx-auto mt-4" />
          </header>

          {/* Construction Inspector */}
          <article className="pos-fade mt-10 rounded-2xl bg-white border border-stone-200 shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold">
                  Construction Inspector
                </h3>
                <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-900 text-sm font-medium px-3 py-1">
                  Full-time • Field-based
                </span>
              </div>

              <p className="text-stone-700 mt-4 leading-relaxed">
                We’re seeking a detail-driven Construction Inspector to support
                municipal and infrastructure projects. You’ll observe daily
                activities for compliance with plans, specs, and safety
                standards; document progress; and serve as a professional,
                solutions-oriented liaison between the contractor, engineer, and
                owner.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl font-semibold">
                    Responsibilities
                  </h4>
                  <ul className="mt-3 space-y-2 list-disc list-inside text-stone-700">
                    <li>
                      Perform daily field observations and verify compliance
                      with plans/specs.
                    </li>
                    <li>
                      Document quantities, materials, tests, and work activities
                      in daily reports.
                    </li>
                    <li>
                      Track progress vs. schedule; communicate risks and field
                      issues promptly.
                    </li>
                    <li>
                      Coordinate with contractors, engineers, and owners to
                      resolve conflicts.
                    </li>
                    <li>
                      Verify safety practices and traffic control meet project
                      requirements.
                    </li>
                    <li>
                      Witness installations, tests, and start-up/commissioning
                      as needed.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-serif text-xl font-semibold">
                    Qualifications
                  </h4>
                  <ul className="mt-3 space-y-2 list-disc list-inside text-stone-700">
                    <li>
                      2–5+ years in construction inspection or field engineering
                      (municipal/civil preferred).
                    </li>
                    <li>
                      Strong reading of drawings/specs; familiarity with
                      ASTM/AASHTO/ACI a plus.
                    </li>
                    <li>
                      Proficient with daily reports, photos, and quantity
                      tracking (Excel or field apps).
                    </li>
                    <li>
                      OSHA-10/30, NICET, INDOT/ODOT certs, or equivalent are
                      nice to have.
                    </li>
                    <li>
                      Clear, professional communication and a proactive,
                      problem-solving mindset.
                    </li>
                    <li>
                      Valid driver’s license; ability to work outdoors and
                      travel between sites.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-serif text-xl font-semibold">
                  What You’ll Gain
                </h4>
                <ul className="mt-3 space-y-2 list-disc list-inside text-stone-700">
                  <li>
                    Impactful work on public infrastructure and
                    community-serving projects.
                  </li>
                  <li>
                    Mentorship from seasoned engineers and project managers.
                  </li>
                  <li>
                    Competitive pay with growth opportunities as we expand.
                  </li>
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:jfarah@farahandsons.com?subject=Application%20-%20Construction%20Inspector"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-900 text-white px-5 py-3 font-medium shadow hover:shadow-md transition"
                >
                  Apply via Email
                </a>
                <a
                  href="mailto:jfarah@farahandsons.com?subject=General%20Application&body=Attach%20your%20r%C3%A9sum%C3%A9%20and%20briefly%20describe%20your%20experience.%0D%0ARoles%20of%20interest%3A%20Construction%20Inspector%2C%20Field%20Engineer%2C%20Project%20Coordinator%2C%20Skilled%20Trades."
                  className="inline-flex items-center justify-center rounded-xl bg-white text-blue-900 px-5 py-3 font-medium border border-blue-200 hover:bg-blue-50 transition"
                >
                  General Application
                </a>
              </div>
            </div>
          </article>

          {/* Optional: Additional “Always Hiring” card */}
          <article className="pos-fade mt-6 rounded-2xl bg-white border border-stone-200 shadow-sm p-6 md:p-8">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold">
              Always Hiring: Field Engineer / Project Coordinator
            </h3>
            <p className="text-stone-700 mt-3 leading-relaxed">
              We’re continuously meeting strong candidates for field engineering
              and project coordination roles. If you’re organized, tech-savvy,
              and passionate about infrastructure, we’d love to hear from you.
            </p>
            <div className="mt-5">
              <a
                href="mailto:jfarah@farahandsons.com?subject=General%20Application"
                className="inline-flex items-center justify-center rounded-xl bg-blue-900 text-white px-5 py-3 font-medium shadow hover:shadow-md transition"
              >
                Send Your Résumé
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* HOW TO APPLY */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <header className="pos-fade text-center">
            <span className="text-blue-900/80 text-sm tracking-wider uppercase font-medium">
              How to apply
            </span>
            <h2 className="font-serif font-semibold text-3xl md:text-5xl mt-2">
              Email Your Résumé
            </h2>
            <div className="h-1 w-20 bg-blue-900 rounded-full mx-auto mt-4" />
          </header>

          <div className="pos-fade max-w-3xl mx-auto mt-6 text-stone-700 text-lg leading-relaxed">
            <p>
              Email your résumé (PDF preferred) and a brief note about your
              experience and availability to{" "}
              <a
                href="mailto:jfarah@farahandsons.com"
                className="text-blue-900 underline underline-offset-4"
              >
                jfarah@farahandsons.com
              </a>
              . Include the role in the subject line (e.g., “Construction
              Inspector”).
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Links to recent projects or portfolio (if applicable)</li>
              <li>
                Certifications and training (OSHA, NICET, INDOT/ODOT, etc.)
              </li>
              <li>Preferred start date and location/commute details</li>
            </ul>
          </div>

          <div className="pos-fade flex justify-center mt-8">
            <a
              href="mailto:jfarah@farahandsons.com?subject=Application%20-%20Construction%20Inspector"
              className="inline-flex items-center justify-center rounded-xl bg-blue-900 text-white px-5 py-3 font-medium shadow hover:shadow-md transition"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;

/** Inline styles for subtle fade-in */
const StyleBlock = () => (
  <style>{`
    .pos-fade {
      opacity: 0;
      transform: translateY(26px);
      transition: opacity 700ms ease-out, transform 700ms ease-out;
    }
    .pos-visible {
      opacity: 1;
      transform: translateY(0);
    }
  `}</style>
);
