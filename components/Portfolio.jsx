"use client";
import { Eye } from "lucide-react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Project One",
      description: "A brief description of your first project.",
      thumbnail: "https://via.placeholder.com/400x200",
      images: [
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400",
      ],
      liveUrl: "https://project-one.com",
      isWebsite: true,
    },
    {
      title: "Project Two",
      description: "A brief description of your second project.",
      thumbnail: "https://via.placeholder.com/400x200",
      images: ["https://via.placeholder.com/600x400"],
      liveUrl: "/apks/project-two.apk",
      isWebsite: false,
    },
    {
      title: "Project Three",
      description: "A brief description of your third project.",
      thumbnail: "https://via.placeholder.com/400x200",
      images: ["https://via.placeholder.com/600x400"],
      liveUrl: "https://project-three.com",
      isWebsite: true,
    },
    {
      title: "Project Four",
      description: "A brief description of your fourth project.",
      thumbnail: "https://via.placeholder.com/400x200",
      images: ["https://via.placeholder.com/600x400"],
      liveUrl: "/apks/project-four.apk",
      isWebsite: false,
    },
    {
      title: "Project Five",
      description: "A brief description of your fifth project.",
      thumbnail: "https://via.placeholder.com/400x200",
      images: ["https://via.placeholder.com/600x400"],
      liveUrl: "https://project-five.com",
      isWebsite: true,
    },
    {
      title: "Project Six",
      description: "A brief description of your sixth project.",
      thumbnail: "https://via.placeholder.com/400x200",
      images: ["https://via.placeholder.com/600x400"],
      liveUrl: "/apks/project-six.apk",
      isWebsite: false,
    },
  ];

  return (
    <section id="portfolio" className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <button
                onClick={() => setSelectedProject(project)}
                className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-transform transform hover:scale-105"
              >
                <span>View</span>
                <Eye className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}