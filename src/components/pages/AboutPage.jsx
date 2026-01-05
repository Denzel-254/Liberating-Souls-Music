import PageHero from "../common/PageHero";

export default function AboutPage() {
  return (
    <main className="bg-[#0F0F0F] text-white">
      {/* HERO */}
      <PageHero
        title="About Liberating Souls Music"
        subtitle="Art, resistance, and collective healing rooted in community."
        image="/two.jpg"
      />

      {/* WHO WE ARE */}
      <section className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
          <p className="text-[#D8D8D8]">
            Liberating Souls Music (LSM) is a people-centered cultural movement
            rooted in the lived realities of working-class communities. We bring
            together singers, rappers, poets, spoken word artists,
            instrumentalists, and sound engineers to create conscious music that
            speaks truth to power.
          </p>
        </div>

        <img
          src="/two.jpg"
          className="rounded-lg object-cover"
          alt="LSM community"
        />
      </section>

      {/* VISION */}
      <section className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/three.jpg"
          className="rounded-lg object-cover"
          alt="Vision"
        />

        <div>
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-[#D8D8D8]">
            A liberated society where art and culture empower communities to
            imagine, demand, and build justice, dignity, and collective freedom.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-[#D8D8D8]">
            To create, nurture, and mobilize revolutionary music and sound that
            speaks truth to power, supports collective healing, and strengthens
            grassroots organizing and resistance movements.
          </p>
        </div>

        <img
          src="/two.jpg"
          className="rounded-lg object-cover"
          alt="Mission"
        />
      </section>

      {/* CORE VALUES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-10 text-center">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Truth to Power",
            "Collective Work",
            "Community Rootedness",
            "People’s Education",
            "Creativity & Excellence",
            "Healing & Wellbeing",
          ].map((value) => (
            <div
              key={value}
              className="bg-[#2A2A2A] p-6 rounded-lg"
            >
              <h3 className="font-semibold mb-2">{value}</h3>
              <p className="text-[#D8D8D8] text-sm">
                Our work is guided by this principle in all creative,
                political, and community processes.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/one.jpg"
          className="rounded-lg object-cover"
          alt="Our Story"
        />

        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-[#D8D8D8]">
            Born in Mathare, LSM emerged from the urgent need for safe creative
            spaces, political expression, and collective healing. What began as
            informal community sessions has grown into a cultural movement
            grounded in resistance, solidarity, and people’s power.
          </p>
        </div>
      </section>
    </main>
  );
}
