import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useContent } from "@/hooks/useContent";

export const Header = () => {
  const { logo, brandName, tagline } = useContent("header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/our-team", label: "Our Management Team" }, // Updated label
    { to: "/employees-corner", label: "Employee's Corner" },
    { to: "/careers", label: "Careers" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <Link to="/" className="group flex items-center" aria-label="Home">
            <img
              alt="Shipsoft Logo"
              className="h-14 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              src="/Shipsoft-CpY2bPIt.webp" // Corrected logo path
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`font-medium transition-colors duration-300 relative text-gray-800 hover:text-primary
                  after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 
                  after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 
                  hover:after:origin-bottom-left after:bg-primary ${
                    location.pathname === item.to ? "text-primary after:scale-x-100 after:bg-primary" : ""
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="ml-2 text-sm sm:text-base bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl text-white py-0 px-4">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </nav>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              className="ml-2 p-2 hover:bg-gray-100/10 rounded-lg transition-colors text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`text-base text-gray-800 hover:text-primary font-medium py-2 transition-colors duration-300 ${
                  location.pathname === item.to ? "text-primary" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="w-full text-base bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl text-white">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
