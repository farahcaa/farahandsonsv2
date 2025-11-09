import React, { useEffect } from "react";

import { JeannePic, KenPic } from "../assets";

const About: React.FC = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Fade-in on intersect
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("about-visible");
        });
      },
      { threshold: 0.15 }
    );

    const els = document.querySelectorAll(".about-fade");
    els.forEach((el) => observer.observe(el));

    return () => {
      els.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <StyleBlock />

      {/* Section 1 — Founder (text left, image right) */}
      <section className="w-full">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Text */}
            <div className="md:w-1/2 w-full font-serif text-center md:text-left">
              <h1 className="about-fade font-semibold threexl:text-8xl lg:text-5xl twoxl:text-7xl xs:text-4xl">
                Founder
              </h1>
              <p className="about-fade threexl:text-5xl lg:text-2xl twoxl:text-4xl xs:text-lg mt-6 leading-relaxed">
                Our company is led by Ken Farah, a civil engineer with a rich
                history of experience. Ken has managed projects in everything
                from Boston&apos;s Big Dig to important infrastructure projects
                in Indianapolis and the surrounding areas.
              </p>
            </div>

            {/* Image */}
            <div className="md:w-1/2 w-full flex justify-center items-center bg-DarkBlue rounded-lg shadow-md">
              <img
                src={KenPic}
                alt="Ken Farah — Founder"
                width={360}
                className="about-fade p-4 md:p-5 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — EVP (image left, text right) */}
      <section className="w-full">
        <div className="max-w-6xl mx-auto px-6 pb-12 md:pb-20">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            {/* Image */}
            <div className="md:w-1/2 w-full flex justify-center items-center bg-DarkBlue rounded-lg shadow-md">
              <img
                src={JeannePic}
                alt="Jeanne — Executive Vice President"
                width={360}
                className="about-fade p-4 md:p-5 object-contain"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2 w-full font-serif text-center md:text-left">
              <h2 className="about-fade font-semibold threexl:text-8xl lg:text-5xl twoxl:text-7xl xs:text-4xl">
                Executive Vice President
              </h2>
              <p className="about-fade threexl:text-5xl lg:text-2xl twoxl:text-4xl xs:text-lg mt-6 leading-relaxed">
                Jeanne, our Executive Vice President, is a distinguished leader
                with a strong educational foundation from the University of
                Dayton. Her strategic vision and dedication are vital to our
                success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

/** Inline styles to make the file self-contained */
const StyleBlock = () => (
  <style>{`
    .about-fade {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 700ms ease-out, transform 700ms ease-out;
    }
    .about-visible {
      opacity: 1;
      transform: translateY(0);
    }
  `}</style>
);
