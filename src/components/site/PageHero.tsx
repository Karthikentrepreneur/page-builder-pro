import heroBg from "@/assets/hero-port.jpg";

interface PageHeroFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  features?: PageHeroFeature[];
  cta?: React.ReactNode;
  align?: "left" | "center";
}

const PageHero = ({ eyebrow, title, subtitle, features, cta, align = "left" }: PageHeroProps) => (
  <section className="relative bg-navy-deep text-white overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt=""
        className="h-full w-full object-cover opacity-40"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
    </div>
    <div className="absolute inset-0 opacity-30" style={{
      backgroundImage:
        "radial-gradient(circle at 85% 30%, hsl(var(--primary-glow) / 0.4) 0%, transparent 45%)"
    }} />

    <div className={`container relative py-20 lg:py-24 ${align === "center" ? "text-center" : ""}`}>
      <div className={`text-xs font-bold tracking-[0.2em] text-primary-glow mb-4 ${align === "center" ? "" : ""}`}>
        {eyebrow}
      </div>
      <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight ${align === "center" ? "mx-auto max-w-4xl" : "max-w-3xl"}`}>
        {title}
      </h1>
      {subtitle && (
        <p className={`mt-5 text-lg text-white/80 ${align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      )}

      {features && features.length > 0 && (
        <>
          <div className="mt-7 h-1 w-16 bg-primary-glow rounded-full" />
          <div className="mt-7 flex flex-wrap gap-x-10 gap-y-5">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-3 max-w-[220px]">
                <div className="h-10 w-10 rounded-lg bg-primary/20 border border-primary-glow/30 flex items-center justify-center shrink-0">
                  <f.icon className="h-5 w-5 text-primary-glow" />
                </div>
                <div className="text-sm leading-tight">
                  <div className="font-semibold text-white mb-1">{f.title}</div>
                  <div className="text-white/70 text-xs leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {cta && <div className="mt-8">{cta}</div>}
    </div>
  </section>
);

export default PageHero;
