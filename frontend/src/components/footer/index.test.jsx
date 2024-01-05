import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../footer/index';

// Suite de tests pour le composant Footer
describe('Footer Component', () => {
  // Test : le composant rend sans erreur
  it('renders without crashing', () => {
    render(<Footer />);
  });

  // Test : le composant affiche les informations personnelles
  it('displays personal information', () => {
    render(<Footer />);
    const phoneNumber = screen.getByText('06-04-05-83-70');
    const email = screen.getByText('henion.pierre.alix@hotmail.fr');

    expect(phoneNumber).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });

  // Test : le composant affiche les liens GitHub et LinkedIn
  it('displays GitHub and LinkedIn links', () => {
    render(<Footer />);
    const githubLink = screen.getByTestId('github-link');
    const linkedinLink = screen.getByTestId('linkedin-link');

    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
  });

  // Test : le composant affiche les liens vers le cahier des charges et le cahier de recettes
  it('displays links to specification and recipe documents', () => {
    render(<Footer />);
    const specificationLink = screen.getByTestId('specification-link');
    const recipeLink = screen.getByTestId('recipe-link');

    expect(specificationLink).toBeInTheDocument();
    expect(recipeLink).toBeInTheDocument();
  });
});

// Explications en français
/*
 - Le premier test s'assure que le composant est rendu sans erreur.
 - Le deuxième test vérifie la présence des informations personnelles.
 - Le troisième test vérifie la présence des liens GitHub et LinkedIn.
 - Le quatrième test vérifie la présence des liens vers le cahier des charges et le cahier de recettes.
*/

// Explanations in English
/*
 - The first test ensures that the component renders without errors.
 - The second test checks for the presence of personal information.
 - The third test checks for the presence of GitHub and LinkedIn links.
 - The fourth test checks for the presence of links to the specification and recipe documents.
*/
