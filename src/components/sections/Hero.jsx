import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative text-white py-28 h-120 bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero.png')", // <-- put your image here
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Liberating Souls Music (LSM)
        </h1>

        <h2 className="text-xl font-semibold text-[#D8D8D8] mb-8">
          | Music | Resistance | Collective Healing |
        </h2>

        <p className="text-lg text-[#D8D8D8] mb-8">
          A people-centered cultural movement rooted in community, resistance,
          and collective healing. Born in Nairobi, Kenya.
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/about">
            <button className="flex items-center cursor-pointer gap-2 bg-[#2A2A2A] px-6 py-3 rounded-md hover:bg-[#3A3A3A] transition">
              Learn More <FiArrowRight />
            </button>
          </Link>

          <Link to="/donate">
            <button className="flex items-center cursor-pointer gap-2 bg-[#8B1E1E] px-6 py-3 rounded-md hover:bg-[#B23A3A] transition">
              Get Involved <FiArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
