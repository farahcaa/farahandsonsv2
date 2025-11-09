import React from "react";
import { navigation, socials } from "@/constants";
import { Link } from "react-router";
import Linesvg from "@/assets/Linesvg";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-500 text-white py-14">
      {/* Navigation Links */}
      <div className="flex flex-col items-center justify-center gap-4">
        <nav className="flex flex-wrap justify-center gap-6 font-serif text-lg">
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              className="hover:text-blue-200 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Divider Line */}
        <div className="w-full flex justify-center py-2">
          <Linesvg />
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 py-2">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={item.src} alt={item.src} className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm text-white mt-6 px-8">
        © {new Date().getFullYear()} Farah & Sons Inc. | Certified MBE/DBE |
        Developed by Farah & Sons Inc.
      </p>
    </footer>
  );
};

export default Footer;
