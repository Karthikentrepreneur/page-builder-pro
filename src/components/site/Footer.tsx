import { Facebook, Linkedin, Youtube, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/Shipsoft.webp";

const Footer = () => (
  <footer className="bg-navy-deep text-white/80">
    <div className="container py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-10">
      <div className="lg:col-span-2">
        <div className="bg-white/95 inline-flex rounded-lg p-2 mb-5">
          <img src={logo} alt="Shipsoft" className="h-10 w-auto" />
        </div>
        <p className="text-sm leading-relaxed max-w-md mb-6">
          Shipsoft is a powerful ERP logistics software designed to optimize operations, improve supply chain visibility, and boost efficiency for modern logistics businesses.
        </p>
        <div className="flex gap-3">
          {[
            { Icon: Linkedin, href: "https://www.linkedin.com/company/shipsoft-solutions/", label: "LinkedIn" },
            { Icon: Facebook, href: "https://www.facebook.com/shipsoft.co", label: "Facebook" },
            { Icon: Twitter, href: "https://x.com/Shipsoft_", label: "X (Twitter)" },
            { Icon: Instagram, href: "https://www.instagram.com/shipsoft_1/", label: "Instagram" },
            { Icon: Youtube, href: "https://www.youtube.com/@shipsoft7931", label: "YouTube" },
          ].map(({ Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="h-9 w-9 rounded-full bg-primary flex items-center justify-center hover:bg-primary-glow transition-colors">
              <Icon className="h-4 w-4 text-white" />
            </a>
          ))}
        </div>
      </div>

      <FooterCol title="Solutions" links={[
        { label: "Customer Relationship Management", to: "/modules/crm" },
        { label: "Freight Management System", to: "/modules/freight" },
        { label: "Warehouse Management System", to: "/modules/warehouse" },
        { label: "Accounts Management System", to: "/modules/accounts" },
        { label: "Distribution Management System", to: "/modules/distribution" },
        { label: "e-Commerce", to: "/modules/distribution" },
      ]} />
      <FooterCol title="Company" links={[
        { label: "About Us", to: "/about" },
        { label: "Resources", to: "#" },
        { label: "Blog", to: "#" },
        { label: "Careers", to: "#" },
        { label: "Contact Us", to: "/contact" },
      ]} />
      <FooterCol title="Support" links={[
        { label: "Help Center", to: "#" },
        { label: "Documentation", to: "#" },
        { label: "Privacy Policy", to: "#" },
        { label: "Terms & Conditions", to: "#" },
      ]} />
    </div>

    <div className="border-t border-white/10">
      <div className="container py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <ContactBlock country="Singapore" lines={["100 TRAS ST, #16-01", "SINGAPORE 079027"]} email="sales@shipsoft.co" phone="+65 3158 0494" />
        <ContactBlock country="UAE" lines={["SM-OFFICE-E1-1613B", "AJMAN FREE ZONE", "UNITED ARAB EMIRATES"]} email="sales@shipsoft.co" phone="+971 43 704077" />
        <ContactBlock country="Saudi Arabia" lines={["Room-302, 3rd Floor", "4073, Prince Mohammed Bin Fahd Rd", "Al Mazruiyah Dist., 32415-7135", "Kingdom of Saudi Arabia"]} email="sales@shipsoft.co" phone="+966 566 492 783" />
        <ContactBlock country="India" lines={["KAIZEN, 2nd & 3rd Floor, New No. G3 (Old No. G1), G Block, Plot No. 565Q, 18th Street, Chinthamani, Anna Nagar East, Chennai 600102.", "India"]} email="sales@shipsoft.co" phone="+91 75300 54555" />
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container py-5 text-center text-xs text-white/50">
        © 2025 Shipsoft Solutions Pte. Ltd. All Rights Reserved.
      </div>
    </div>
  </footer>
);

const FooterCol = ({ title, links }: { title: string; links: { label: string; to: string }[] }) => (
  <div>
    <h4 className="font-bold text-white mb-4">{title}</h4>
    <ul className="space-y-3 text-sm">
      {links.map((l) => (
        <li key={l.label}>
          <Link to={l.to} className="hover:text-primary-glow transition-colors">{l.label}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const ContactBlock = ({ country, lines, email, phone }: { country: string; lines: string[]; email: string; phone: string }) => (
  <div>
    <div className="font-semibold text-white mb-3">{country}</div>
    <div className="flex gap-2 mb-3"><MapPin className="h-4 w-4 text-primary-glow shrink-0 mt-0.5" /><div>{lines.map((l) => <div key={l}>{l}</div>)}</div></div>
    <a href={`mailto:${email}`} className="flex items-center gap-2 mb-2 hover:text-primary-glow transition-colors"><Mail className="h-4 w-4 text-primary-glow" />{email}</a>
    <a href={`tel:${phone}`} className="flex items-center gap-2 hover:text-primary-glow transition-colors"><Phone className="h-4 w-4 text-primary-glow" />{phone}</a>
  </div>
);

export default Footer;
