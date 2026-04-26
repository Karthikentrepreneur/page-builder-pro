import { Button } from "@/components/ui/button";
import { ChevronDown, Ship } from "lucide-react";

const navItems = ["Home", "Solutions", "CRM", "Warehouse", "Resources", "About Us", "Contact Us"];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="container flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-soft">
            <Ship className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-xl tracking-tight">
              Ship<span className="text-primary">soft</span>
            </div>
            <div className="text-[10px] text-muted-foreground tracking-wider">EMPOWERED BY SOFTWARE INNOVATION</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, i) => (
            <a
              key={item}
              href="#"
              className={`text-sm font-medium flex items-center gap-1 transition-colors hover:text-primary ${
                i === 0 ? "text-primary border-b-2 border-primary pb-1" : "text-foreground/80"
              }`}
            >
              {item}
              {(item === "Solutions" || item === "Resources") && <ChevronDown className="h-3 w-3" />}
            </a>
          ))}
        </nav>

        <Button variant="hero" size="lg" className="hidden md:inline-flex">
          Request Demo
        </Button>
      </div>
    </header>
  );
};

export default Header;
