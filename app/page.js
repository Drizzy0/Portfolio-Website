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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNavBar(true);
      } else {
        setShowNavBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showNavBar && <NavBar />}
      <HomeSection id="home" />
      <About />
      <Quality />
      <Skill />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
      {showNavBar && (
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