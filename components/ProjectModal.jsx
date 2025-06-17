"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
    setImageError(false); 
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
    setImageError(false); 
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const hasMultipleImages = project.images.length > 1;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-r from-white to-gray-100 p-6 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative transform transition-all duration-300 scale-95 hover:scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          {project.title}
        </h2>

        <div className="relative mb-6">
          {imageError || !project.images[currentImageIndex] ? (
            <div className="w-full h-96 flex items-center justify-center bg-gray-200 rounded-lg shadow-md">
              <p className="text-gray-500">Image not available</p>
            </div>
          ) : (
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-md"
              onError={handleImageError}
            />
          )}
          {hasMultipleImages && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </>
          )}
        </div>

        <p className="text-gray-700 mb-6 text-center">{project.description}</p>

        <div className="flex justify-center mt-6">
          <a
            href={project.liveUrl}
            target={project.isWebsite ? "_blank" : ""}
            rel={project.isWebsite ? "noopener noreferrer" : ""}
            className="bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 transition-colors shadow-md text-lg font-semibold"
          >
            {project.isWebsite ? "View Live Project" : "Download APK"}
          </a>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}