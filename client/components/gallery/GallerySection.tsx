import { cn } from "@/lib/utils";

type Photo = {
  id: string;
  title: string;
  url: string;
  aspect?: "square" | "portrait" | "landscape";
};

const PHOTOS: Photo[] = [
  {
    id: "chairs",
    title: "Elegant Seating",
    url: "/images/gallery/chairs.jpg",
    aspect: "landscape",
  },
  {
    id: "chairs3",
    title: "Event Chairs",
    url: "/images/gallery/chairs3.jpg",
    aspect: "landscape",
  },
  
  
  {
    id: "tent1",
    title: "Outdoor Tent",
    url: "/images/gallery/tent.jpg",
    aspect: "landscape",
  },
  {
    id: "chairs1",
    title: "Chair Arrangement",
    url: "/images/gallery/chairs1.jpg",
    aspect: "square",
  },
  {
    id: "tent2",
    title: "Pagoda Tent",
    url: "/images/gallery/tent1.jpg",
    aspect: "square",
  },
  {
    id: "super1",
    title: "Stage Structure",
    url: "/images/gallery/superstructure.jpg",
    aspect: "landscape",
  },
  {
    id: "super2",
    title: "Superstructure Design",
    url: "/images/gallery/superstructure1.jpg",
    aspect: "square",
  },
   {
    id: "tent3",
    title: "Closeup",
    url: "/images/gallery/tent2.jpg",
    aspect: "square",
  }
  // {
  //   id: "about",
  //   title: "About Us",
  //   url: "/images/gallery/about.jpg",
  //   aspect: "portrait",
  // },
];

export default function GallerySection() {

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
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {PHOTOS.map((photo) => (
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
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
