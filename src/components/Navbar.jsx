import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import bg from "../assets/hero.png";
import logo from "../../public/homez.png";

export default function Navbar() {
  return (
    <header
      className="relative bg-cover bg-center h-[95vh] flex flex-col"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Navbar */}
      <nav className="relative z-10 max-w-7xl mx-auto flex justify-center items-center py-6 px-4 lg:px-8 text-white gap-10">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 rounded-full shadow-md border border-white/20"
          />
          <span className="font-bold text-2xl tracking-wide">homez</span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
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

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="flex items-center gap-2 backdrop-blur-sm text-white px-5 py-2 rounded-md text-md font-semibold shadow transition"
          >
            <FaRegUserCircle /> Login / Register
          </Link>
          <Link
            to="/add-property"
            className="hidden sm:flex items-center text-black gap-2 bg-white px-4 py-2 rounded-md text-md font-semibold shadow0 transition"
          >
            Add Property <FaArrowRight className="-rotate-45"/>
          </Link>
        </div>
      </nav>
    </header>
  );
}
