import EventCard from "../EventCard";

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "Liberating Souls Community Concert",
      description: "A night of revolutionary sound and resistance.",
      eventDate: "2026-03-10T18:00:00",
      price: 1000,
      image: "/hero.png",
    },

    {
      id: 1,
      title: "Liberating Souls Community Concert",
      description: "A night of revolutionary sound and resistance.",
      eventDate: "2026-03-10T18:00:00",
      price: 4500,
      image: "/hero.png",
    },

    {
      id: 1,
      title: "Liberating Souls Community Concert",
      description: "A night of revolutionary sound and resistance.",
      eventDate: "2026-03-10T18:00:00",
      price: 800,
      image: "/hero.png",
    },
  ];

  return (
    <section className="min-h-screen bg-[#0E0E0E] text-white px-6 py-16">
      <h1 className="text-4xl font-bold text-[#8B1E1E] mb-8 text-center">
        Upcoming Events
      </h1>

      {events.length === 0 ? (
        <p className="text-center text-[#D8D8D8]">No upcoming events</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </section>
  );
};

export default EventsPage;
