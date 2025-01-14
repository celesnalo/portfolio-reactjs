import SectionTitle from './SectionTitle';

const experiences = [
  {
    year: '2024',
    company: 'HeadstarterAI',
    position: 'Software Development Engineering Intern',
    location: 'New York, (Remote)',
    duration: 'July 2024 – September 2024',
    description: [
      'Developed web hosting solutions and enhanced DNS management through hands-on projects',
      'Improved website performance and user satisfaction using Google Analytics insights',
      'Strengthened communication skills by collaborating with mentors from top global organizations'
    ]
  },
  {
    year: '2024',
    company: 'Healthcare Platform Project',
    position: 'UI/UX Design',
    duration: '2024',
    description: [
      'Conducted user research sessions to align product design with customer needs',
      'Led efforts to optimize workflows, bridging development and design',
      'Enhanced collaboration and communication across cross-functional teams'
    ]
  },
  {
    year: '2023',
    company: 'University of KwaZulu-Natal',
    position: 'Tech Society Member',
    location: 'Durban, South Africa',
    duration: 'Feb 2023 – Dec 2023',
    description: [
      'Participated in educational workshops, seminars, and events to enhance the technical skills of UKZN students',
      'Fostered a supportive environment and provided practical exposure to emerging technologies'
    ]
  }
];

const Experience = () => {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <SectionTitle title="Experience" />
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-8">
            <div className="w-24 flex-shrink-0">
              <span className="text-gray-400">{exp.year}</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{exp.position}</h3>
              <h4 className="text-lg text-blue-400 mb-1">{exp.company}</h4>
              {exp.location && (
                <p className="text-gray-400 mb-2">{exp.location}</p>
              )}
              {exp.duration && (
                <p className="text-gray-400 mb-4">{exp.duration}</p>
              )}
              <ul className="list-disc pl-5 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-300">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 