import { NavLink } from "react-router";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full border-t bg-white text-black">
      <div className="flex flex-col items-center justify-center gap-3 px-4 py-5 text-sm">
        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:opacity-70 transition ${
                isActive ? "font-semibold underline" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/account"
            className={({ isActive }) =>
              `hover:opacity-70 transition ${
                isActive ? "font-semibold underline" : ""
              }`
            }
          >
            Account
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `hover:opacity-70 transition ${
                isActive ? "font-semibold underline" : ""
              }`
            }
          >
            Cart
          </NavLink>

          <NavLink
            to="/checkout"
            className={({ isActive }) =>
              `hover:opacity-70 transition ${
                isActive ? "font-semibold underline" : ""
              }`
            }
          >
            Checkout
          </NavLink>

          <NavLink
            to="/payment"
            className={({ isActive }) =>
              `hover:opacity-70 transition ${
                isActive ? "font-semibold underline" : ""
              }`
            }
          >
            Payment
          </NavLink>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-5 mt-2">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-600 transition"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-600 transition"
          >
            <Twitter size={18} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-600 transition"
          >
            <Facebook size={18} />
          </a>
          <a
            href="mailto:support@campuscribs.org"
            className="hover:text-gray-600 transition"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Small text */}
        <p className="text-xs text-gray-500 mt-2">
          © {new Date().getFullYear()} Jaga. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
