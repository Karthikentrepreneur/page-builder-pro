import { useState } from "react";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Zap, Headphones, Globe, Users, ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const offices = [
  {
    country: "Singapore",
    company: "SHIPSOFT SOLUTIONS PTE. LTD.",
    address: ["100 TRAS ST, #16-01", "SINGAPORE 079027"],
    email: "sales@shipsoft.co",
    phone: "+65 8606 5455",
    mapQuery: "100+Tras+St+Singapore+079027",
  },
  {
    country: "UAE",
    company: "SHIPSOFT SOLUTIONS FZE",
    address: ["SM-OFFICE-E1-1613B", "AJMAN FREE ZONE", "UNITED ARAB EMIRATES"],
    email: "sales@shipsoft.co",
    phone: "+971 43 704077",
    mapQuery: "Ajman+Free+Zone+UAE",
  },
  {
    country: "Saudi Arabia",
    company: "SHIPSOFT COMPANY",
    address: [
      "Room-302, 3rd Floor",
      "4073, Prince Mohammed Bin Fahd Road",
      "Al Mazruiyah Dist., 32415-7135",
      "Kingdom of Saudi Arabia",
    ],
    email: "sales@shipsoft.co",
    phone: "+966 566 492 783",
    mapQuery: "Prince+Mohammed+Bin+Fahd+Road+Al+Mazruiyah+Saudi+Arabia",
  },
  {
    country: "India",
    company: "SHIPSOFT INDIA",
    address: [
      "KAIZEN, 2nd & 3rd Floor,", 
      "New No. G3 (Old No. G1), G Block, Plot No. 565Q, 18th Street, Chinthamani,",
      "Anna Nagar East, Chennai 600102.",
      "India",
    ],
    email: "sales@shipsoft.co",
    phone: "+91 44 4796 5437",
    mapQuery: "MG+Road+Bengaluru+Karnataka+India",
  },
];

const heroFeatures = [
  { icon: Zap, title: "Quick Response", desc: "We reply within one business day." },
  { icon: Headphones, title: "Expert Support", desc: "Talk to our logistics software experts." },
  { icon: Globe, title: "Global Presence", desc: "Serving clients across multiple countries." },
];

const conversationItems = [
  { icon: Send, title: "Request a Demo", desc: "See how Shipsoft can streamline your operations." },
  { icon: Headphones, title: "Get Support", desc: "Our support team is here to help." },
  { icon: Users, title: "Partnership Inquiries", desc: "Let's build something great together." },
];

const Contact = () => {
  const [agree, setAgree] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) {
      toast({ title: "Please accept the privacy policy", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    (e.target as HTMLFormElement).reset();
    setAgree(false);
  };

  return (
    <PageShell showCTA={false}>
      <PageHero
        eyebrow="GROW YOUR BUSINESS WITH US"
        title="Contact Shipsoft"
        subtitle="Get in touch with us — we'd love to hear from you!"
        features={heroFeatures}
      />

      <section className="py-20 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-[0.2em] text-primary mb-3">OUR OFFICES</div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">We're Here to Help</h2>
            <div className="mt-4 h-1 w-16 bg-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-6 mb-20">
            {offices.map((o) => (
              <div
                key={o.country}
                className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden grid md:grid-cols-2"
              >
                <div className="p-7 lg:p-9">
                  <div className="text-xs font-bold tracking-[0.2em] text-primary mb-3">{o.country.toUpperCase()}</div>
                  <h3 className="font-bold text-xl mb-5">{o.company}</h3>
                  <div className="flex gap-3 mb-4 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      {o.address.map((l) => <div key={l}>{l}</div>)}
                    </div>
                  </div>
                  <a href={`mailto:${o.email}`} className="flex items-center gap-3 text-sm mb-3 hover:text-primary transition-colors">
                    <Mail className="h-4 w-4 text-primary" /> {o.email}
                  </a>
                  <a href={`tel:${o.phone.replace(/\s+/g, "")}`} className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                    <Phone className="h-4 w-4 text-primary" /> {o.phone}
                  </a>
                </div>
                <div className="bg-muted min-h-[260px] relative">
                  <iframe
                    title={`${o.country} office map`}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    src={`https://maps.google.com/maps?q=${o.mapQuery}&z=14&output=embed`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <div className="text-xs font-bold tracking-[0.2em] text-primary mb-4">SAY HELLO!</div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">Let's start a conversation</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're exploring solutions, requesting a demo, or just have a question — drop us a line and our team will get back to you shortly.
              </p>
              <div className="space-y-5">
                {conversationItems.map((c) => (
                  <div key={c.title} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <c.icon className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-bold text-sm mb-0.5">{c.title}</div>
                      <div className="text-sm text-muted-foreground">{c.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={onSubmit} className="lg:col-span-3 bg-card rounded-2xl p-8 shadow-card border border-border/50 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Name <span className="text-destructive">*</span></Label>
                  <Input id="name" required placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                  <Input id="email" type="email" required placeholder="Enter your email" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message <span className="text-destructive">*</span></Label>
                <Textarea id="message" required placeholder="Enter your message" rows={5} />
              </div>
              <label className="flex items-start gap-3 text-sm text-muted-foreground cursor-pointer">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-border accent-primary"
                />
                I understand that my data will be held securely in accordance with the privacy policy.
              </label>
              <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                Send Message <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Contact;
