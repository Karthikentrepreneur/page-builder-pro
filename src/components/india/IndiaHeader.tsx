import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RegionSwitcher } from "@/contexts/RegionContext";
import { useContent } from "@/hooks/useContent";

const servicesDropdown = [
  { label: "Software Solutions", to: "/services/SoftwareSolutions", desc: "Custom WMS, TMS & FMS" },
  { label: "Documentation Services", to: "/services/documentation", desc: "Shipping BL & invoice handling" },
  { label: "Sales Support Desk", to: "/services/salessupport", desc: "Centralized lead & CRM support" },
  { label: "Financial Management", to: "/services/FinancialManagement", desc: "Trade & accounting services" },
  { label: "Customer Service", to: "/services/customerservice", desc: "Bookings & nomination desks" },
];

export const IndiaHeader: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { logo = "/62fb79faa960d.png", brandName = "Shipsoft", tagline = "Empowered by software innovation" } =
    useContent("header");

  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="container mx-auto px-4 flex h-20 items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo || "/62fb79faa960d.png"}
            alt={`${brandName} - ${tagline}`}
            className="h-12 w-auto object-contain"
            onError={(e) => {
              // fallback if logo fails
              (e.currentTarget as HTMLImageElement).src = "/Shipsoft Logo Only-03.png";
            }}
          />
          <div className="hidden sm:flex flex-col">
            <span className="font-heading font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
              {brandName}
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500">
              Solutions India
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive ? "text-blue-600 font-semibold" : "text-slate-700"
              }`
            }
          >
            Home
          </NavLink>

          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`text-sm font-medium flex items-center gap-1 transition-colors hover:text-blue-600 outline-none ${
                isServicesActive ? "text-blue-600 font-semibold" : "text-slate-700"
              }`}
            >
              Services <ChevronDown className="h-3.5 w-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-80 p-2 shadow-xl border-slate-200 rounded-2xl">
              <div className="px-3 py-2 border-b border-slate-100 mb-1">
                <Link
                  to="/services"
                  className="text-xs font-bold uppercase tracking-wider text-blue-600 hover:underline flex items-center justify-between"
                >
                  <span>All Services & Capabilities</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              {servicesDropdown.map((s) => (
                <DropdownMenuItem key={s.to} asChild className="rounded-xl p-2.5 cursor-pointer">
                  <Link to={s.to} className="flex flex-col">
                    <span className="font-semibold text-slate-900 text-sm">{s.label}</span>
                    <span className="text-xs text-slate-500">{s.desc}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink
            to="/our-team"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive ? "text-blue-600 font-semibold" : "text-slate-700"
              }`
            }
          >
            Our Team
          </NavLink>

          <NavLink
            to="/clients"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive ? "text-blue-600 font-semibold" : "text-slate-700"
              }`
            }
          >
            Clients
          </NavLink>

          <NavLink
            to="/careers"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive ? "text-blue-600 font-semibold" : "text-slate-700"
              }`
            }
          >
            Careers
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive ? "text-blue-600 font-semibold" : "text-slate-700"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Right action block */}
        <div className="flex items-center gap-3">
          {/* Region Switcher */}
          <RegionSwitcher />

          <Button size="sm" className="hidden md:inline-flex bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-sm" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-6 shadow-xl animate-fade-in">
          <div className="flex flex-col gap-4">
            <NavLink
              to="/"
              onClick={() => setMobileOpen(false)}
              className="text-base font-semibold text-slate-800 py-1"
            >
              Home
            </NavLink>

            <div className="border-t border-slate-100 pt-2">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400">Services</span>
              <div className="mt-2 flex flex-col gap-2 pl-2">
                <Link
                  to="/services"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-semibold text-blue-600"
                >
                  All Services Overview
                </Link>
                {servicesDropdown.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm text-slate-600 hover:text-blue-600"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-100 pt-2 flex flex-col gap-3">
              <NavLink
                to="/our-team"
                onClick={() => setMobileOpen(false)}
                className="text-base font-semibold text-slate-800"
              >
                Our Team
              </NavLink>
              <NavLink
                to="/clients"
                onClick={() => setMobileOpen(false)}
                className="text-base font-semibold text-slate-800"
              >
                Clients
              </NavLink>
              <NavLink
                to="/careers"
                onClick={() => setMobileOpen(false)}
                className="text-base font-semibold text-slate-800"
              >
                Careers
              </NavLink>
              <NavLink
                to="/employees-corner"
                onClick={() => setMobileOpen(false)}
                className="text-base font-semibold text-slate-800"
              >
                Employees Corner
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="text-base font-semibold text-slate-800"
              >
                Contact
              </NavLink>
            </div>

            <div className="border-t border-slate-100 pt-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Select Region:</span>
                <RegionSwitcher />
              </div>
              <Button className="w-full bg-blue-600 text-white rounded-xl" asChild>
                <Link to="/contact" onClick={() => setMobileOpen(false)}>Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
