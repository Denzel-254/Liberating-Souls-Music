import { FiHeart, FiUsers, FiVolume2, FiActivity } from "react-icons/fi";

function Programs() {
  return (
    <section className="bg-[#E6DDC4] text-gray-500 py-20 ">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="  flex items-center justify-center text-sm">
          <img src="/one.jpg" alt="group photo" className=" h-70 rounded-lg" />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">About LSM</h2>

          <div>
            <p>
              Liberating Souls Music (LSM) brings together singers, rappers,
              poets, spoken word artists, instrumentalists, and sound engineers
              to create conscious music that speaks truth to power.
            </p>

            <button className="py-2 px-6 rounded-md mt-5 text-white cursor-pointer bg-red-900">
              Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;
