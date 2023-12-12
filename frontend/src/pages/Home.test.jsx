import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

// Suite de tests pour le composant Home
describe('Home Component', () => {
  // Test : le composant rend sans erreur
  it('renders without crashing', () => {
    render(<Home />);
  });

  // Test : le composant affiche la NavBar
  it('displays the NavBar', () => {
    render(<Home />);
    const navBar = screen.getByRole('navigation');
    expect(navBar).toBeInTheDocument();
  });

  // Test : le composant affiche le Banner
  it('displays the Banner', () => {
    render(<Home />);
    const banner = screen.getByText('Short Presentation:');
    expect(banner).toBeInTheDocument();
  });

  // Test : le composant affiche le TimeLine
  it('displays the TimeLine', () => {
    render(<Home />);
    const timeLine = screen.getByText('Barre Latérale');
    expect(timeLine).toBeInTheDocument();
  });

  // Test : le composant affiche les Projects
  it('displays the Projects', () => {
    render(<Home />);
    const projects = screen.getByText('Project 1');
    expect(projects).toBeInTheDocument();
  });

  // Test : le composant affiche le Form
  it('displays the Form', () => {
    render(<Home />);
    const form = screen.getByLabelText('Name:');
    expect(form).toBeInTheDocument();
  });
});

// Explications en français
/*
 - Le premier test s'assure que le composant est rendu sans erreur.
 - Les tests suivants vérifient si le composant affiche chaque sous-composant attendu.
*/

// Explanations in English
/*
 - The first test ensures that the component renders without errors.
 - The following tests check if the component displays each expected subcomponent.
*/
