import { useState } from "react";
import { EQUIPMENTS } from "../data/equipments";

export default function EquipmentsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(EQUIPMENTS.map(e => e.category))];

  const filteredEquipments =
    selectedCategory === "All"
      ? EQUIPMENTS
      : EQUIPMENTS.filter(e => e.category === selectedCategory);

  return (
    <section className="py-50 mx-20 sm:mx-22 md:mx-24 bg-background min-h-screen">
      <div className="container">

        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold">
            All Equipments
          </h1>
          <p className="mt-3 opacity-70 max-w-2xl mx-auto">
            Explore our full range of professional equipment for events. 
          </p>
        </header>

        {/* Filter */}
        <div className="flex justify-center mb-10">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 rounded-lg border border-border bg-card focus:outline-none"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredEquipments.map((e) => (
            <div
              key={e.name}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">{e.name}</h3>
              <p className="mt-2 text-sm opacity-70">{e.desc}</p>
              <span className="inline-block mt-3 text-xs bg-[#FFE2E2] px-3 py-1 rounded-full">
                {e.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
