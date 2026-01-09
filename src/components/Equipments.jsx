import { Link } from "react-router-dom";

const items = [
  ["Tiffany Chairs", "Elegant seating for premium events"],
  ["2x6 Tables", "Rectangular multipurpose tables"],
  ["Pipependal", "Basic tent structure with cloth covering"],
  ["Stage", "Main elevated platform for events"],
  ["Tepoy", "Small side table for lounges"],
  ["4ft Lamp", "General illumination for event areas"],
];

export default function Equipments() {
  return (
    <section id="equipments" className="py-20 mx-6 md:mx-20">
      <div className="container">

        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-6xl font-semibold">Equipments</h2>
          <p className="mt-2 opacity-70">
            We maintain top-tier equipment to ensure every event runs perfectly.
          </p>
        </header>

        {/* Mobile: 2 cols | Desktop: 3 cols */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {items.map(([name, desc]) => (
            <div
              key={name}
              className="bg-card border rounded-xl p-6"
            >
              <h3 className="font-semibold mb-2">{name}</h3>
              <p className="text-sm opacity-70">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/equipments"
            className="inline-block bg-[#ED1D27] hover:bg-[#F33B45] text-white px-8 py-3 rounded-lg shadow-lg shadow-red-500/20 transition-colors duration-300"
          >
            Check out more
          </Link>
        </div>

      </div>
    </section>
  );
}
