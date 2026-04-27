const logos = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
  "/5.png",
  "/6.png",
  "/7.png",
  "/8.png",
  "/9.png",
  "/10.png",
  "/11.png",
  "/12.png",
  "/13.png",
  "/14.png",
  "/15.png",
];

const TrustedBy = () => (
  <section className="py-14 bg-background border-y border-border">
    <div className="container">
      <div className="text-center text-xs font-bold tracking-[0.2em] text-primary mb-8">
        TRUSTED BY LEADING COMPANIES WORLDWIDE
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {logos.map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center opacity-70 hover:opacity-100 transition"
          >
            <img
              src={logo}
              alt={`logo-${i}`}
              className="h-10 object-contain grayscale hover:grayscale-0 transition"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedBy;
