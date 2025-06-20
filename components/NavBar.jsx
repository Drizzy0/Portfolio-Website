"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

export default function NavBar({ show }) {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);
  const topBarRef = useRef(null);

  useEffect(() => {
    if (topBarRef.current) {
      setNavHeight(topBarRef.current.offsetHeight);
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow transition-all duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div ref={topBarRef} className="p-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={-navHeight}
            className="text-teal-500 text-xl font-bold vibrate-on-hover cursor-pointer"
          >
            Itoya <span className="text-gray-900">Eromosele</span>
          </Link>

          <div className="hidden md:flex space-x-6 items-center">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-navHeight}
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
              offset={-navHeight}
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
              offset={-navHeight}
              className="text-gray-900 hover:text-teal-500 cursor-pointer font-semibold"
              activeClass="text-teal-500 font-bold"
            >
              Quality
            </Link>
            <Link
              to="skill"
              spy={true}
              smooth={true}
              duration={500}
              offset={-navHeight}
              className="text-gray-900 hover:text-teal-500 cursor-pointer font-semibold"
              activeClass="text-teal-500 font-bold"
            >
              Skill
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              offset={-navHeight}
              className="text-gray-900 hover:text-teal-500 cursor-pointer font-semibold"
              activeClass="text-teal-500 font-bold"
            >
              Services
            </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              offset={-navHeight}
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
              offset={-navHeight}
              className="text-gray-900 hover:text-teal-500 cursor-pointer font-semibold"
              activeClass="text-teal-500 font-bold"
            >
              Contact
            </Link>
          </div>
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col items-center py-4">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-navHeight}
              className="text-gray-900 hover:text-teal-500 py-2 font-semibold w-full text-center"
              activeClass="text-teal-500 font-bold"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-navHeight}
              className="text-gray-900 hover:text-teal-500 py-2 font-semibold w-full text-center"
              activeClass="text-teal-500 font-bold"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="quality"
              spy={true}
              smooth={true}
              duration={500}
              offset={-navHeight}
              className="text-gray-900 hover:text-teal-500 py-2 font-semibold w-full text-center"
              activeClass="text-teal-500 font-bold"
              onClick={() => setIsOpen(false)}
            >
              Quality
            </Link>
            <Link
              to="skill"
              spy={true}
              smooth={true}
              duration={500}
              offset={-navHeight}
              className="text-gray-900 hover:text-teal-500 py-2 font-semibold w-full text-center"
              activeClass="text-teal-500 font-bold"
              onClick={() => setIsOpen(false)}
            >
              Skill
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              offset={-navHeight}
              className="text-gray-900 hover:text-teal-500 py-2 font-semibold w-full text-center"
              activeClass="text-teal-500 font-bold"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              offset={-navHeight}
              className="text-gray-900 hover:text-teal-500 py-2 font-semibold w-full text-center"
              activeClass="text-teal-500 font-bold"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-navHeight}
              className="text-gray-900 hover:text-teal-500 py-2 font-semibold w-full text-center"
              activeClass="text-teal-500 font-bold"
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