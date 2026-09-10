import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, ArrowUpRight, Shield } from "lucide-react";
import { useContent } from "@/hooks/useContent";

export const IndiaFooter: React.FC = () => {
  const {
    logo = "/62fb79faa960d.png",
    aboutText = "Shipsoft is a Neutral KPO Service Provider offering expert services in logistics operations.",
    facebookUrl = "https://www.facebook.com/people/Orange-Office-Technologies-Pvt-Ltd/61566454888473/",
    linkedinUrl = "https://www.linkedin.com/company/orange-office-technologies-pvt-ltd/",
    addresses = [
      { lines: ["KAIZEN, 2nd & 3rd Floor, New No. G3 (Old No. G1), G Block, Plot No. 565Q,", "18th Street, Chinthamani, Anna Nagar East, Chennai 600102."], note: "Headquarters" },
      { lines: ["No 34/656, Neelima, Toll Jn, Edappally, Ernakulam, Kochi, Kerala 682024."], note: "Middle East Service Centre (OPP Metro Pillar 394)" },
    ],
    phone = "+91 44 4796 5437",
    email = "info@shipsoft.co",
    copyrightText = "Shipsoft. All rights reserved.",
  } = useContent("footer");

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800/80">
          {/* Brand & About */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src={logo || "/62fb79faa960d.png"}
                alt="Shipsoft Solutions"
                className="h-12 w-auto object-contain bg-white/10 p-1.5 rounded-xl"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/Shipsoft Logo Only-03.png";
                }}
              />
              <div>
                <span className="font-heading font-extrabold text-2xl text-white tracking-tight">Shipsoft</span>
                <span className="block text-[11px] uppercase font-semibold text-blue-400">Solutions Pvt Ltd</span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              {aboutText}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-800 hover:border-blue-500 shadow-xs"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
              {facebookUrl && (
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-800 hover:border-blue-500 shadow-xs"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link to="/our-team" className="hover:text-white transition">Leadership Team</Link>
              </li>
              <li>
                <Link to="/clients" className="hover:text-white transition">Clients & Partners</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition">Careers</Link>
              </li>
              <li>
                <Link to="/employees-corner" className="hover:text-white transition">Employee's Corner</Link>
              </li>
              <li>
                <Link to="/admin" className="text-slate-500 hover:text-slate-400 text-xs transition">Admin Portal</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services/SoftwareSolutions" className="hover:text-white transition">Software Solutions</Link>
              </li>
              <li>
                <Link to="/services/documentation" className="hover:text-white transition">Documentation Services</Link>
              </li>
              <li>
                <Link to="/services/salessupport" className="hover:text-white transition">Sales Support Desk</Link>
              </li>
              <li>
                <Link to="/services/FinancialManagement" className="hover:text-white transition">Financial Management</Link>
              </li>
              <li>
                <Link to="/services/customerservice" className="hover:text-white transition">Customer Service</Link>
              </li>
              <li>
                <Link to="/modules/crm" className="text-blue-400 hover:text-blue-300 transition flex items-center gap-1 text-xs mt-3">
                  <span>Shipsoft ERP Suite</span>
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Locations */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              India Offices
            </h4>
            <div className="space-y-4 text-xs text-slate-400">
              {addresses.map((addr: { lines: string[]; note?: string }, idx: number) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    {addr.note && (
                      <span className="font-semibold text-slate-200 block mb-0.5">{addr.note}</span>
                    )}
                    {addr.lines.map((line: string, i: number) => (
                      <span key={i} className="block leading-relaxed">{line}</span>
                    ))}
                  </div>
                </div>
              ))}

              <div className="pt-2 flex flex-col gap-2">
                {phone && (
                  <a href={`tel:${phone.replace(/\s+/g, "")}`} className="flex items-center gap-2 hover:text-white transition text-xs">
                    <Phone className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                    <span>{phone}</span>
                  </a>
                )}
                {email && (
                  <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-white transition text-xs">
                    <Mail className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                    <span>{email}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {copyrightText}</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-400 transition">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-slate-400 transition">Terms & Conditions</Link>
            <Link to="/contact" className="hover:text-slate-400 transition">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
