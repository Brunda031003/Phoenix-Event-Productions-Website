const IMAGES = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1400&auto=format&fit=crop",
];

export default function SimpleGallery() {
  return (
    <section id="gallery" className="py-12 md:py-20">
      <div className="container">
        <h3 className="text-3xl md:text-4xl text-center">Gallery</h3>
        <p className="mt-3 text-center opacity-80 max-w-2xl mx-auto">A quick look at some recent events.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {IMAGES.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden border bg-card">
              <img src={src} alt={`gallery-${i}`} className="w-full h-64 object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
