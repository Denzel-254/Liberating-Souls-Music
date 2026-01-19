import { useCountdown } from "../hooks/useCountdown";

const EventCard = ({ event }) => {
  const time = useCountdown(event.eventDate);

  return (
    <div className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#2A2A2A] hover:border-[#8B1E1E] transition">
      {/* POSTER */}
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>

        <p className="text-sm text-[#D8D8D8] mb-4">{event.description}</p>

        {/* COUNTDOWN */}
        <div className="flex justify-between text-xs mb-4 text-[#F5E6D3]">
          <span>{time.days}d</span>
          <span>{time.hours}h</span>
          <span>{time.minutes}m</span>
          <span>{time.seconds}s</span>
        </div>

        <button className="w-full bg-[#8B1E1E] py-2 rounded hover:bg-[#B23A3A] transition">
          Buy Ticket – KES {event.price}
        </button>
      </div>
    </div>
  );
};

export default EventCard;
