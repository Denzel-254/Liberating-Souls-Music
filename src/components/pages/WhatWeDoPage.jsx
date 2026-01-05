import PageHero from "../common/PageHero";

export default function WhatWeDoPage() {
  return (
    <main className="bg-[#0F0F0F] text-white">
      <PageHero
        title="What We Do"
        subtitle="Art, politics, and community organizing in action."
        image="/hero.png"
      />

      {/* MUSIC PRODUCTION */}
      <section className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Music Production & Creative Development
          </h2>
          <p className="text-[#D8D8D8]">
            We support artists through collaborative production processes,
            mentorship, and politically grounded creative development across
            hip-hop, spoken word, soul, and traditional fusion.
          </p>
        </div>
        <img src="/hero.png" className="rounded-lg object-cover" />
      </section>

      {/* WORKSHOPS */}
      <section className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img src="/hero.png" className="rounded-lg object-cover" />
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Community-Based Workshops
          </h2>
          <p className="text-[#D8D8D8]">
            Our workshops focus on music & activism, spoken word and storytelling,
            songwriting for social change, and mental health and collective
            healing.
          </p>
        </div>
      </section>

      {/* PERFORMANCES */}
      <section className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Live Performances & Community Concerts
          </h2>
          <p className="text-[#D8D8D8]">
            We organize community-centered performances that combine art,
            political education, and mobilization while creating safe spaces
            for expression.
          </p>
        </div>
        <img src="/hero.png" className="rounded-lg object-cover" />
      </section>

      {/* CAMPAIGNS */}
      <section className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img src="/hero.png" className="rounded-lg object-cover" />
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Campaign-Based Art Projects
          </h2>
          <p className="text-[#D8D8D8]">
            Our art projects address climate justice, mental health, human
            rights, and state accountability through collective cultural action.
          </p>
        </div>
      </section>
    </main>
  );
}
