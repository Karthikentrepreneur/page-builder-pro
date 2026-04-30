import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Background */}
      <div
        className={`absolute inset-0 transition ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b"
            : "bg-yellow-400"
        }`}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo4.png"
            alt="Kaaveri"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* NAV */}
        <nav className="hidden lg:flex items-center justify-center flex-1 gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-semibold uppercase tracking-wide hover:text-red-600 transition"
            >
              {link.name}
            </Link>
          ))}

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-sm font-semibold uppercase"
            >
              Media & Support ▾
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-3 bg-white shadow-lg rounded-lg p-4 w-[300px]"
                >
                  <Link to="/photo-gallery" className="block py-1">Photo Gallery</Link>
                  <Link to="/blogs" className="block py-1">Blogs</Link>
                  <Link to="/certifications" className="block py-1">Certifications</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/careers" className="text-sm font-semibold uppercase">
            Careers
          </Link>
        </nav>

        {/* CTA */}
        <Link
          to="/product-enquiry"
          className="hidden lg:block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold"
        >
          Request Quote
        </Link>

        {/* MOBILE */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-6 text-lg font-semibold">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
