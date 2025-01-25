const ProjectCard = ({ title, description, livePreview, achievements, technologies, thumbnail }) => {
  if (!title || !description) {
    return null;
  }

  // Function to handle the "View Project" action
  const handleViewProject = () => {
    window.open(livePreview, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Thumbnail Section */}
      <div 
        className="relative w-full h-64 overflow-hidden cursor-pointer"
        onClick={handleViewProject} // Thumbnail click triggers the action
      >
        <img 
          src={thumbnail} 
          alt={`${title} thumbnail`} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent thumbnail click from triggering
              handleViewProject();
            }}
            className="opacity-0 hover:opacity-100 transform translate-y-4 hover:translate-y-0 transition-all duration-300 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white"
          >
            View Project
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Title and Description */}
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-3 line-clamp-3 text-sm h-16 overflow-hidden">{description}</p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;