import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiFillApple, AiOutlineGoogle } from "react-icons/ai";
import logo from '../../public/homez.png'

const Footer = () => {
  return (
    <footer className="bg-[#181A20] text-white pt-12 pb-6 px-6 md:px-20">
      {/* Newsletter Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-2">Subscribe Our Newsletter</h2>
        <p className="text-gray-400 mb-4">We don't send spam so don't worry.</p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Your email"
            className="px-5 py-4 rounded-l-md w-64 focus:outline-none text-black bg-white"
          />
          <button className="bg-[#EB6753] px-4 py-2 rounded-r-md hover:bg-[#eb6753ef] transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10 text-gray-300">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <img src={logo} alt="logo" className="mr-2 w-8 h-8 rounded-full" />
            <span className="font-bold text-xl">homez</span>
          </div>
          <p className="pb-2 font-xs">Address</p>
          <p className="text-white font-semibold mb-5">
            788 Queensberry Street, North Melbourne VIC 3051, Australia.
          </p>
          <p className="mb-2 font-xs">Total Free Customer Care:</p>
          <p className="text-white font-semibold mb-5">+(008) 123 456 789</p>
          <p className="mb-2 font-xs">Live Support?</p>
          <p className="text-white font-semibold"> hi@homez.com</p>
        </div>

        {/* Popular Search */}
        <div>
          <h3 className="font-semibold mb-6">Popular Search</h3>
          <ul className="space-y-4">
            <li className="text-[#BEBDBD]">Apartment for Sale</li>
            <li className="text-[#BEBDBD]">Apartment for Rent</li>
            <li className="text-[#BEBDBD]">Offices for Sale</li>
            <li className="text-[#BEBDBD]">Offices for Rent</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-4">
            <li className="text-[#BEBDBD]">Terms of Use</li>
            <li className="text-[#BEBDBD]">Privacy Policy</li>
            <li className="text-[#BEBDBD]">Pricing Plans</li>
            <li className="text-[#BEBDBD]">Our Services</li>
            <li className="text-[#BEBDBD]">Contact</li>
            <li className="text-[#BEBDBD]">Careers</li>
            <li className="text-[#BEBDBD]">FAQs</li>
          </ul>
        </div>

        {/* Apps */}
        <div>
          <h3 className="font-semibold mb-6">Apps</h3>
          <div className="space-y-3">
            <button className="flex items-center bg-[#22252ee3] px-4 py-3 rounded hover:bg-[#22252e] transition w-full">
              <AiFillApple className="mr-2 text-lg" />
              <span className="text-left">
                <span className="block text-[#BEBDBD]">Download on the</span>
                <span className="block text-white font-medium">Apple Store</span>
              </span>
            </button>
            <button className="flex items-center bg-[#22252ee3] px-4 py-3 rounded hover:bg-[#22252e] transition w-full">
              <AiOutlineGoogle className="mr-2 text-lg" />
              <span className="text-left">
                <span className="block text-[#BEBDBD]">Get it on</span>
                <span className="block text-white font-medium">Google Play</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-white text-sm">
        <p>© Homez – All rights reserved</p>
        <div className="flex space-x-6 mt-2 md:mt-0">
            <p className="font-semibold text-xs">Follow Us</p>
          <FaFacebookF className="hover:text-white cursor-pointer" />
          <FaTwitter className="hover:text-white cursor-pointer" />
          <FaInstagram className="hover:text-white cursor-pointer" />
          <FaLinkedinIn className="hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;