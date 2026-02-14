import PageHero from "../common/PageHero";

export default function MediaPage() {
  const mediaItems = [
    { id: 1, type: "image", src: "/one.jpg", alt: "Live Concert 1" },
    { id: 2, type: "image", src: "/media/live2.jpg", alt: "Live Concert 2" },
    { id: 3, type: "video", src: "/media/performance1.mp4" },
    { id: 4, type: "image", src: "/three.jpg", alt: "Live Concert 3" },
    { id: 5, type: "iframe", src: "https://www.youtube.com/embed/VIDEO_ID" },
    { id: 6, type: "image", src: "/hero.jpg", alt: "Live Concert 4" },
  ];

  return (
    <main className="bg-[#0F0F0F] text-white">
      <PageHero
        title="Media"
        subtitle="Music, live sessions, and performances."
        image="/logo.png"
      />

      {/* Masonry Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#2A2A2A] rounded-lg break-inside-avoid overflow-hidden"
            >
              {item.type === "image" && (
                <img
                  src={item.src}
                  alt={item.alt || ""}
                  className="w-full h-auto object-cover rounded-lg"
                />
              )}
              {item.type === "video" && (
                <video
                  src={item.src}
                  controls
                  className="w-full h-auto object-cover rounded-lg"
                />
              )}
              {item.type === "iframe" && (
                <iframe
                  src={item.src}
                  className="w-full h-64 rounded-lg"
                  title="Embedded Media"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
