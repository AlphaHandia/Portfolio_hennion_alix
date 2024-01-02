import React, { useState } from 'react';
import { useLanguage } from '../../LanguageSelector/LanguageContext';
import '../../../sass/components/_ProjectCard.scss';
import projectData from '../projectContent.json';
import ProjectModal from './ProjectModal';

const ProjectCard = ({ projectId }) => {
  const { language } = useLanguage();
  const [isHovered, setHovered] = useState(false);
  const project = projectData.projects.find((proj) => proj.id === projectId);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = () => {
    setModalOpen(true);
    setSelectedProject(project);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div
      className={`project-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={project.cover} alt={project.title[language]} className='coverCard' />
      <div className="project-details">
        <h3>{project.title[language]}</h3>
        <p>{project.resume[language]}</p>
        <button onClick={openModal}>Voir plus</button>
      </div>

      {isModalOpen && selectedProject && (
        <div className="modal-overlay">

            <button className="close-button" onClick={closeModal}>
              &#x2715;Close
            </button>
            <ProjectModal project={selectedProject} />
          
        </div>
      )}
    </div>
  );
};

export default ProjectCard;