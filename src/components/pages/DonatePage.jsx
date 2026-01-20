import { useState } from "react";
import { FaHandHoldingHeart, FaMusic, FaUsers } from "react-icons/fa";

const DonatePage = () => {
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");

  const handleDonate = (e) => {
    e.preventDefault();

    // BACKEND HOOK (MPESA will connect here later)
    console.log({ amount, phone });
  };

  return (
    <section className="min-h-screen bg-[#0E0E0E] text-white">
      
      {/* HERO */}
      <div className="text-center px-6 py-20 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#8B1E1E] mb-6">
          Support the Movement
        </h1>
        <p className="text-[#F5E6D3] text-lg leading-relaxed">
          Your contribution sustains revolutionary art, community healing,
          and people-centered cultural resistance.
        </p>
      </div>

      {/* IMPACT STRIP */}
      <div className="bg-[#121212] py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          
          <div>
            <FaMusic className="text-[#8B1E1E] text-3xl mx-auto mb-4" />
            <p className="text-sm text-[#D8D8D8]">
              Funds conscious music production and performances
            </p>
          </div>

          <div>
            <FaUsers className="text-[#8B1E1E] text-3xl mx-auto mb-4" />
            <p className="text-sm text-[#D8D8D8]">
              Supports grassroots artists and community workshops
            </p>
          </div>

          <div>
            <FaHandHoldingHeart className="text-[#8B1E1E] text-3xl mx-auto mb-4" />
            <p className="text-sm text-[#D8D8D8]">
              Sustains healing spaces and political education
            </p>
          </div>

        </div>
      </div>

      {/* DONATION FORM */}
      <div className="px-6 py-20">
        <div className="max-w-xl mx-auto bg-[#121212] p-8 rounded-2xl shadow-lg">
          
          <h2 className="text-2xl font-semibold text-[#F5E6D3] mb-6 text-center">
            Make a Contribution
          </h2>

          <form onSubmit={handleDonate} className="space-y-6">
            
            {/* AMOUNT */}
            <div>
              <label className="block text-sm mb-2 text-[#D8D8D8]">
                Donation Amount (KES)
              </label>
              <input
                type="number"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="e.g. 500"
                className="w-full bg-[#0E0E0E] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8B1E1E]"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm mb-2 text-[#D8D8D8]">
                MPESA Phone Number
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="07XXXXXXXX"
                className="w-full bg-[#0E0E0E] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8B1E1E]"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#8B1E1E] hover:bg-[#B23A3A] transition py-3 rounded-lg font-semibold"
            >
              Donate via MPESA
            </button>
          </form>

          <p className="text-xs text-center text-[#8A8A8A] mt-6">
            Secure payment. No data is stored without consent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonatePage;
