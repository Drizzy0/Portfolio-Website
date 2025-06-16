import { CheckCircle, Lightbulb, Clock } from "lucide-react";

export default function Quality() {
  return (
    <section id="quality" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          My Qualities
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          As a web and app developer, I bring a set of qualities that ensure
          high-quality, user-focused solutions tailored to your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <CheckCircle className="w-12 h-12 text-teal-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Reliability
            </h3>
            <p className="text-gray-600">
              I deliver projects on time with consistent quality, ensuring every
              detail is polished and functional.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <Lightbulb className="w-12 h-12 text-teal-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Creativity
            </h3>
            <p className="text-gray-600">
              I design innovative solutions that are both visually appealing and
              highly functional, enhancing user experiences.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <Clock className="w-12 h-12 text-teal-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Efficiency
            </h3>
            <p className="text-gray-600">
              I write clean, optimized code to build fast and scalable
              applications that meet modern standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}