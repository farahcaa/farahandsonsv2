import { useState } from "react";
import { Link, useLocation } from "react-router";
import { FarahandsonsPic } from "@/assets";
import { navigation } from "@/constants";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => setOpen(!open);

  return (
    <header className="relative w-full">
      {/* Fixed navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={FarahandsonsPic}
              alt="Farah and Sons"
              className="w-32 md:w-40 object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8 font-serif text-lg">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                className={`transition-colors ${
                  pathname === item.url
                    ? "text-blue-700 font-semibold"
                    : "text-gray-800 hover:text-blue-600"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-800 hover:text-blue-700 transition"
            aria-label="Open menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Drawer Menu */}
        <AnimatePresence>
          {open && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                onClick={toggleMenu}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* Drawer */}
              <motion.div
                className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white shadow-xl z-50 flex flex-col p-6"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-serif font-semibold">Menu</h2>
                  <button onClick={toggleMenu}>
                    <X size={28} />
                  </button>
                </div>

                <nav className="flex flex-col space-y-6 font-serif text-xl">
                  {navigation.map((item) => (
                    <Link
                      key={item.id}
                      to={item.url}
                      onClick={() => setOpen(false)}
                      className={`transition-all ${
                        pathname === item.url
                          ? "text-blue-700 font-semibold"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Farah & Sons
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
