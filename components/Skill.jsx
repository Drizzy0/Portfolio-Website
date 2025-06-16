import React from "react";

export default function Skill({ className }) {
  const skills = [
    { name: "HTML", percentage: 95, color: "bg-teal-500" },
    { name: "Tailwind CSS", percentage: 90, color: "bg-yellow-500" },
    { name: "JavaScript", percentage: 90, color: "bg-red-500" },
    { name: "React", percentage: 85, color: "bg-teal-500" },
    { name: "Next.js", percentage: 80, color: "bg-gray-800" },
    { name: "Node.js", percentage: 75, color: "bg-teal-500" },
    { name: "MongoDB", percentage: 70, color: "bg-yellow-500" },
    { name: "Git", percentage: 85, color: "bg-orange-500" },
  ];

  return (
    <section id="skill" className={`relative py-16 bg-white ${className}`}>
      {/* Faint Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-8xl md:text-9xl font-bold text-teal-200 opacity-10 uppercase">
          My Skills
        </h2>
      </div>

      <div className="container mx-auto relative z-10 px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          My Skills
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-800 font-semibold">
                  {skill.name}
                </span>
                <span className="text-gray-600">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`${skill.color} h-3 rounded-full`}
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}