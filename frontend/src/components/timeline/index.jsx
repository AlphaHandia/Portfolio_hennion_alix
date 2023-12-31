import React from 'react';
import 'react-calendar-timeline/lib/Timeline.css';
import projectData from '../Projects/projectContent.json';
import ProjectCard from '../Projects/card/timelinecard';


const ProjectTimeline = () => {
  const sortedProjects = projectData.projects.sort(
    (a, b) => new Date(a.date_realization) - new Date(b.date_realization)
  );

  const filteredProjects = sortedProjects.filter((project) => {
    const projectDate = new Date(project.date_realization);

    if (isNaN(projectDate)) {
      return false; // Exclure les projets avec des dates invalides
    }

    const startDate = new Date(2023, 2, 1); // Mars est le mois 2 (0-indexé)
    const endDate = new Date(2023, 11, 31); // Décembre est le mois 11

    const isInDateRange = projectDate >= startDate && projectDate <= endDate;

    return isInDateRange;
  });

  const handleScroll = (direction) => {
    const timeline = document.querySelector('.project-timeline');
    const scrollAmount = 200; // Ajustez la valeur de défilement selon votre préférence

    if (direction === 'left') {
      timeline.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
      timeline.scrollLeft += scrollAmount;
    }
  };
  return (
    <div>
      <div className="scroll-buttons">
        <button onClick={() => handleScroll('left')}><i class="fa-solid fa-arrow-left"></i></button>
        <button onClick={() => handleScroll('right')}><i class="fa-solid fa-arrow-right"></i></button>
      </div>
      <div className="project-timeline">
        {filteredProjects.map((project, index) => (
          <div key={project.id} className={`project-timeline-item ${index % 2 === 0 ? 'even' : 'odd'}`}>
            <div className="project-month">
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
  return date.toLocaleString('default', { month: 'long' });
};

export default ProjectTimeline;
