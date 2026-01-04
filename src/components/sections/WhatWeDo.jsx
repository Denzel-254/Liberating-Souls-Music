import { FiMusic, FiMic, FiUsers, FiTarget } from "react-icons/fi";

function WhatWeDo() {
  const items = [
    { title: "Music Production", icon: <FiMusic size={28} /> },
    { title: "Workshops", icon: <FiUsers size={28} /> },
    { title: "Live Concerts", icon: <FiMic size={28} /> },
    { title: "Art Projects", icon: <FiTarget size={28} /> },
  ];

  return (
    <section className="bg-[#1A1A1A] text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">What We Do</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-[#2A2A2A] h-36 rounded-lg flex flex-col items-center justify-center gap-3"
            >
              {item.icon}
              <span className="text-sm">{item.title}</span>
            </div>
          ))}
        </div>

        <button className="bg-[#3A3A3A] px-6 py-3 rounded-md hover:bg-[#4A4A4A] transition">
          Our Programs
        </button>
      </div>
    </section>
  );
}

export default WhatWeDo;
