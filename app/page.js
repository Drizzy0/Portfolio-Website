"use client";
import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import HomeSection from "@/components/Home";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Service from "@/components/Service";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Quality from "@/components/Quality";
import { Link } from "react-scroll";
import { ArrowUp } from "lucide-react";

export default function Home() {
  const [showNavBar, setShowNavBar] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setShowNavBar(scrollY > 0);

      setShowScrollTop(scrollY > 150);
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavBar show={showNavBar} />
      <HomeSection id="home" />
      <About />
      <Quality />
      <Skill />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
      {showScrollTop && (
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={0}
          className="fixed bottom-8 right-8 bg-teal-500 text-white p-3 rounded-full shadow-lg hover:bg-teal-600 transition-colors cursor-pointer animate-bounce"
        >
          <ArrowUp className="w-6 h-6" />
        </Link>
      )}
    </>
  );
}