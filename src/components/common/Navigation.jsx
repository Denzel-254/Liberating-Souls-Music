import { FiHome, FiInfo, FiLayers, FiMusic, FiHeart } from "react-icons/fi";

function Navigation() {
  return (
    <nav className="bg-[#0F0F0F] text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">LSM</div>

        <ul className="hidden md:flex items-center space-x-6 text-sm">
          <li className="flex items-center gap-1 hover:text-[#B23A3A] cursor-pointer">
            <FiHome /> Home
          </li>
          <li className="flex items-center gap-1 hover:text-[#B23A3A] cursor-pointer">
            <FiInfo /> About
          </li>

          <li className="flex items-center gap-1 hover:text-[#B23A3A] cursor-pointer">
            <FiInfo /> Projects
          </li>

          <li className="flex items-center gap-1 hover:text-[#B23A3A] cursor-pointer">
            <FiInfo /> Collective
          </li>

          <li className="flex items-center gap-1 hover:text-[#B23A3A] cursor-pointer">
            <FiLayers /> What We Do
          </li>
          <li className="flex items-center gap-1 hover:text-[#B23A3A] cursor-pointer">
            <FiMusic /> Media
          </li>

          <li className="flex items-center gap-1 hover:text-[#B23A3A] cursor-pointer">
            <FiInfo /> Contact
          </li>
        </ul>

        <button className="flex items-center cursor-pointer gap-2 bg-[#8B1E1E] px-4 py-2 rounded-md text-sm hover:bg-[#B23A3A] transition">
          <FiHeart /> Support the Movement
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
