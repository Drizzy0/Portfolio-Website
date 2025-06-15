import Image from "next/image";

export default function Hero({ className }) {
  return (
    <section
      className={`bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20 ${className}`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Itoya Eromosele</h1>
          <p className="text-2xl mb-4">Web & App Developer</p>
          <p className="text-xl mb-6">
            A passionate developer creating awesome Web & App experiences.
          </p>
          <a
            href="/resume.pdf"
            download="Itoya_Eromosele_Resume.pdf"
            className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-200"
          >
            Download Resume
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center pt-8 md:mt-0">
          <Image
            src="/profile.jpeg"
            alt="Itoya Eromosele"
            width={320}
            height={320}
            loading="lazy"
            className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
          />
        </div>
      </div>
    </section>
  );
}