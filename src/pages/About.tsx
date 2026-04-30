"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact-us" },
];

const mediaSupportLinks = [
  { name: "Photo Gallery", href: "/photo-gallery" },
  { name: "Steel Calculator", href: "/construction-steel-calculator" },
  { name: "Media & Events", href: "/media-events" },
  { name: "Find Dealers", href: "/dealers" },
  { name: "Blogs", href: "/blogs" },
  { name: "Certifications", href: "/certifications" },
  { name: "Product Brochure", href: "/product-brochure" },
  { name: "Product Other Enquiry", href: "/product-enquiry" },
  { name: "Corporate Social Responsibility", href: "/csr" },
  { name: "Trust On Site", href: "/trust-on-site" },
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

  const navItem =
    "relative text-sm font-semibold uppercase tracking-wide text-black hover:text-red-600 transition whitespace-nowrap";

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Background */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b"
            : "bg-yellow-400"
        }`}
      />

      {/* MAIN CONTAINER */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/logo4.png"
            alt="Kaaveri"
            width={180}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* NAV CENTER */}
        <nav className="hidden lg:flex items-center justify-center flex-1 gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`${navItem} group`}>
              {link.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {/* MEDIA DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`${navItem} flex items-center gap-1`}
            >
              Media & Support
              <span className="text-xs">▾</span>
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[500px] bg-white rounded-xl shadow-xl border p-4 z-50"
                >
                  <div className="grid grid-cols-2 gap-2">
                    {mediaSupportLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="px-3 py-2 rounded-md text-sm hover:bg-yellow-50 hover:text-red-600 transition"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/careers" className={`${navItem} group`}>
            Careers
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        {/* CTA RIGHT */}
        <div className="hidden lg:flex flex-shrink-0">
          <Link
            href="/product-enquiry"
            className="bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-red-700 transition"
          >
            Request Quote
          </Link>
        </div>

        {/* MOBILE BUTTON */}
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-6 text-lg font-semibold z-40"
          >
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.name}
              </Link>
            ))}

            <div className="text-center">
              <div className="font-bold mb-2">Media & Support</div>
              {mediaSupportLinks.map((item) => (
                <Link key={item.href} href={item.href} className="block py-1">
                  {item.name}
                </Link>
              ))}
            </div>

            <Link href="/careers">Careers</Link>

            <Link
              href="/product-enquiry"
              className="bg-red-600 text-white px-6 py-3 rounded-full"
            >
              Request Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
