import { Eye } from "lucide-react";
import { useState } from "react";

export default function ProjectCard({ project, onViewClick }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
      {imageError ? (
        <div className="w-full h-48 flex items-center justify-center bg-gray-200 rounded-lg mb-4">
          <p className="text-gray-500">Image not available</p>
        </div>
      ) : (
        <img
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
          className="w-full h-48 object-cover rounded-lg mb-4"
          onError={handleImageError}
        />
      )}
      <h3 className="text-xl font-bold mb-2 flex justify-between items-center">
        {project.title}
        <span
          className={`text-sm ${
            project.isWebsite
              ? "bg-blue-100 text-blue-800"
              : "bg-green-100 text-green-800"
          } px-2 py-1 rounded`}
        >
          {project.isWebsite ? "Website" : "Mobile App"}
        </span>
      </h3>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <button
        onClick={() => onViewClick(project)}
        className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-transform transform hover:scale-105"
      >
        <span>View</span>
        <Eye className="w-5 h-5" />
      </button>
    </div>
  );
}