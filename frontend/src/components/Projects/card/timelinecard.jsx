import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../../sass/components/_ProjectCard.scss'; // Assurez-vous que le chemin est correct
import { useLanguage } from '../../LanguageSelector/LanguageContext';
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

  const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
      &rarr;
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
      &larr;
    </div>
  );

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setHovered(false), // Fix pour réinitialiser isHovered
  };

  return (
    <div
      className={`project-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Slider {...settings}>
        <div key="slide1">
          <img src={project.cover} alt={project.title[language]} />
          <div className="project-details">
            <h3>{project.title[language]}</h3>
            <p>{project.resume[language]}</p>
            <button onClick={openModal}>Voir plus</button>
          </div>
        </div>
       
      </Slider>

      {isModalOpen && selectedProject && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={closeModal}>
              &#x2715;
            </button>
            <ProjectModal project={selectedProject} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
