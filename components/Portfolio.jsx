"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const allThumbnails = [
    "/images/projects/wireframe-sketch.jpg", 
    "/images/projects/seo-scrabble.jpg", 
    "/images/projects/workspace-neon.jpg", 
    "/images/projects/macbook-google.jpg", 
    "/images/projects/laptop-tablet.jpg", 
    "/images/projects/laptop-code.jpg", 
  ];

  const projects = [
    {
      title: "Wireframe Design Tool",
      description: "A tool for creating wireframes for web and app interfaces.",
      thumbnail: "/images/projects/wireframe-sketch.jpg",
      images: allThumbnails, 
      liveUrl: "https://wireframe-tool.com",
      isWebsite: true,
    },
    {
      title: "SEO Optimization App",
      description: "An app to analyze and improve website SEO performance.",
      thumbnail: "/images/projects/seo-scrabble.jpg",
      images: allThumbnails,
      liveUrl: "/apks/seo-app.apk",
      isWebsite: false,
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio site with a modern neon aesthetic.",
      thumbnail: "/images/projects/workspace-neon.jpg",
      images: allThumbnails,
      liveUrl: "https://portfolio-neon.com",
      isWebsite: true,
    },
    {
      title: "Search Engine Project",
      description: "A custom search engine interface built with React.",
      thumbnail: "/images/projects/macbook-google.jpg",
      images: allThumbnails,
      liveUrl: "https://search-engine.com",
      isWebsite: true,
    },
    {
      title: "Invoicing App",
      description: "A mobile app for managing invoices and pricing plans.",
      thumbnail: "/images/projects/laptop-tablet.jpg",
      images: allThumbnails,
      liveUrl: "/apks/invoicing-app.apk",
      isWebsite: false,
    },
    {
      title: "Weather App",
      description: "A weather app with real-time API data.",
      thumbnail: "/images/projects/laptop-code.jpg",
      images: allThumbnails,
      liveUrl: "/apks/weather-app.apk",
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