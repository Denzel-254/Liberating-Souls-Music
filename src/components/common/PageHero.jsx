export default function PageHero({ title, subtitle, image }) {
  return (
    <section
      className="relative py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-[#D8D8D8] text-lg">{subtitle}</p>
      </div>
    </section>
  );
}
