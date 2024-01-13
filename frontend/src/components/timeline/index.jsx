import React from "react";
import "react-calendar-timeline/lib/Timeline.css";
import projectData from "../Projects/projectContent.json";
import ProjectCard from "../Projects/card/timelinecard";
import { useTheme } from "../theme-switch/ThemeContext"; // Assurez-vous d'avoir le chemin d'importation correct

const ProjectTimeline = () => {
  const { state: themeState } = useTheme();

  const sortedProjects = projectData.projects.sort(
    (a, b) => new Date(a.date_realization) - new Date(b.date_realization)
  );

  const filteredProjects = sortedProjects.filter((project) => {
    const projectDate = new Date(project.date_realization);

    if (isNaN(projectDate)) {
      return false; // Exclusion des projets avec des dates invalides
    }

    const startDate = new Date(2023, 2, 1); // Mars est le mois 2 (0-indexé)
    const endDate = new Date(2023, 11, 31); // Décembre est le mois 11

    const isInDateRange = projectDate >= startDate && projectDate <= endDate;

    return isInDateRange;
  });

  const handleScroll = (direction) => {
    const timeline = document.querySelector(".project-timeline");
    const scrollAmount = 275; // Ajustement de la valeur de défilement selon votre préférence

    if (direction === "left") {
      timeline.scrollLeft -= scrollAmount;
    } else if (direction === "right") {
      timeline.scrollLeft += scrollAmount;
    }
  };

  return (
    <div>
      <div className="scroll-buttons">
        <button onClick={() => handleScroll("left")} aria-label="scroll to left">
          <i className="fa-solid fa-arrow-left" style={{ color: themeState.currentTheme === 'garden' ? 'rgb(255, 96, 0)' : 'rgb(0, 119, 255)' }}></i>
        </button>
        <button onClick={() => handleScroll("right")} aria-label="scroll to right">
          <i className="fa-solid fa-arrow-right" style={{ color: themeState.currentTheme === 'garden' ? 'rgb(255, 96, 0)' : 'rgb(0, 119, 255)' }}></i>
        </button>
      </div>
      <div className={`project-timeline ${themeState.currentTheme === 'garden' ? 'garden-theme' : ''}`}>
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`project-timeline-item ${
              index % 2 === 0 ? "even" : "odd"
            }`}
          >
            <div className="project-month" style={{ color: themeState.currentTheme === 'garden' ? 'rgb(255, 96, 0)' : '#00AD03', textShadow: '1px 1px 1px #fac123', fontSize: '60px', fontWeight: 'bold', letterSpacing: '2px', whiteSpace: 'nowrap' }}>
              {getMonthString(project.date_realization)} &gt;
            </div>
            <ProjectCard projectId={project.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

const getMonthString = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString("default", { month: "long" });
};

export default ProjectTimeline;
