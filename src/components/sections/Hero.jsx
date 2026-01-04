import { FiArrowRight } from "react-icons/fi";

function Hero() {
  return (
    <section className="bg-[#0F0F0F] text-white py-28 h-120">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Liberating Souls Music (LSM)
        </h1>

        <h2 className="text-xl font-semibold text-[#D8D8D8] mb-8">
          | Music | Resistance | Collective Healing |
        </h2>

        <p className="text-lg text-[#D8D8D8] mb-8">
          A people-centered cultural movement rooted in community, resistance,
          and collective healing. Born in Mathare, Kenya.
        </p>

        <div className="flex justify-center gap-4">
          <button className="flex items-center cursor-pointer gap-2 bg-[#2A2A2A] px-6 py-3 rounded-md hover:bg-[#3A3A3A] transition">
            Learn More <FiArrowRight />
          </button>

          <button className="flex items-center cursor-pointer gap-2 bg-[#8B1E1E] px-6 py-3 rounded-md hover:bg-[#B23A3A] transition">
            Get Involved <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
