import React, { useState } from 'react';
import '../../../sass/components/_ProjectCard.scss';
import projectData from '../projectContent.json';
const ProjectCard = ({ projectId }) => {
  const [isHovered, setHovered] = useState(false);
  const project = projectData.projects.find((proj) => proj.id === projectId);


  return (
    <div
      className={`project-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={project.cover} alt={project.title} />
      <div className="project-details">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {/* Ajoutez plus de détails au besoin */}
      </div>
    </div>
  );
};

export default ProjectCard;
