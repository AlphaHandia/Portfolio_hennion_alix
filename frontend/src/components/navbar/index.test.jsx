import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

// Suite de tests pour le composant NavBar
describe('NavBar Component', () => {
  // Test : le composant rend sans erreur
  it('renders without crashing', () => {
    render(<NavBar />);
  });

  // Test : le composant affiche le texte "Navbar"
  it('displays the text "Navbar"', () => {
    render(<NavBar />);
    const navbarText = screen.getByText('Navbar');
    expect(navbarText).toBeInTheDocument();
  });
});

// Explications en français
/*
 - Le premier test s'assure que le composant est rendu sans erreur.
 - Le deuxième test vérifie la présence du texte "Navbar" dans le composant.
*/

// Explanations in English
/*
 - The first test ensures that the component renders without errors.
 - The second test checks for the presence of the text "Navbar" in the component.
*/
