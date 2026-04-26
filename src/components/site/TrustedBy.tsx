const logos = ["Nautical Cargo", "PSL", "Logistics Hub", "ARIVA", "EMSTAR", "KRS", "M & C", "FUTURENET", "CITYGN", "AMASS", "PRIME Shipping", "HAIXUN"];

const TrustedBy = () => (
  <section className="py-14 bg-background border-y border-border">
    <div className="container">
      <div className="text-center text-xs font-bold tracking-[0.2em] text-primary mb-8">
        TRUSTED BY LEADING COMPANIES WORLDWIDE
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {logos.map((l) => (
          <div key={l} className="text-muted-foreground/70 font-semibold tracking-wide hover:text-foreground transition-colors">
            {l}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedBy;
