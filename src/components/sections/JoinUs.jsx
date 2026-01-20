import { FiUserPlus, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

function JoinUs() {
  return (
    <section className="bg-[#8B1E1E] text-white py-16 mb-5 text-center">
      <h2 className="text-3xl font-bold mb-2">Join the Movement</h2>
      <p className="italic mb-8">Create. Resist. Heal.</p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/projects">
          <button className="flex cursor-pointer items-center gap-2 bg-[#1A1A1A] px-5 py-3 rounded-md hover:bg-[#2A2A2A] transition">
            <FiUserPlus /> Join a Workshop
          </button>
        </Link>

        <Link to="/contact">
          <button className="flex cursor-pointer items-center gap-2 bg-[#1A1A1A] px-5 py-3 rounded-md hover:bg-[#2A2A2A] transition">
            <FiHeart /> Partner With Us
          </button>
        </Link>

        <Link to="/donate">
          <button className="flex cursor-pointer items-center gap-2 bg-[#1A1A1A] px-5 py-3 rounded-md hover:bg-[#2A2A2A] transition">
            <FiHeart /> Support Our Work
          </button>
        </Link>
      </div>
    </section>
  );
}

export default JoinUs;
