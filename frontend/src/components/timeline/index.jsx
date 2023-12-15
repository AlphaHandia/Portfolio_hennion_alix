import React from 'react';
import 'react-calendar-timeline/lib/Timeline.css'; // Assurez-vous d'importer les styles CSS

import projectData from '../Projects/projectContent.json';
import ProjectCard from '../Projects/card/timelinecard';

const ProjectTimeline = () => {
  // Triez les projets par date de réalisation
  const sortedProjects = projectData.projects.sort(
    (a, b) => new Date(a.date_realization) - new Date(b.date_realization)
  );

  // Filtrez les projets pour ne conserver que ceux de mars à décembre 2023
// ...

// Filtrez les projets pour ne conserver que ceux de mars à décembre 2023
const filteredProjects = sortedProjects.filter(
  (project) => {
    const projectDate = new Date(project.date_realization);
    
    // Vérifiez si la date est valide
    if (isNaN(projectDate)) {
    
      return false; // Exclure les projets avec des dates invalides
    }

    const startDate = new Date(2023, 2, 1); // Mars est le mois 2 (0-indexé)
    const endDate = new Date(2023, 11, 31); // Décembre est le mois 11

 

    const isInDateRange = projectDate >= startDate && projectDate <= endDate;

   

    return isInDateRange;
  }
);



  return (
    <div className="project-timeline">
      {filteredProjects.map((project, index) => (
        <div key={project.id} className={`project-timeline-item ${index % 2 === 0 ? 'even' : 'odd'}`}>
          <div className="project-month">{getMonthString(project.date_realization)}</div>
          <ProjectCard projectId={project.id} />
        </div>
      ))}
    </div>
  );
};

// Fonction utilitaire pour obtenir le mois en chaîne à partir d'une date
const getMonthString = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString('default', { month: 'long' });
};

export default ProjectTimeline;
