import PageHero from "../common/PageHero";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Community Concerts & Live Sessions",
      image: "/one.jpg",
    },
    {
      title: "Thematic Music Projects",
      image: "/two.jpg",
    },
    {
      title: "Workshops & Trainings",
      image: "/three.jpg",
    },
    {
      title: "Digital Presence & Campaigns",
      image: "/one.jpg",
    },
  ];

  return (
    <main className="bg-[#0F0F0F] text-white">
      <PageHero
        title="Projects & Impact"
        subtitle="Community-rooted initiatives with real outcomes."
        image="/hero.png"
      />

      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#2A2A2A] rounded-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="font-semibold mb-2">{project.title}</h3>
              <p className="text-[#D8D8D8] text-sm">
                Amplifying grassroots struggles and creating safe creative
                spaces for politically conscious artists.
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
