import PageHero from "../common/PageHero";

export default function CollectivePage() {
  const team = [
    {
      role: "Artistic Direction",
      name: "Core Team Member",
      image: "/one.jpg",
      description:
        "Provides creative leadership, shapes the artistic vision of LSM, and ensures all work reflects the political and cultural values of the movement.",
    },
    {
      role: "Music & Sound Production",
      name: "Core Team Member",
      image: "/one.jpg",
      description:
        "Leads music production, sound engineering, and recording processes, supporting artists to produce high-quality, politically grounded work.",
    },
    {
      role: "Community Outreach",
      name: "Core Team Member",
      image: "/one.jpg",
      description:
        "Builds and maintains relationships with community members, coordinates grassroots engagement, and ensures accountability to the people.",
    },
    {
      role: "Communications & Media",
      name: "Core Team Member",
      image: "/one.jpg",
      description:
        "Manages storytelling, digital presence, documentation, and amplifying LSM’s work across platforms.",
    },
    {
      role: "Project Coordination",
      name: "Core Team Member",
      image: "/one.jpg",
      description:
        "Oversees planning and implementation of projects, ensuring timelines, collaboration, and collective responsibility.",
    },
    {
      role: "Partnerships",
      name: "Core Team Member",
      image: "/one.jpg",
      description:
        "Develops strategic partnerships and collaborations aligned with LSM’s values and long-term sustainability.",
    },
  ];

  return (
    <main className="bg-[#0F0F0F] text-white">
      {/* HERO */}
      <PageHero
        title="The LSM Collective"
        subtitle="Artists, organizers, and cultural workers building together."
        image="/logo.png"
      />

      {/* INTRO */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <p className="text-[#D8D8D8] text-lg">
          Liberating Souls Music is led by a collective of artists and
          organizers committed to shared leadership, accountability, and
          community-rooted cultural work.
        </p>
      </section>

      {/* TEAM GRID */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member) => (
            <div
              key={member.role}
              className="bg-[#2A2A2A] p-6 rounded-lg text-center"
            >
              <img
                src={member.image}
                alt={member.role}
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />

              <h3 className="font-semibold text-lg mb-1">{member.role}</h3>

              <p className="text-sm text-[#8A7F6A] mb-3">{member.name}</p>

              <p className="text-[#D8D8D8] text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">How We Work</h2>
        <p className="text-[#D8D8D8]">
          Our collective operates through shared responsibility, collective
          leadership, and deep accountability to the communities we serve. We
          believe culture must be built with the people, not for them.
        </p>
      </section>
    </main>
  );
}
