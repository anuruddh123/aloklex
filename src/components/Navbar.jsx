import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // BODY SCROLL LOCK
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Consult", path: "/consultation" },
    { name: "Case Tracker", path: "/case-tracker" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 bg-black/70 backdrop-blur-xl border-b border-white/10">
        <div className="px-4 md:px-16 py-4 flex justify-between items-center">
          {/* BRAND */}
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-bold text-[#C9A24D]">
              NyaySathi
            </span>
            <span className="text-xs text-gray-400">
              Digital Law Chamber
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm ${
                  location.pathname === link.path
                    ? "text-[#C9A24D]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#C9A24D]" />
                )}
              </Link>
            ))}

            {user ? (
              <button onClick={logout} className="text-red-400 text-sm">
                Logout
              </button>
            ) : (
              <Link to="/login" className="text-sm text-gray-300">
                Login
              </Link>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50"
              onClick={() => setOpen(false)}
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-black z-50 p-6"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-2xl font-bold text-[#C9A24D]">
                  NyaySathi
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white text-3xl"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-6 text-lg">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className="text-gray-300 hover:text-[#C9A24D]"
                  >
                    {link.name}
                  </Link>
                ))}

                {user ? (
                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="text-red-400 text-left"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="text-gray-300"
                  >
                    Login
                  </Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
