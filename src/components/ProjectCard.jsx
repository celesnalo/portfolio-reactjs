const ProjectCard = ({ title, description, livePreview, achievements, technologies }) => {
    if (!title || !description) {
      return null;
    }
  
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          
          {achievements?.length > 0 && (
            <div className="mb-4">
              <h4 className="font-medium mb-2">Key Achievements:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {achievements.map((achievement, index) => (
                  <li key={index} className="text-sm text-gray-600">{achievement}</li>
                ))}
              </ul>
            </div>
          )}
  
          {technologies?.length > 0 && (
            <div className="mb-4">
              <h4 className="font-medium mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {livePreview && (
          <a
            href={livePreview}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Live Preview
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;