import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useContent } from "@/hooks/useContent";

export const Footer = () => {
  const { logo, aboutText, facebookUrl, linkedinUrl, addresses, phone, email, copyrightText } = useContent("footer");

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500/20 to-transparent" />

      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img
                alt="Shipsoft Logo"
                className="h-16 w-auto bg-white p-2 rounded-lg"
                src="/Shipsoft-CpY2bPIt.webp"
              />
            </Link>
            <p className="text-sm text-gray-400">{aboutText}</p>
            <div className="flex space-x-4">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Our Services" },
                { to: "/clients", label: "Clients" },
                { to: "/careers", label: "Careers" },
                { to: "/contact", label: "Contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {addresses.map((address, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span>
                    {address.lines.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < address.lines.length - 1 && <br />}
                      </span>
                    ))}
                    {address.note && <div className="text-xs text-gray-500">{address.note}</div>}
                  </span>
                </li>
              ))}
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span>{phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span>{email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} {copyrightText}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
