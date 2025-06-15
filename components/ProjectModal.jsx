export default function ProjectModal({ project, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Project image ${index + 1}`}
              className="w-full h-48 object-cover rounded"
            />
          ))}
        </div>
        <div className="flex justify-between items-center mt-6">
          <a
            href={project.liveUrl}
            target={project.isWebsite ? "_blank" : ""}
            rel={project.isWebsite ? "noopener noreferrer" : ""}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            {project.isWebsite ? "View Live Project" : "Download APK"}
          </a>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}