import { useState } from "react";

export default function Landing() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Lazy Background Image */}
      <img
        src="/Landing-background.webp"
        alt="Phoenix Event Background"
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`
          absolute inset-0 w-full h-full object-cover transition-all duration-700
          ${loaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-105 blur-lg"}
        `}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-20">
        <div className="max-w-3xl">

          {/* Logo (lazy) */}
          <img
            src="/images/Landing_logo.png"
            alt="Phoenix Event Productions"
            loading="lazy"
            decoding="async"
            className="w-52 md:w-72 mb-6 drop-shadow-xl"
          />

          {/* Subtitle */}
          <p className="mt-6 text-lg text-white/80 max-w-xl">
            A PREMIER EVENT PRODUCTION COMPANY TRUSTED BY COUNTLESS CORPORATES AND BRANDS SINCE 2018.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-md bg-red-600 hover:bg-red-700 text-white font-medium shadow-lg shadow-red-600/30 transition"
            >
              Start planning
            </a>

            <a
              href="#about"
              className="px-6 py-3 rounded-md border border-white/30 text-white hover:border-red-500 hover:text-red-500 transition"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
