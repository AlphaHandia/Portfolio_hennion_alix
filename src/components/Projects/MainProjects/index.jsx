import React, { useState } from "react";
import { useLanguage } from "../../LanguageSelector/LanguageContext";
import { useTheme } from "../../theme-switch/ThemeContext";
import "../../../sass/components/_MainProject.scss";
import projectData from "../projectContent.json";
import translations from "../../../initi18n/content/translation.json";

const MainProject = () => {
  const { language } = useLanguage();
  const { state: themeState } = useTheme();
  const mainProject = translations.mainProject;

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
      <h1
        style={{
          color:
            themeState.currentTheme === "garden" ? "rgb(32,163,56)" : "#00AD03",
          textShadow:
            themeState.currentTheme === "garden"
              ? "rgb(187,138,0) 1px 1px 1px"
              : "none",
        }}
      >
        {mainProject.projectTitle[language]}
      </h1>
      <div
        className={`main-project ${
          themeState.currentTheme === "garden" ? "garden-theme" : ""
        }`}
        id="mainProject"
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${
              hoveredProject === project.id ? "hovered" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundColor:
                themeState.currentTheme === "garden"
                  ? "rgba(190, 240, 241, 0.6)"
                  : "rgba(255, 184, 93, 0.3)",
              color:
                themeState.currentTheme === "garden"
                  ? "rgba(252, 92, 17)"
                  : "antiquewhite",
            }}
          >
            <img
              src={project.picture}
              alt={project.title[language]}
              loading="lazy"
            />
            <div className="project-details">
              <h2>{project.title[language]}</h2>
              <p>{project.description[language]}</p>
              <p>
                {mainProject.dateLabel[language]}: {project.date_realization}
              </p>
              <p>
                {mainProject.languagesLabel[language]}:{" "}
                {project.languages.join(", ")}
              </p>
              <p>
                {mainProject.skillsLabel[language]}:{" "}
                {project.skills_acquired.join(", ")}
              </p>
              {project.linkGithub && (
                <p>
                  <a
                    href={project.linkGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color:
                        themeState.currentTheme === "garden"
                          ? "rgb(255, 96, 0)"
                          : "#007bff",
                      textDecoration: "underline",
                      transition: "color 0.3s ease-out",
                    }}
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
                    style={{
                      color:
                        themeState.currentTheme === "garden"
                          ? "rgb(255, 96, 0)"
                          : "#007bff",
                      textDecoration: "underline",
                      transition: "color 0.3s ease-out",
                    }}
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