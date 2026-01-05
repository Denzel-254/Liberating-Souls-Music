import PageHero from "../common/PageHero";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useState } from "react";

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How can I join Liberating Souls Music?",
      a: "You can join by participating in our workshops, collaborating as an artist, or supporting our community initiatives. Reach out through the contact form and we’ll guide you.",
    },
    {
      q: "Do I need to be a professional artist to participate?",
      a: "No. LSM welcomes emerging and experienced artists who are committed to community, resistance, and collective healing.",
    },
    {
      q: "Can organizations partner with LSM?",
      a: "Yes. We collaborate with grassroots organizations, movements, and institutions aligned with our values.",
    },
    {
      q: "Where are your activities based?",
      a: "Our work is rooted in Mathare, Kenya, with collaborations and digital outreach extending beyond.",
    },
  ];

  return (
    <main className="bg-[#0F0F0F] text-white">
      <PageHero
        title="Contact Us"
        subtitle="Reach out. Connect. Build together."
        image="/one.jpg"
      />

      {/* FAQ SECTION (FIRST) */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.q}
                className="bg-[#2A2A2A] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold">{faq.q}</span>
                  {isOpen ? <FiMinus /> : <FiPlus />}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-[#D8D8D8] text-sm">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT SECTION (SECOND) */}
      <section className="py-20 px-6 max-w-3xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-[#D8D8D8] mb-6">
            Location: Mathare, Kenya
          </p>

          <form className="space-y-4">
            <input
              className="w-full p-3 bg-[#1A1A1A] rounded-md"
              placeholder="Name"
            />
            <input
              className="w-full p-3 bg-[#1A1A1A] rounded-md"
              placeholder="Email"
            />
            <textarea
              rows="5"
              className="w-full p-3 bg-[#1A1A1A] rounded-md"
              placeholder="Message"
            />
            <button className="bg-[#8B1E1E] px-6 py-3 rounded-md hover:bg-[#B23A3A] transition">
              Send Message
            </button>
          </form>
        </div>

        <img
          src="/mathare.jpg"
          className="rounded-lg object-cover"
          alt="Mathare"
        />
      </section>
    </main>
  );
}
