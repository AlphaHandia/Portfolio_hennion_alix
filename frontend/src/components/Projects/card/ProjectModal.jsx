import React from 'react';
import { useLanguage } from '../../LanguageSelector/LanguageContext';

const ProjectModal = ({ project, onClose }) => {
    const { language } = useLanguage();
  
    const handleBackgroundClick = (e) => {
      // Empêcher la propagation de l'événement au conteneur parent (la modal)
      e.stopPropagation();
    
      if (typeof onClose === 'function') {
        onClose();
      }
    };
  
    return (
        <div className="modal-background" onClick={handleBackgroundClick}>
          <div className="modal"style={{ zIndex: 2 }}>
           
            <div className="modal-content">
            <img src={project.picture} alt={project.title[language]} className='modalpicture' />
              <h2>{project.title[language]}</h2>
              <p>{project.description[language]}</p>
              <p>Languages: {project.languages.join(', ')}</p>
              <p>Skills Acquired: {project.skills_acquired.join(', ')}</p>
              <div className="project-links">
                {project.linkGithub && (
                  <a href={project.linkGithub} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
                {project.linkGithubPages && (
                  <a href={project.linkGithubPages} target="_blank" rel="noopener noreferrer">
                    GitHub Pages
                  </a>
                )}
              </div>
           
            </div>
          </div>
        </div>
      );
    };
    
  
  export default ProjectModal;