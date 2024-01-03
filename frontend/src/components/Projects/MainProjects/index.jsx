import React, { useState } from "react";
import { useLanguage } from "../../LanguageSelector/LanguageContext";
import "../../../sass/components/_MainProject.scss";
import projectData from "../projectContent.json";

const MainProject = () => {
  const { language } = useLanguage();
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (projectId) => {
    setHoveredProject(projectId);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  const filteredProjects = projectData.projects.filter((project) =>
    [7, 8, 9].includes(project.id)
  );

  return (
    <div className="main-content">
      <h1>Mes Projets de Développeur</h1>
      <div className="main-project" id="mainProject">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${
              hoveredProject === project.id ? "hovered" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={project.picture} alt={project.title[language]} />
            <div className="project-details">
              <h2>{project.title[language]}</h2>
              <p>{project.description[language]}</p>
              <p>Date de réalisation: {project.date_realization}</p>
              <p>Langages: {project.languages.join(", ")}</p>
              <p>Compétences acquises: {project.skills_acquired.join(", ")}</p>
              {project.linkGithub && (
                <p>
                  <a
                    href={project.linkGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </p>
              )}
              {project.linkgithubPages && (
                <p>
                  <a
                    href={project.linkgithubPages}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Pages
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainProject;
