"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white p-6 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-teal-500 text-xl font-bold vibrate-on-hover">
          Itoya <span className="text-gray-900">Eromosele</span>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={0}
            className="text-gray-900 hover:text-teal-500 cursor-pointer font-semibold"
            activeClass="text-teal-500 font-bold"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="text-gray-900 hover:text-teal-500 cursor-pointer font-semibold"
            activeClass="text-teal-500 font-bold"
          >
            About
          </Link>
          <Link
            to="quality"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="text-gray-900 hover:text-teal-500 cursor-pointer font-semibold"
            activeClass="text-teal-500 font-bold"
          >
            Quality
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="text-gray-900 hover:text-teal-500 cursor-pointer font-semibold"
            activeClass="text-teal-500 font-bold"
          >
            Skill
          </Link>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="text-gray-900 hover:text-teal-500 cursor-pointer font-semibold"
            activeClass="text-teal-500 font-bold"
          >
            Portfolio
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="text-gray-900 hover:text-teal-500 cursor-pointer font-semibold"
            activeClass="text-teal-500 font-bold"
          >
            Contact
          </Link>
        </div>
        <div>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="text-teal-500 py-2 px-4 rounded-full border-2 border-teal-300 hover:bg-teal-600 hover:text-white hover:border-none transition-colors cursor-pointer"
          >
            Hire Me
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
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={0}
              className="text-gray-300 hover:text-white py-2 vibrate-on-hover"
              activeClass="text-white font-bold"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
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
              offset={-80}
              className="text-gray-300 hover:text-white py-2 vibrate-on-hover"
              activeClass="text-white font-bold"
              onClick={() => setIsOpen(false)}
            >
              Skill
            </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
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
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-white py-2 px-4 rounded-full border-2 border-teal-400 hover:bg-teal-600 transition-colors mt-2"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
