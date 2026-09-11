const logos = [
  "/logos/1.png",
  "/logos/2.png",
  "/logos/3.png",
  "/logos/4.png",
  "/logos/5.png",
  "/logos/6.png",
  "/logos/7.png",
  "/logos/8.png",
  "/logos/9.png",
  "/logos/10.png",
  "/logos/11.png",
  "/logos/12.png",
  "/logos/13.png",
  "/logos/14.png",
  "/logos/15.png",
];

const TrustedBy = () => (
  <section className="py-16 bg-background border-y border-border">
    <div className="container">
      <div className="text-center text-sm font-bold tracking-[0.25em] text-primary mb-10">
        TRUSTED BY LEADING COMPANIES WORLDWIDE
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10">
        {logos.map((logo, i) => (
          <div key={i} className="flex items-center justify-center">
            <img
              src={logo}
              alt={`logo-${i}`}
              className="h-14 md:h-16 lg:h-20 object-contain transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedBy;
