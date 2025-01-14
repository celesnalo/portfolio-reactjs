import { useState } from 'react';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "GitHub User Search Application",
      description: "A real-time GitHub user search application with detailed profile viewing capabilities.",
      livePreview: "https://alx-fe-reactjs-brown.vercel.app/",
      achievements: [
        "Developed a GitHub User Search Application using React, integrating the GitHub API for real-time data fetching",
        "Enhanced API interactions with Axios, handling dynamic search queries and displaying detailed user profiles",
        "Deployed the application to Vercel, ensuring a live and optimized production environment"
      ],
      technologies: ["React", "GitHub API", "Axios", "Vercel"]
    },
    {
      id: 2,
      title: "Currency Converter",
      description: "FE Capstone Project featuring real-time currency conversion capabilities.",
      livePreview: "https://currency-xchange-x7lu.vercel.app/",
      achievements: [
        "Integrated ExchangeRate-API to fetch and display real-time exchange rates with seamless conversions",
        "Deployed the application with a mobile-friendly UI and included error handling for unsupported currencies"
      ],
      technologies: ["React", "ExchangeRate-API", "Tailwind CSS"]
    }
  ];

  if (!projects?.length) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p>No projects available</p>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto py-12 px-4" id="projects">
      <SectionTitle title="Projects" />
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            {...project} 
          />
        ))}
      </div>
    </section>
  );
};

export default Projects; 