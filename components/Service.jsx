import React from "react";
import {
  Monitor,
  Code,
  Smartphone,
  Server,
  Layers,
  PenTool,
} from "lucide-react";
import { Link } from "react-scroll";

export default function Services({ className }) {
  const services = [
    {
      title: "Web Design",
      description:
        "I create visually appealing and user-friendly web designs tailored to your brand, ensuring a seamless experience across devices.",
      icon: <Monitor className="w-8 h-8 text-white" />,
    },
    {
      title: "Web Development",
      description:
        "I build robust and scalable web applications using modern technologies like React, Next.js, and Tailwind CSS.",
      icon: <Code className="w-8 h-8 text-white" />,
    },
    {
      title: "Mobile App Development",
      description:
        "I develop cross-platform mobile apps with React Native or Flutter, delivering efficient and engaging solutions.",
      icon: <Smartphone className="w-8 h-8 text-white" />,
    },
    {
      title: "Backend Development",
      description:
        "I create secure and efficient server-side applications using Node.js, Express, and MongoDB.",
      icon: <Server className="w-8 h-8 text-white" />,
    },
    {
      title: "Full-Stack Development",
      description:
        "I offer end-to-end development services, from front-end to back-end, ensuring a cohesive and high-quality product.",
      icon: <Layers className="w-8 h-8 text-white" />,
    },
    {
      title: "UI/UX Design",
      description:
        "I design intuitive and engaging user interfaces that enhance user satisfaction and improve usability.",
      icon: <PenTool className="w-8 h-8 text-white" />,
    },
  ];

  return (
    <section id="services" className={`relative py-16 bg-white ${className}`}>
      {/* Faint Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-8xl md:text-9xl font-bold text-teal-200 opacity-10 uppercase">
          My Services
        </h2>
      </div>

      <div className="container mx-auto relative z-10 px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          My Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-teal-500 rounded-full p-4 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-teal-500 hover:underline cursor-pointer"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}