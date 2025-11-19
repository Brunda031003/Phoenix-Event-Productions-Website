import { Link } from "react-router-dom";

const EQUIPMENTS = [
  { name: "Tiffany Chairs", desc: "Elegant seating for premium events"},
  { name: "2x6 Tables", desc: "Rectangular multipurpose tables"},
  { name: "Pipependal", desc: "Basic tent structure with cloth covering"},
  { name: "Stage", desc: "Main elevated platform for events"},
  { name: "Tepoy", desc: "Small side table for lounges" },
  { name: "4ft Lamp", desc: "General illumination for event areas" },
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

        <div className="mt-8 text-center">
          <Link
            to="/equipments"
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm shadow shadow-primary/30 hover:bg-primary/90 transition-colors"
          >
            Check out more
          </Link>
        </div>
      </div>
    </section>
  );
}
