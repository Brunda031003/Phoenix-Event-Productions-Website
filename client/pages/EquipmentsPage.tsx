import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { EQUIPMENTS } from "@/lib/equipments";

export default function EquipmentsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(EQUIPMENTS.map(e => e.category))];

  const filteredEquipments = selectedCategory === "All" ? EQUIPMENTS : EQUIPMENTS.filter(e => e.category === selectedCategory);

  return (
    <div className="py-12 md:py-20">
      <div className="container">
        <h1 className="text-4xl md:text-5xl text-center">All Equipments</h1>
        <p className="mt-3 text-center opacity-80 max-w-2xl mx-auto">Explore our full range of professional equipment for events.</p>

        <div className="mt-8 flex justify-center">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredEquipments.map((e) => (
            <div key={e.name} className="rounded-lg border p-4 bg-card">
              <div className="text-lg font-semibold">{e.name}</div>
              <div className="mt-2 text-sm opacity-80">{e.desc}</div>
              <div className="mt-2 text-xs text-muted-foreground">{e.category}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
