import PageShell from "./PageShell";
import PageHero from "./PageHero";
import { LucideIcon, Sparkles, Workflow, Brain, Database, User, Zap, ShieldCheck, BarChart3, TrendingUp } from "lucide-react";

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
  benefits?: ModuleFeature[];
  featuresHeading?: string;
  features: ModuleFeature[];
}

const defaultBenefits: ModuleFeature[] = [
  { icon: Database, title: "Centralized Data", desc: "All information in one place for easy access and better collaboration." },
  { icon: User, title: "Better Engagement", desc: "Personalized interactions that build trust and strengthen loyalty." },
  { icon: Zap, title: "Increased Efficiency", desc: "Automate routine tasks and streamline processes to save time and reduce manual work." },
  { icon: ShieldCheck, title: "Higher Retention", desc: "Proactive communication and follow-ups to improve retention rates." },
  { icon: BarChart3, title: "Smarter Decisions", desc: "Leverage data and insights to make informed and strategic business decisions." },
  { icon: TrendingUp, title: "Business Growth", desc: "Stronger relationships and efficient workflows that drive long-term growth." },
];

const heroFeatures = [
  { icon: Sparkles, title: "Stronger Relationships", desc: "Build lasting customer trust" },
  { icon: Workflow, title: "Smarter Workflows", desc: "Automate and save time" },
  { icon: Brain, title: "Data-Driven Decisions", desc: "Improve performance" },
];

const ModulePage = ({
  eyebrow = "OUR SERVICES",
  title,
  heroSubtitle,
  introHeading,
  introParagraphs,
  highlight,
  benefits = defaultBenefits,
  featuresHeading = "Module Highlights",
  features,
}: ModulePageProps) => (
  <PageShell>
    <PageHero
      eyebrow={eyebrow}
      title={title}
      subtitle={heroSubtitle}
      features={heroFeatures}
    />

    <section className="py-20 lg:py-24 bg-background">
      <div className="container grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2">
          <div className="text-xs font-bold tracking-[0.2em] text-primary mb-4">ABOUT THIS MODULE</div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">{introHeading}</h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            {introParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {highlight && (
            <div className="mt-8 p-5 rounded-xl bg-primary/5 border-l-4 border-primary flex gap-3">
              <User className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/85 leading-relaxed">{highlight}</p>
            </div>
          )}
        </div>
        <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="bg-card rounded-xl p-5 border border-border/60 hover:shadow-card transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <b.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold text-sm mb-2">{b.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-24 bg-surface-soft">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-[0.2em] text-primary mb-4">CAPABILITIES</div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">{featuresHeading}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const colors = ["cat-blue", "cat-violet", "cat-green", "cat-orange", "cat-purple", "cat-pink"];
            const color = colors[i % colors.length];
            return (
              <div key={f.title} className="bg-card rounded-xl p-5 shadow-card hover:shadow-float transition-all hover:-translate-y-0.5 border border-border/50">
                <div className="h-11 w-11 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `hsl(var(--${color}) / 0.12)` }}>
                  <f.icon className="h-5 w-5" style={{ color: `hsl(var(--${color}))` }} />
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
