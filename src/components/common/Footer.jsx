import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-[#D8D8D8] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        
        {/* ABOUT */}
        <div>
          <h3 className="text-white font-semibold mb-3">About LSM</h3>
          <p>
            Liberating Souls Music is a people-centered cultural movement using
            music, art, and sound to inspire social justice, healing, and
            collective liberation.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/programs" className="hover:text-white">Programs</Link></li>
            <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* GET INVOLVED */}
        <div>
          <h3 className="text-white font-semibold mb-3">Get Involved</h3>
          <ul className="space-y-1">
            <li><Link to="/contact" className="hover:text-white">Join Workshops</Link></li>
            <li><Link to="/projects" className="hover:text-white">Collaborate</Link></li>
            <li><Link to="/contact" className="hover:text-white">Partner With Us</Link></li>
            <li><Link to="/donate" className="hover:text-white">Donate</Link></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
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
