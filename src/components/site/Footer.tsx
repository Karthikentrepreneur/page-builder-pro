import { Facebook, Linkedin, Youtube, MessageCircle, Mail, Phone, MapPin, Ship } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy-deep text-white/80">
    <div className="container py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-10">
      <div className="lg:col-span-2">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Ship className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <div className="font-extrabold text-xl text-white">Ship<span className="text-primary-glow">soft</span></div>
            <div className="text-[10px] tracking-wider text-white/50">EMPOWERED BY SOFTWARE INNOVATION</div>
          </div>
        </div>
        <p className="text-sm leading-relaxed max-w-md mb-6">
          Shipsoft is a powerful ERP logistics software designed to optimize operations, improve supply chain visibility, and boost efficiency for modern logistics businesses.
        </p>
        <div className="flex gap-3">
          {[Facebook, Linkedin, MessageCircle, Youtube].map((Icon, i) => (
            <a key={i} href="#" className="h-9 w-9 rounded-full bg-primary flex items-center justify-center hover:bg-primary-glow transition-colors">
              <Icon className="h-4 w-4 text-white" />
            </a>
          ))}
        </div>
      </div>

      <FooterCol title="Solutions" links={["Customer Relationship Management", "Freight Management System", "Warehouse Management System", "Accounts Management System", "Distribution Management System", "e-Commerce"]} />
      <FooterCol title="Company" links={["About Us", "Resources", "Blog", "Careers", "Contact Us"]} />
      <FooterCol title="Support" links={["Help Center", "Documentation", "Privacy Policy", "Terms & Conditions"]} />
    </div>

    <div className="border-t border-white/10">
      <div className="container py-10 grid md:grid-cols-3 gap-8 text-sm">
        <ContactBlock country="Singapore" lines={["100 TRAS ST, #16-01", "SINGAPORE 079027"]} email="sales@shipsoft.co" phone="+65 31580494" />
        <ContactBlock country="UAE" lines={["SM-OFFICE-E1-1613B", "AJMAN FREE ZONE", "UNITED ARAB EMIRATES"]} email="sales@shipsoft.co" phone="+971 43 704077" />
        <ContactBlock country="India" lines={["KAIZEN, New No. G3 (Old No.", "G Block, Plot No. 5650, 18th Street", "Rly. Chinthamani, Anna Nagar East,", "Chennai 600102"]} email="sales@shipsoft.co" phone="+91 753 005 4555" />
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container py-5 text-center text-xs text-white/50">
        © 2025 Shipsoft Solutions Pte. Ltd. All Rights Reserved.
      </div>
    </div>
  </footer>
);

const FooterCol = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h4 className="font-bold text-white mb-4">{title}</h4>
    <ul className="space-y-3 text-sm">
      {links.map((l) => (
        <li key={l}><a href="#" className="hover:text-primary-glow transition-colors">{l}</a></li>
      ))}
    </ul>
  </div>
);

const ContactBlock = ({ country, lines, email, phone }: { country: string; lines: string[]; email: string; phone: string }) => (
  <div>
    <h4 className="font-bold text-white mb-3">Contact Us</h4>
    <div className="font-semibold text-white mb-2">{country}</div>
    <div className="flex gap-2 mb-3"><MapPin className="h-4 w-4 text-primary-glow shrink-0 mt-0.5" /><div>{lines.map((l) => <div key={l}>{l}</div>)}</div></div>
    <div className="flex items-center gap-2 mb-2"><Mail className="h-4 w-4 text-primary-glow" />{email}</div>
    <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary-glow" />{phone}</div>
  </div>
);

export default Footer;
