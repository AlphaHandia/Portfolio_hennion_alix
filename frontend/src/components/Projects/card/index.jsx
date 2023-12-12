import React, { useState } from 'react';
import '../../../sass/components/_ProjectCard.scss';

const ProjectCard = ({ project }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      className={`project-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
   
    </div>
  );
};

export default ProjectCard;
