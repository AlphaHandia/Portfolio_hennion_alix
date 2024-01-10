import React, { useState, useEffect } from "react";
import { useLanguage } from "../../LanguageSelector/LanguageContext";
import { useTheme } from "../../theme-switch/ThemeContext";
import "../../../sass/components/_ProjectCard.scss";
import projectData from "../projectContent.json";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ projectId }) => {
  const { language } = useLanguage();
  const { state: themeState } = useTheme();
  const [isHovered, setHovered] = useState(false);
  const project = projectData.projects.find((proj) => proj.id === projectId);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
    // Ajoutez un effet useEffect pour ajouter et supprimer l'event listener
    useEffect(() => {
      const handleKeyPress = (e) => {
        if (e.key === "Escape") {
          closeModal();
        }
      };
  
      // Ajoute l'event listener lors du montage du composant
      window.addEventListener("keydown", handleKeyPress);
  
      // Nettoie l'event listener lors du démontage du composant
      return () => {
        window.removeEventListener("keydown", handleKeyPress);
      };
    }, []); // Le tableau de dépendances vide signifie que l'effet s'exécute uniquement lors du montage/démontage du composant
  
   
  const openModal = () => {
    setModalOpen(true);
    setSelectedProject(project);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const cardStyle = {
    backgroundColor: themeState.currentTheme === 'garden' ? 'rgba(190, 240, 241, 0.6)' : 'rgba(252, 92, 17, 0.3)',
    color: themeState.currentTheme === 'garden' ? 'rgba(252, 92, 17)' : 'rgb(190, 240, 241)',
  };

  const buttonStyle = {
    color: themeState.currentTheme === 'garden' ? 'rgba(252, 92, 17)' : 'rgb(190, 240, 241)',
    textDecoration: 'none',
    transition: 'color 0.3s ease-out',
  };

  const hoverButtonStyle = {
    color: themeState.currentTheme === 'garden' ? 'rgba(252, 92, 17)' : 'rgb(190, 240, 241)',
    textDecoration: 'underline',
  };

  return (
    <div
      className={`project-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={cardStyle}
    >
      <img
        src={project.cover}
        alt={project.title[language]}
        className="coverCard"
      />
      <div className="project-details">
        <h3>{project.title[language]}</h3>
        <p>{project.resume[language]}</p>
        <button
          className="open-modal"
          onClick={openModal}
          style={isHovered ? hoverButtonStyle : buttonStyle}
        >
          Voir plus
        </button>
      </div>

      {isModalOpen && selectedProject && (
        <div className="modal-overlay">
          <button className="close-button" onClick={closeModal}>
            &#x2715; Close
          </button>
          <ProjectModal project={selectedProject} />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
