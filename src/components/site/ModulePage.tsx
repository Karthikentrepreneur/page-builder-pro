import PageShell from "./PageShell";
import PageHero from "./PageHero";
import { LucideIcon } from "lucide-react";

export interface ModuleFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface ModulePageProps {
  eyebrow?: string;
  title: string;
  heroSubtitle: string;
  introHeading: string;
  introParagraphs: string[];
  highlight?: string;
  featuresHeading?: string;
  features: ModuleFeature[];
}

const ModulePage = ({
  eyebrow = "OUR SERVICES",
  title,
  heroSubtitle,
  introHeading,
  introParagraphs,
  highlight,
  featuresHeading = "Module Highlights",
  features,
}: ModulePageProps) => (
  <PageShell>
    <PageHero eyebrow={eyebrow} title={title} subtitle={heroSubtitle} />

    <section className="py-20 lg:py-24 bg-background">
      <div className="container max-w-4xl">
        <div className="text-xs font-bold tracking-[0.2em] text-primary mb-4">ABOUT THIS MODULE</div>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">{introHeading}</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          {introParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {highlight && (
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-glow/10 border-l-4 border-primary">
            <p className="text-foreground/90 font-medium leading-relaxed">{highlight}</p>
          </div>
        )}
      </div>
    </section>

    <section className="py-20 lg:py-24 bg-surface-soft">
      <div className="container">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold tracking-[0.2em] text-primary mb-4">CAPABILITIES</div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">{featuresHeading}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const colors = ["cat-blue", "cat-violet", "cat-green", "cat-orange", "cat-purple", "cat-pink"];
            const color = colors[i % colors.length];
            return (
              <div key={f.title} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-float transition-all hover:-translate-y-1 border border-border/50">
                <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `hsl(var(--${color}) / 0.12)` }}>
                  <f.icon className="h-6 w-6" style={{ color: `hsl(var(--${color}))` }} />
                </div>
                <h3 className="font-bold text-base leading-snug mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </PageShell>
);

export default ModulePage;
