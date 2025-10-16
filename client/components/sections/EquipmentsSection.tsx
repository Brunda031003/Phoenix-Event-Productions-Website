const EQUIPMENTS = [
  { name: "Digital Mixer (32ch)", desc: "Clean audio routing for complex shows" },
  { name: "LED Wall Panels", desc: "High-resolution stage backdrops" },
  { name: "Moving Head Lights", desc: "Dynamic lighting with precision control" },
  { name: "Wireless Mic Package", desc: "Reliable RF for presenters and performers" },
  { name: "FOH Speakers", desc: "High-fidelity PA systems" },
  { name: "Stage Truss & Rigging", desc: "Safe and modular structural support" },
];

export default function EquipmentsSection() {
  return (
    <section id="equipments" className="py-12 md:py-20">
      <div className="container">
        <h3 className="text-3xl md:text-4xl text-center">Equipments</h3>
        <p className="mt-3 text-center opacity-80 max-w-2xl mx-auto">We maintain top-tier equipment to ensure every event runs perfectly.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {EQUIPMENTS.map((e) => (
            <div key={e.name} className="rounded-lg border p-4 bg-card">
              <div className="text-lg font-semibold">{e.name}</div>
              <div className="mt-2 text-sm opacity-80">{e.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
