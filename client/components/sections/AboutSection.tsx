export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20">
      <div className="container grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl">About Pheonix Event Production</h3>
          <p className="mt-4 text-base opacity-80">
            Pheonix Event Production transforms spaces into memorable experiences. We combine design, logistics and storytelling to deliver events that resonate with audiences and clients alike.
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <li className="rounded-lg bg-card p-4 border">
              <strong>End-to-end Production</strong>
              <div className="text-sm opacity-80">Planning, design and execution</div>
            </li>
            <li className="rounded-lg bg-card p-4 border">
              <strong>Creative Direction</strong>
              <div className="text-sm opacity-80">Brand-led experiences and stage design</div>
            </li>
            <li className="rounded-lg bg-card p-4 border">
              <strong>Technical Operations</strong>
              <div className="text-sm opacity-80">Audio, lighting, and AV management</div>
            </li>
            <li className="rounded-lg bg-card p-4 border">
              <strong>Client-first Service</strong>
              <div className="text-sm opacity-80">Transparent, reliable, and on-time</div>
            </li>
          </ul>
        </div>

        <div className="rounded-xl overflow-hidden border">
          <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" alt="About Pheonix Event Production" className="w-full h-80 object-cover" />
        </div>
      </div>
    </section>
  );
}
