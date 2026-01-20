import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiInfo,
  FiLayers,
  FiMusic,
  FiHeart,
  FiUsers,
  FiBriefcase,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";

function Navigation() {
  const [open, setOpen] = useState(false);

  const linkClass = "flex items-center gap-1 hover:text-[#B23A3A] transition";

  return (
    <nav className="bg-[#0F0F0F] fixed top-0 laft-0 right-0 w-full z-50 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold">
          LSM
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-sm">
          <li>
            <NavLink to="/" className={linkClass}>
              <FiHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass}>
              <FiInfo /> About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={linkClass}>
              <FiLayers /> Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/collective" className={linkClass}>
              <FiUsers /> Collective
            </NavLink>
          </li>
          <li>
            <NavLink to="/what-we-do" className={linkClass}>
              <FiBriefcase /> What We Do
            </NavLink>
          </li>
          <li>
            <NavLink to="/media" className={linkClass}>
              <FiMusic /> Media
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass}>
              <FiMail /> Contact
            </NavLink>
          </li>

          <li>
            <NavLink to="/events" className={linkClass}>
              <FiMail /> Events
            </NavLink>
          </li>
        </ul>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <NavLink
            to="/donate"
            className="hidden md:flex items-center gap-2 bg-[#8B1E1E] px-4 py-2 rounded-md text-sm hover:bg-[#B23A3A] transition"
          >
            <FiHeart /> Support the Movement
          </NavLink>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-xl" onClick={() => setOpen(!open)}>
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden mt-4 space-y-4 text-sm">
          <li>
            <NavLink
              to="/"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              <FiHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              <FiInfo /> About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              <FiLayers /> Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/collective"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              <FiUsers /> Collective
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/what-we-do"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              <FiBriefcase /> What We Do
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/media"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              <FiMusic /> Media
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              <FiMail /> Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/events"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              <FiMail /> Events
            </NavLink>
          </li>

          <NavLink
            to="/donate"
            onClick={() => setOpen(false)}
            className="w-full flex items-center justify-center gap-2 bg-[#8B1E1E] px-4 py-2 rounded-md hover:bg-[#B23A3A] transition"
          >
            <FiHeart /> Support the Movement
          </NavLink>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
