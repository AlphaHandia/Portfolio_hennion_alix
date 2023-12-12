import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProjectCard from './ProjectCard';

// Suite de tests pour le composant ProjectCard
describe('ProjectCard Component', () => {
  // Test : le composant rend sans erreur
  it('renders without crashing', () => {
    render(<ProjectCard project={{/* mock data */}} />);
  });

  // Test : le composant change d'état lorsqu'il est survolé
  it('changes state when hovered over', () => {
    render(<ProjectCard project={{/* mock data */}} />);
    const projectCard = screen.getByTestId('project-card');

    fireEvent.mouseEnter(projectCard);
    expect(projectCard).toHaveClass('hovered');

    fireEvent.mouseLeave(projectCard);
    expect(projectCard).not.toHaveClass('hovered');
  });
});

// Explications en français
/*
 - Le premier test s'assure que le composant est rendu sans erreur.
 - Le deuxième test vérifie si le composant change d'état lorsqu'il est survolé.
*/

// Explanations in English
/*
 - The first test ensures that the component renders without errors.
 - The second test checks if the component changes state when hovered over.
*/
