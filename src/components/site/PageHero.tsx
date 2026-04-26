interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

const PageHero = ({ eyebrow, title, subtitle }: PageHeroProps) => (
  <section className="relative bg-navy-deep text-white py-20 lg:py-28 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-deep to-primary/30" />
    <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: "radial-gradient(circle at 20% 30%, hsl(var(--primary-glow)) 0%, transparent 40%), radial-gradient(circle at 80% 70%, hsl(var(--primary)) 0%, transparent 40%)"
    }} />
    <div className="container relative">
      <div className="text-xs font-bold tracking-[0.2em] text-primary-glow mb-4">{eyebrow}</div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight max-w-3xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-6 text-lg text-white/80 max-w-2xl">{subtitle}</p>
      )}
    </div>
  </section>
);

export default PageHero;
