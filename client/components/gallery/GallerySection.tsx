import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type Photo = {
  id: string;
  title: string;
  category: Category;
  url: string;
  aspect?: "square" | "portrait" | "landscape";
};

type Category = "All" | "Weddings" | "Corporate" | "Concerts" | "Birthdays";

const CATEGORIES: Category[] = ["All", "Weddings", "Corporate", "Concerts", "Birthdays"];

const PHOTOS: Photo[] = [
  {
    id: "w1",
    title: "Sunset Vows",
    category: "Weddings",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
    aspect: "portrait",
  },
  {
    id: "w2",
    title: "First Dance",
    category: "Weddings",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    aspect: "square",
  },
  {
    id: "c1",
    title: "Keynote Lights",
    category: "Corporate",
    url: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=1600&auto=format&fit=crop",
    aspect: "landscape",
  },
  {
    id: "c2",
    title: "Networking Glow",
    category: "Corporate",
    url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
    aspect: "portrait",
  },
  {
    id: "m1",
    title: "Stage Fire",
    category: "Concerts",
    url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop",
    aspect: "landscape",
  },
  {
    id: "m2",
    title: "Crowd Wave",
    category: "Concerts",
    url: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop",
    aspect: "square",
  },
  {
    id: "b1",
    title: "Cake Sparkles",
    category: "Birthdays",
    url: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=1600&auto=format&fit=crop",
    aspect: "portrait",
  },
  {
    id: "b2",
    title: "Confetti Shot",
    category: "Birthdays",
    url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
    aspect: "landscape",
  },
  {
    id: "m3",
    title: "Encore",
    category: "Concerts",
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop",
    aspect: "portrait",
  },
  {
    id: "c3",
    title: "Boardroom Brilliance",
    category: "Corporate",
    url: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1600&auto=format&fit=crop",
    aspect: "square",
  },
];

export default function GallerySection() {
  const [active, setActive] = useState<Category>("All");

  const filtered = useMemo(() => {
    if (active === "All") return PHOTOS;
    return PHOTOS.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="gallery" className="py-12 md:py-20">
      <div className="container">
        <header className="mb-10 md:mb-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs tracking-wide uppercase">
            Curated moments
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl leading-tight">
            Event Moments Gallery
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base opacity-80 max-w-2xl mx-auto">
            A living archive of weddings, corporate gatherings, concerts, and birthdays we've brought to life.
          </p>

          <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "px-4 py-2 rounded-full border transition-all",
                  active === c
                    ? "bg-primary text-primary-foreground border-primary shadow shadow-primary/30"
                    : "bg-background hover:bg-accent border-border"
                )}
                aria-pressed={active === c}
              >
                {c}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filtered.map((photo) => (
            <figure
              key={photo.id}
              className={cn(
                "group relative overflow-hidden rounded-xl border bg-card",
                photo.aspect === "portrait" && "row-span-2",
                photo.aspect === "landscape" && "col-span-2",
              )}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute left-3 right-3 bottom-3 flex items-center justify-between">
                <div className="rounded bg-background/80 px-2 py-1 text-xs shadow-sm">
                  {photo.title}
                </div>
                <span className="rounded-full bg-primary text-primary-foreground text-[10px] px-2 py-1 uppercase tracking-wide shadow shadow-primary/30">
                  {photo.category}
                </span>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
