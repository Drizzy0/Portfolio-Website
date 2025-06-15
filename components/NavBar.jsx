"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold vibrate-on-hover">
          Itoya Eromosele
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="text-gray-300 hover:text-white cursor-pointer vibrate-on-hover"
            activeClass="text-white font-bold"
          >
            About
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className="text-gray-300 hover:text-white cursor-pointer vibrate-on-hover"
            activeClass="text-white font-bold"
          >
            Skills
          </Link>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
            className="text-gray-300 hover:text-white cursor-pointer vibrate-on-hover"
            activeClass="text-white font-bold"
          >
            Portfolio
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="text-gray-300 hover:text-white cursor-pointer vibrate-on-hover"
            activeClass="text-white font-bold"
          >
            Contact
          </Link>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="flex flex-col items-center py-4">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white py-2 vibrate-on-hover"
              activeClass="text-white font-bold"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white py-2 vibrate-on-hover"
              activeClass="text-white font-bold"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white py-2 vibrate-on-hover"
              activeClass="text-white font-bold"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-gray-300 hover:text-white py-2 vibrate-on-hover"
              activeClass="text-white font-bold"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}