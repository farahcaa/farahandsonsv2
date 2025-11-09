import React, { useEffect } from "react";
import { BelmontPic, damPic, LastOne } from "../assets";

const Projects: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("prj-visible")
        ),
      { threshold: 0.15 }
    );

    const els = document.querySelectorAll(".prj-fade");
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
          <h1 className="prj-fade font-serif font-semibold text-center text-white text-4xl md:text-6xl 2xl:text-7xl">
            Featured Projects
          </h1>
          <p className="prj-fade text-blue-100 text-center max-w-3xl mx-auto mt-6 md:mt-8 text-lg md:text-2xl leading-relaxed">
            Real work. Real results. A snapshot of complex infrastructure builds
            delivered with safety, quality, and schedule discipline.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-18">
          <div className="space-y-16 md:space-y-24">
            {PROJECTS.map((p, i) => (
              <article
                id={`project-${p.id}`}
                key={p.id}
                className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center`}
              >
                {/* Text */}
                <div
                  className={`prj-fade md:col-span-6 ${
                    i % 2 === 0 ? "order-2 md:order-1" : "order-2"
                  }`}
                >
                  <span className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-blue-900/80 font-medium">
                    Project {String(i + 1).padStart(2, "0")}
                    <span className="h-1 w-8 bg-blue-900 rounded-full" />
                  </span>
                  <h2 className="font-serif font-semibold text-2xl md:text-4xl mt-2">
                    {p.title}
                  </h2>
                  <div className="mt-5 space-y-4 text-stone-700 leading-relaxed">
                    {p.text.map((t, idx) => (
                      <p key={idx}>{t.message}</p>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`prj-fade md:col-span-6 ${
                    i % 2 === 0 ? "order-1 md:order-2" : "order-1"
                  }`}
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-200">
                    <img
                      src={p.picture}
                      alt={p.title}
                      className="w-full h-64 md:h-[22rem] object-cover"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Back to top */}
          <div className="prj-fade flex justify-center mt-16">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center rounded-xl bg-blue-900 text-white px-5 py-3 font-medium shadow hover:shadow-md transition"
            >
              Back to top
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

/** Inline fade-in styles */
const StyleBlock = () => (
  <style>{`
    .prj-fade {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 700ms ease-out, transform 700ms ease-out;
    }
    .prj-visible {
      opacity: 1;
      transform: translateY(0);
    }
  `}</style>
);

const PROJECTS = [
  {
    id: 0,
    title: "Citizens–Belmont, A.W.T. Ferrous Building",
    picture: BelmontPic,
    text: [
      {
        message:
          "The Belmont AWT plant uses ferrous sulfate (pickle liquor) for sludge conditioning, odor, and phosphorus control. Previously stored in the basement, the chemical caused corrosion and limited expansion. The old tanks needed replacement.",
      },
      {
        message:
          "Citizens Energy Group and Wessler Engineering built a new chemical storage and feed facility, designed to handle the corrosive nature of pickle liquor. It features a high-performance coating system, with controls, electrical distribution, and HVAC systems in separate rooms to prevent corrosion. An observation area allows operators to monitor the process without entering the corrosive space. The system is fully integrated into SCADA for monitoring and control.",
      },
      {
        message:
          "The facility allows for easy tank removal via a roof access panel and has increased tank volumes to meet current demand, with room for future expansion. Construction began in 2022, and the facility became operational in spring 2023. This project highlights our expertise in advanced chemical storage solutions.",
      },
    ],
  },
  {
    id: 1,
    title: "Citizens – O.N.S. Wall Ties",
    picture: damPic,
    text: [
      {
        message:
          "The Oxygen Notification System (ONS) facilities at Citizens Energy Group's Belmont and Southport Vance wastewater treatment plants include aeration tanks and secondary clarifiers, operational since the early 1980s. Initially, steel wall ties were installed to stabilize the exterior channel walls under hydrostatic pressure. Recently, Citizens Energy Group undertook a project to replace these steel ties with exterior support structures for easier access and maintenance.",
      },
      {
        message:
          "At the Belmont plant, the aeration channel is supported by 189 W 18 x 106 coated beams, while the clarifier channel is supported by 142 HP 14 x 117 driven piles, averaging 30 feet in depth, with concrete caps spaced 8 feet apart.",
      },
      {
        message:
          "At the Southport plant, the aeration channel is supported by 174 W 18 x 106 coated beams, spaced 5 feet apart. The clarifier channel is supported by 30 HP 14 x 117 driven piles, averaging 40 feet in depth, with concrete caps spaced 8 feet apart. Additional support is provided by knee piles, with 106 HP 14 x 117 driven piles, averaging 30 feet in depth, and concrete caps spaced 8 feet apart.",
      },
      {
        message:
          "Both plants underwent extensive crack and joint repairs, deck access ramp replacements, loading dock modifications, exterior stair replacements, and aeration grading replacement at Southport. The project was completed ahead of schedule and within budget, with less than 2% change orders, no safety incidents, and no damage to adjacent structures.",
      },
    ],
  },
  {
    id: 2,
    title: "Belmont & Southport AWT Effluent Filter Improvement — Phase 1",
    picture: LastOne,
    text: [
      {
        message:
          "The Belmont and Southport Wastewater Treatment Plants each have 12 sand filters used for tertiary treatment. This project represents the first phase of rehabilitating these filters. Several factors influence the constructability of this project. Option No. 2 proposes performing the RIO and 42-inch BFV replacements simultaneously during the winter permit period of 2023/2024, from December 1, 2023, to April 30, 2024.",
      },
      {
        message:
          "The scope of work includes installing two variable frequency drives for the 500 HP Backwash Pumps at both Belmont and Southport. It also involves replacing twelve 20-inch butterfly valves with modulating electric actuators and twenty-four 42-inch butterfly valves with electric actuators at both plants. Additionally, three filter manual backup control panels will be installed at each plant. Belmont will also receive two ship's ladders.",
      },
      {
        message:
          "The project includes pipe fittings and couplings to aid in constructability, junction boxes, conduit and wire for new valve actuators, and miscellaneous integration of new devices into the SCADA. Site restoration is also part of the scope.",
      },
    ],
  },
];
