export default function ProjectModal({ project, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg max-w-3xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <p className="text-gray-800 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, earum
          eos non velit delectus error vel officiis minima aut! Repudiandae hic
          illo neque, mollitia sunt quisquam doloremque consequuntur harum, quae
          aperiam iste ipsam nihil quo officiis accusamus sed veniam, in
          possimus illum facere nulla. Culpa ullam voluptatem est, iure
          doloribus nostrum eum nobis vel laboriosam ipsa dignissimos asperiores
          excepturi aliquid facere illum saepe nisi ad, quidem sequi? Error,
          commodi nulla ab voluptatibus fugit eius molestiae praesentium!
          Reiciendis dignissimos nulla excepturi quis quisquam libero modi iste
          repellendus assumenda architecto repellat dolor at suscipit aliquam ad
          voluptatem, asperiores expedita esse, eos itaque?
        </p>
        <div className="flex overflow-x-auto space-x-4 mb-4">
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${project.title} screenshot ${index + 1}`}
              className="w-64 h-48 object-cover rounded"
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
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}