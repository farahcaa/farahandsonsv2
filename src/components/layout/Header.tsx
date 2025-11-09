import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { FarahandsonsPic } from "@/assets";
import { navigation } from "@/constants";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const { pathname } = useLocation();
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    if (open) {
      document.addEventListener("keydown", onKey);
      document.documentElement.style.overflow = "hidden";
      closeBtnRef.current?.focus();
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const linkBase = "relative transition-colors font-serif text-lg";
  const linkActive =
    "text-DarkBlue font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-Orange after:rounded";
  const linkIdle = "text-Black hover:text-DarkBlue";

  const sheet = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };
  const list = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
  };

  return (
    <header className="relative w-full">
      <div
        className={`sticky top-0 left-0 w-full z-50 bg-White/85 backdrop-blur-md ${
          elevated ? "shadow-md" : "shadow-sm"
        } transition-shadow`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3">
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Farah & Sons, Home"
          >
            <img
              src={FarahandsonsPic}
              alt="Farah & Sons"
              className="w-32 md:w-40 h-auto object-contain"
              draggable={false}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => {
              const active = pathname === item.url;
              return (
                <Link
                  key={item.id}
                  to={item.url}
                  className={`${linkBase} ${active ? linkActive : linkIdle}`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggle}
            className="md:hidden text-Black hover:text-DarkBlue transition"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Fullscreen solid-white mobile menu (no translucent backdrop) */}
        <AnimatePresence>
          {open && (
            <motion.aside
              id="mobile-menu"
              className="fixed inset-0 z-[60] top-0 h-[100vh] bg-White flex flex-col justify-between shadow-lg"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sheet}
              transition={{ duration: 0.25 }}
              role="dialog"
              aria-modal="true"
            >
              {/* Menu header */}
              <div className="flex justify-between items-center px-6 pt-5 border-b border-Black/10 bg-White">
                <h2 className="text-2xl font-serif font-semibold text-DarkBlue">
                  Menu
                </h2>
                <button
                  ref={closeBtnRef}
                  onClick={close}
                  className="text-Black hover:text-DarkBlue transition"
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Links */}
              <motion.nav
                className="flex flex-col items-center justify-center flex-1 space-y-8 font-serif text-2xl bg-White"
                initial="hidden"
                animate="visible"
                variants={list}
              >
                {navigation.map((item) => {
                  const active = pathname === item.url;
                  return (
                    <motion.div key={item.id} variants={item}>
                      <Link
                        to={item.url}
                        onClick={close}
                        className={`block px-4 py-2 rounded-lg ${
                          active
                            ? "text-DarkBlue font-semibold bg-Orange/10"
                            : "text-Black hover:text-DarkBlue hover:bg-Black/5"
                        } transition-colors`}
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>

              {/* Footer actions */}
              <div className="px-6 pb-8 border-t border-Black/10 bg-White">
                <div className="flex flex-col gap-3">
                  <Link
                    to="/quote"
                    onClick={close}
                    className="inline-flex items-center justify-center rounded-xl bg-DarkBlue text-White px-5 py-3 font-medium hover:bg-Blue transition"
                  >
                    Request a Quote
                  </Link>
                  <Link
                    to="/contact"
                    onClick={close}
                    className="inline-flex items-center justify-center rounded-xl border border-Black/20 px-5 py-3 font-medium text-Black hover:bg-Black/5 transition"
                  >
                    Contact Us
                  </Link>
                </div>
                <p className="mt-6 text-center text-sm text-Black/60">
                  © {new Date().getFullYear()} Farah & Sons
                </p>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
