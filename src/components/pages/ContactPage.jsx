import PageHero from "../common/PageHero";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_28oprhi", // replace with your service ID
        "template_o3ha69t", // replace with your template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "X_QUbI0jlnnSIrQVj" // replace with your public key
      )
      .then(
        () => {
          toast.success("Message sent successfully ", {
            style: {
              background: "#1A1A1A",
              color: "#D8D8D8",
              border: "2px solid #8B1E1E",
              borderRadius: "8px",
              padding: "16px 24px",
              fontWeight: "500",
            },
            iconTheme: {
              primary: "#8B1E1E",
              secondary: "#fff",
            },
          });
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message ", {
            style: {
              background: "#1A1A1A",
              color: "#D8D8D8",
              border: "2px solid #B23A3A",
              borderRadius: "8px",
              padding: "16px 24px",
              fontWeight: "500",
            },
            iconTheme: {
              primary: "#B23A3A",
              secondary: "#fff",
            },
          });
          setLoading(false);
        }
      );
  };

  return (
    <main className="bg-[#0F0F0F] text-white">
      <PageHero
        title="Contact Us"
        subtitle="Reach out. Connect. Build together."
        image="/one.jpg"
      />

      {/* FAQ SECTION */}
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
                  onClick={() => setOpenIndex(isOpen ? null : index)}
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

      {/* CONTACT SECTION */}
      <section className="py-20 px-6 max-w-3xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-[#D8D8D8] mb-6">Location: Mathare, Kenya</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-[#1A1A1A] rounded-md"
              placeholder="Name"
              required
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-[#1A1A1A] rounded-md"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-[#1A1A1A] rounded-md"
              placeholder="Message"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[#8B1E1E] px-6 py-3 rounded-md hover:bg-[#B23A3A] transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <img
          src="/hero.png"
          className="rounded-lg object-cover"
          alt="Mathare"
        />
      </section>
    </main>
  );
}
