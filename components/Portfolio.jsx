"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Project One",
      description: "A responsive website built with React and Tailwind CSS.",
      thumbnail: "https://via.placeholder.com/400x200",
      images: ["https://via.placeholder.com/600x400"],
      liveUrl: "https://project-one.com",
      isWebsite: true,
    },
    {
      title: "Project Two",
      description: "A mobile app for task management using React Native.",
      thumbnail: "https://via.placeholder.com/400x200",
      images: ["https://via.placeholder.com/600x400"],
      liveUrl: "/apks/project-two.apk",
      isWebsite: false,
    },
    {
      title: "Project Three",
      description: "An e-commerce site with Next.js and Stripe integration.",
      thumbnail: "https://via.placeholder.com/400x200",
      images: ["https://via.placeholder.com/600x400"],
      liveUrl: "https://project-three.com",
      isWebsite: true,
    },
    {
      title: "Project Four",
      description: "A fitness tracking app built with Flutter.",
      thumbnail: "https://via.placeholder.com/400x200",
      images: ["https://via.placeholder.com/600x400"],
      liveUrl: "/apks/project-four.apk",
      isWebsite: false,
    },
    {
      title: "Project Five",
      description: "A blog platform using Next.js and Markdown.",
      thumbnail: "https://via.placeholder.com/400x200",
      images: ["https://via.placeholder.com/600x400"],
      liveUrl: "https://project-five.com",
      isWebsite: true,
    },
    {
      title: "Project Six",
      description: "A weather app with real-time API data.",
      thumbnail: "https://via.placeholder.com/400x200",
      images: ["https://via.placeholder.com/600x400"],
      liveUrl: "/apks/project-six.apk",
      isWebsite: false,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(
          (project) => project.isWebsite === (filter === "website")
        );

  return (
    <section id="portfolio" className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded ${
              filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("website")}
            className={`px-4 py-2 rounded ml-2 ${
              filter === "website" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Websites
          </button>
          <button
            onClick={() => setFilter("mobile")}
            className={`px-4 py-2 rounded ml-2 ${
              filter === "mobile" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Mobile Apps
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onViewClick={setSelectedProject}
            />
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