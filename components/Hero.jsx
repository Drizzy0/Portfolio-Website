import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Itoya Eromosele</h1>
          <p className="text-xl">
            A passionate developer creating awesome web experiences.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <Image
            src="/profile.jpeg"
            alt="Itoya Eromosele"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
