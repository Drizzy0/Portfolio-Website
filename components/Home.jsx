"use client";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function Home({ className }) {
  return (
    <section
      className={`relative w-full bg-teal-500 text-white py-24 min-h-screen flex items-center justify-center ${className}`}
    >
      <div className="flex flex-col gap-5 md:gap-10 md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
          <Image
            src="/profile.jpeg"
            alt="Itoya Eromosele"
            width={400}
            height={400}
            loading="lazy"
            className="rounded-full w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 border-1 border-white shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left order-1 md:order-2">
          <h3 className="text-xl md:text-2xl mb-2">I'm</h3>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 uppercase">
            Itoya Eromosele
          </h1>
          <p className="text-2xl md:text-3xl mb-6">
            <TypeAnimation
              sequence={["Web Developer", 2000, "App Developer", 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-semibold"
            />
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="/resume.pdf"
              download="Itoya_Eromosele_Resume.pdf"
              className="text-white py-2 px-6 rounded-full border-2 border-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </div>
    </section>
  );
}
