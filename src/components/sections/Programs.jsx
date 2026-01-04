import { FiHeart, FiUsers, FiVolume2, FiActivity } from "react-icons/fi";

function Programs() {
  return (
    <section className="bg-[#5F6F52] text-white py-20 my-5">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Community Impact</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FiHeart /> Creative Spaces
            </li>
            <li className="flex items-center gap-2">
              <FiActivity /> Grassroots Struggles
            </li>
            <li className="flex items-center gap-2">
              <FiUsers /> Conscious Artists
            </li>
            <li className="flex items-center gap-2">
              <FiVolume2 /> Art & Activism
            </li>
          </ul>
        </div>

        <div className="  flex items-center justify-center text-sm">
          <img
            src="/three.jpg"
            alt="group photo"
            className=" h-70 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Programs;
