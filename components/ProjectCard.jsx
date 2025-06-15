import { Eye } from "lucide-react";

export default function ProjectCard({ project, onViewClick }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
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