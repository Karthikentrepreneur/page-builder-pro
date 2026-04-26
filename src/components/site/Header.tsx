import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/shipsoft-logo.webp";

const modules = [
  { label: "Customer Relationship Management", to: "/modules/crm" },
  { label: "Freight Management System", to: "/modules/freight" },
  { label: "Warehouse Management System", to: "/modules/warehouse" },
  { label: "Transport Management System", to: "/modules/transport" },
  { label: "Accounts Management System", to: "/modules/accounts" },
  { label: "Distribution Management System", to: "/modules/distribution" },
];

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Features", to: "/features" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isModuleActive = location.pathname.startsWith("/modules");

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Shipsoft — Empowered by Software Innovation" className="h-14 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary border-b-2 border-primary pb-1" : "text-foreground/80"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger
              className={`text-sm font-medium flex items-center gap-1 transition-colors hover:text-primary outline-none ${
                isModuleActive ? "text-primary border-b-2 border-primary pb-1" : "text-foreground/80"
              }`}
            >
              Modules <ChevronDown className="h-3.5 w-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-72">
              {modules.map((m) => (
                <DropdownMenuItem key={m.to} asChild>
                  <Link to={m.to}>{m.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-primary ${
                isActive ? "text-primary border-b-2 border-primary pb-1" : "text-foreground/80"
              }`
            }
          >
            Contact Us
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="hero" size="lg" className="hidden md:inline-flex" asChild>
            <Link to="/contact">Request Demo</Link>
          </Button>
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-foreground/80 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <div className="py-2">
              <div className="text-xs font-bold tracking-wider text-muted-foreground mb-2">MODULES</div>
              <div className="flex flex-col gap-1 pl-2">
                {modules.map((m) => (
                  <Link
                    key={m.to}
                    to={m.to}
                    onClick={() => setOpen(false)}
                    className="py-1.5 text-sm text-foreground/80 hover:text-primary"
                  >
                    {m.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-foreground/80 hover:text-primary"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
