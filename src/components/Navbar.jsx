import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle, FaTimes } from "react-icons/fa";
import { FaArrowRight, FaBars } from "react-icons/fa6";
import bg from "../assets/hero.png";
import logo from "../../public/homez.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="relative bg-cover bg-center h-[95vh] flex flex-col"
      style={{
        backgroundImage:`url(${bg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Navbar */}
      <nav className="relative z-10 max-w-7xl sm:mx-auto flex justify-between items-center py-6 px-4 lg:px-8 text-white">
        {/* Logo */}
        <div className="flex items-center gap-2 mr-8">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 rounded-full shadow-md border border-white/20"
          />
          <span className="font-bold text-2xl tracking-wide">homez</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 ml-auto text-sm font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-[#EB6753] transition underline underline-offset-8 decoration-2"
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/listings" className="hover:text-[#EB6753] transition">
              Listings
            </Link>
          </li>
          <li>
            <Link to="/members" className="hover:text-[#EB6753] transition">
              Members
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-[#EB6753] transition">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/pages" className="hover:text-[#EB6753] transition">
              Pages
            </Link>
          </li>
        </ul>

        {/* Right Buttons (Desktop) */}
        <div className="hidden sm:flex items-center gap-4 ml-8">
          <Link
            to="/login"
            className="flex items-center gap-2 backdrop-blur-sm text-white px-5 py-2 rounded-md text-md font-semibold shadow transition"
          >
            <FaRegUserCircle /> Login / Register
          </Link>
          <Link
            to="/add-property"
            className="hidden sm:flex items-center text-black gap-2 bg-white px-4 py-2 rounded-md text-md font-semibold shadow transition"
          >
            Add Property <FaArrowRight className="-rotate-45" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto flex items-center text-2xl z-120"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden z-100 relative top-0 left-0 w-full bg-black/90 text-white flex flex-col items-center gap-6 py-10">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#EB6753] text-lg">
            Home
          </Link>
          <Link to="/listings" onClick={() => setIsOpen(false)} className="hover:text-[#EB6753] text-lg">
            Listings
          </Link>
          <Link to="/members" onClick={() => setIsOpen(false)} className="hover:text-[#EB6753] text-lg">
            Members
          </Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="hover:text-[#EB6753] text-lg">
            Blog
          </Link>
          <Link to="/pages" onClick={() => setIsOpen(false)} className="hover:text-[#EB6753] text-lg">
            Pages
          </Link>
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 bg-[#EB6753] px-6 py-2 rounded-md text-md font-semibold"
          >
            <FaRegUserCircle /> Login / Register
          </Link>
          <Link
            to="/add-property"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-md text-md font-semibold"
          >
            Add Property <FaArrowRight className="-rotate-45" />
          </Link>
        </div>
      )}
    </header>
// eslint-disable-next-line no-irregular-whitespace
  );
}