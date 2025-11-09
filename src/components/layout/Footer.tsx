import React from "react";
import { navigation, socials } from "@/constants";
import { Link } from "react-router";
import Linesvg from "@/assets/Linesvg";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-950 text-stone-100 py-14 border-t border-blue-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-8">
        {/* Logo / Tagline */}
        <div className="text-center">
          <h2 className="text-2xl font-serif tracking-wide">
            Farah & Sons Inc.
          </h2>
          <p className="text-stone-400 text-sm mt-1">
            Built with craftsmanship and integrity.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 text-stone-200 text-sm md:text-base font-medium">
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              className="hover:text-blue-300 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Decorative Divider */}
        <div className="w-32">
          <Linesvg />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-2">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <img
                src={item.src}
                alt={item.title || "social"}
                className="h-6 w-6 brightness-90 hover:brightness-100"
              />
            </a>
          ))}
        </div>

        {/* Legal */}
        <p className="text-center text-xs text-stone-400 mt-6 leading-relaxed">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Farah & Sons Inc.</span>
          <span className="mx-2 text-stone-600">|</span> Certified MBE/DBE
          <span className="mx-2 text-stone-600">|</span> Developed by Farah &
          Sons
        </p>
      </div>
    </footer>
  );
};

export default Footer;
