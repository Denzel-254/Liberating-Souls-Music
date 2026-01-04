import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-[#D8D8D8] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        <div>
          <h3 className="text-white font-semibold mb-3">About LSM</h3>
          <p>Brief About Text</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-1">
            <li>Home</li>
            <li>About</li>
            <li>Programs</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Get Involved</h3>
          <ul className="space-y-1">
            <li>Join Workshops</li>
            <li>Collaborate</li>
            <li>Partner With Us</li>
            <li>Donate</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>

      <p className="text-center text-xs mt-12">
        © 2026 Liberating Souls Music. Art for Justice & Freedom.
      </p>
    </footer>
  );
}

export default Footer;
