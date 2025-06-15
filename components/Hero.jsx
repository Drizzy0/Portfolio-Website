import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Itoya Eromosele</h1>
          <p className="text-xl mb-6">
            A passionate developer creating awesome web experiences.
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
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
}