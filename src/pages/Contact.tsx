import { sendEmail } from "@/lib/email";
import React, { useEffect, useState } from "react";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "", // spam trap
  });
  const [loading, setLoading] = useState(false);
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    if (form.honeypot) return;

    setLoading(true);

    const data = await sendEmail({ ...form });
    if (data.status == "ok") {
      alert("Success, We will get back to you as soon as possible");
    } else {
      alert(
        "Error Failed to send, please send an email to jfarah@farahandsons.com"
      );
    }
    setForm({
      name: "",
      email: "",
      message: "",
      honeypot: "",
    });
    setLoading(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("ct-visible")
        ),
      { threshold: 0.15 }
    );
    const els = document.querySelectorAll(".ct-fade");
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
          <h1 className="ct-fade font-serif font-semibold text-center text-white text-4xl md:text-6xl">
            Contact Us
          </h1>
          <p className="ct-fade text-blue-100 text-center max-w-3xl mx-auto mt-6 md:mt-8 text-lg md:text-2xl leading-relaxed">
            We’d love to hear from you. Whether you’re planning a project,
            seeking a partnership, or exploring career opportunities — let’s
            start the conversation.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div className="ct-fade">
            <h2 className="font-serif text-2xl font-semibold mb-3 text-blue-900">
              Headquarters
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Farah &amp; Sons, Inc.
              <br />
              5333 Commerce Square Dr
              <br />
              Indianapolis, IN 46237
            </p>
          </div>
          <div className="ct-fade">
            <h2 className="font-serif text-2xl font-semibold mb-3 text-blue-900">
              Email
            </h2>
            <p className="text-stone-700 leading-relaxed">
              General Inquiries:
              <br />
              <a
                href="mailto:info@farahandsons.com"
                className="text-blue-900 underline underline-offset-4"
              >
                jfarah@farahandsons.com
              </a>
            </p>
          </div>
          <div className="ct-fade">
            <h2 className="font-serif text-2xl font-semibold mb-3 text-blue-900">
              Phone
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Office:{" "}
              <a href="tel:+13175551234" className="text-blue-900 font-medium">
                317-555-1234
              </a>
              <br />
              Hours: Mon–Fri, 8 AM – 5 PM
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="w-full bg-stone-50">
        <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
          <header className="ct-fade text-center mb-10">
            <span className="text-blue-900/80 text-sm tracking-wider uppercase font-medium">
              Send us a message
            </span>
            <h2 className="font-serif font-semibold text-3xl md:text-5xl mt-2">
              Get in Touch
            </h2>
            <div className="h-1 w-20 bg-blue-900 rounded-full mx-auto mt-4" />
          </header>

          <form
            onSubmit={handleSubmit}
            className="ct-fade bg-white rounded-2xl shadow p-6 md:p-8 space-y-5"
          >
            <input
              type="text"
              name="honeypot"
              value={form.honeypot}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Name
              </label>
              <input
                type="text"
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={form.email}
                required
                placeholder="you@example.com"
                className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Message
              </label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us more..."
                rows={5}
                className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 resize-none"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="rounded-xl bg-blue-900 text-white px-6 py-3 font-medium shadow hover:shadow-md transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* MAP / CTA */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <div className="ct-fade rounded-2xl overflow-hidden shadow-lg border border-stone-200">
            <iframe
              title="Farah & Sons Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d967.5625335411247!2d-86.07682256437764!3d39.65377412252167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b4343d1e36dab%3A0x94d31699d58f59e!2s5333%20Commerce%20Square%20Dr%2C%20Indianapolis%2C%20IN%2046237!5e0!3m2!1sen!2sus!4v1762651934054!5m2!1sen!2sus"
              width="100%"
              height="400"
              loading="lazy"
              className="border-0 w-full"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

/** Inline fade-in animation */
const StyleBlock = () => (
  <style>{`
    .ct-fade {
      opacity: 0;
      transform: translateY(26px);
      transition: opacity 700ms ease-out, transform 700ms ease-out;
    }
    .ct-visible {
      opacity: 1;
      transform: translateY(0);
    }
  `}</style>
);
