import React from 'react';
import "../index.css"
const NavBar = () => {
  return (
    <nav className="bg-[#180830] w-full h-20 flex items-center justify-between px-8 shadow-md">
      <div className="text-3xl font-bold text-[#1DD693]">Hitch Media</div>
      <ul className="flex space-x-8 text-white text-lg font-medium">
        <li>
          <a 
            className="hover:text-[#1DD693] text-white transition-colors duration-200 block" 
            href="#about"
          >
            About Us
          </a>
        </li>
        <li>
          <a 
            className="hover:text-[#1DD693] text-white transition-colors duration-200 block" 
            href="#services"
          >
            Services
          </a>
        </li>
        <li>
          <a 
            className="hover:text-[#1DD693] text-white transition-colors duration-200 block" 
            href="#testimonials"
          >
            Testimonials
          </a>
        </li>
        <li>
          <a 
            className="hover:text-[#1DD693] text-white transition-colors duration-200 block" 
            href="#contact"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;