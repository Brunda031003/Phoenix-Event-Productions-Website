export default function About() {
  return (
    <section id="about" className="py-20 mx-20 sm:mx-20 md:mx-22">
      <div className="container grid md:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <div>
          <h2 className="text-4xl font-semibold mb-4">
            About Phoenix Event Production
          </h2>

          <p className="opacity-80 mb-8 max-w-xl">
            Phoenix Event Production transforms spaces into memorable experiences.
            We combine design, logistics and storytelling to deliver events that
            resonate with audiences and clients alike.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              ["End-to-end Production", "Planning, design and execution"],
              ["Creative Direction", "Brand-led experiences and stage design"],
              ["Technical Operations", "Audio, lighting, and AV management"],
              ["Client-first Service", "Transparent, reliable, and on-time"],
            ].map(([title, desc]) => (
              <div key={title} className="bg-card border border-border rounded-xl p-5">
                <h4 className="font-semibold mb-1">{title}</h4>
                <p className="text-sm opacity-70">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <img
          src="/images/gallery/about.jpg"
          className="rounded-xl border border-border shadow-sm"
        />
      </div>
    </section>
  );
}
