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
