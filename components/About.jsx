import Image from "next/image";
import { Link } from "react-scroll";

export default function About({ className }) {
  return (
    <section
      id="about"
      className={`relative py-16 px-4 sm:px-6 md:px-8 bg-white ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-8xl md:text-9xl font-bold text-gray-200 opacity-10 uppercase">
          About Me
        </h2>
      </div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Image
              src="/profile.jpeg"
              alt="Itoya Eromosele"
              width={300}
              height={300}
              loading="lazy"
              className="rounded-lg w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              Web & App Developer
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-4">
              I'm Itoya Eromosele, a web & app developer. I enjoy building
              projects and improving my skills.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              My goal is to become a full-stack developer and contribute to
              open-source projects. I am currently working on several personal
              projects to enhance my skills and gain more experience in the
              field.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-base text-gray-800 py-2">
                  <span className="font-bold">Name:</span> Itoya Eromosele
                </p>
                <p className="text-base text-gray-800 py-2">
                  <span className="font-bold">Degree:</span> Master
                </p>
                <p className="text-base text-gray-800 py-2">
                  <span className="font-bold">Phone:</span> +123 456 7890
                </p>
                <p className="text-base text-gray-800 py-2">
                  <span className="font-bold">Address:</span> Lagos, Nigeria
                </p>
              </div>
              <div>
                <p className="text-base text-gray-800 py-2">
                  <span className="font-bold">Birthday:</span> 1 January 2000
                </p>
                <p className="text-base text-gray-800 py-2">
                  <span className="font-bold">Experience:</span> 1 Year
                </p>
                <p className="text-base text-gray-800 py-2">
                  <span className="font-bold">Email:</span> eromotoya@gmail.com
                </p>
                <p className="text-base text-gray-800 py-2">
                  <span className="font-bold">Freelance:</span> Available
                </p>
              </div>
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="border-2 border-teal-300 text-teal-500 py-2 px-6 rounded-full hover:bg-teal-500 hover:text-white transition-colors cursor-pointer"
              >
                Hire Me
              </Link>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="border-2 border-teal-300 text-teal-500 py-2 px-6 rounded-full hover:bg-teal-500 hover:text-white transition-colors cursor-pointer"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}