const photos = [
  { src: "/images/gallery/chairs.jpg", label: "Elegant Seating" },
  { src: "/images/gallery/chairs3.jpg", label: "Event Chairs" },
  { src: "/images/gallery/tent.jpg", label: "Outdoor Tent" },
  { src: "/images/gallery/superstructure.jpg", label: "Stage Structure" },
  { src: "/images/gallery/tent1.jpg", label: "Pagoda Tent" },
  { src: "/images/gallery/superstructure1.jpg", label: "Superstructure Design" },
  { src: "/images/gallery/tent2.jpg", label: "Closeup" },
  { src: "/images/gallery/chairs1.jpg", label: "Chair Arrangement" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-6 md:px-20 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <header className="text-center mb-12">
          <span className="inline-block bg-[#FFE2E2] px-4 py-1 rounded-full text-xs uppercase tracking-wide">
            Curated moments
          </span>
          <h2 className="mt-4 text-6xl font-semibold">Event Moments Gallery</h2>
          <p className="mt-3 opacity-70 max-w-xl mx-auto">
            A living archive of weddings, corporate gatherings, concerts, and birthdays we've brought to life.
          </p>
        </header>

        {/* Row 1 — Big cinematic */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {photos.slice(0, 2).map((p) => (
            <WideCard key={p.src} photo={p} />
          ))}
        </div>

        {/* Row 2 — Big cinematic */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {photos.slice(2, 4).map((p) => (
            <WideCard key={p.src} photo={p} />
          ))}
        </div>

        {/* Row 3 — Smaller thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {photos.slice(4, 8).map((p) => (
            <SmallCard key={p.src} photo={p} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* Big cinematic cards */
function WideCard({ photo }) {
  return (
    <div className="relative group overflow-hidden rounded-xl  bg-black">
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img
          src={photo.src}
          alt={photo.label}
          className="
            w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-110
          "
        />
      </div>
      {/* Red hover overlay */}
      <div className="
        pointer-events-none
        absolute bottom-0 left-0 right-0 h-[40%]
        bg-gradient-to-t from-white to-transparent
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
      "></div>


      <span className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-xs shadow">
        {photo.label}
      </span>
    </div>
  );
}

/* Smaller thumbnail cards */
function SmallCard({ photo }) {
  return (
    <div className="relative group overflow-hidden rounded-xl bg-black">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={photo.src}
          alt={photo.label}
          className="
            w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-110
          "
        />
      </div>
      {/* Red hover overlay */}
      <div className="
        pointer-events-none
        absolute bottom-0 left-0 right-0 h-[40%]
        bg-gradient-to-t from-white to-transparent
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
      "></div>


      <span className="absolute bottom-3 left-3 bg-white/90 px-3 py-1 rounded text-xs shadow">
        {photo.label}
      </span>
    </div>
  );
}
