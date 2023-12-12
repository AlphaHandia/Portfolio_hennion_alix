import React from 'react';
import { render, screen } from '@testing-library/react'; 
import Banner from './Banner';

// Suite de tests pour le composant Banner
describe('Banner Component', () => {
  // Test : le composant rend sans erreur
  it('renders without crashing', () => {
    render(<Banner />);
  });

  // Test : le composant affiche l'image de profil
  it('displays the profile image', () => {
    render(<Banner />);
    const profileImage = screen.getByAltText('alix hennion'); 
    expect(profileImage).toBeInTheDocument();
  });

  // Test : le composant affiche la section de présentation courte
  it('displays the short presentation section', () => {
    render(<Banner />);
    const shortPresentation = screen.getByText('Short Presentation:'); 
    expect(shortPresentation).toBeInTheDocument();

  
  });
});


// Explications en français
/*
 - Le premier test s'assure que le composant est rendu sans erreur.
 - Le deuxième test vérifie la présence de l'image de profil avec l'attribut alt 'alix hennion'.
 - Le troisième test confirme l'existence de la section de présentation courte et propose des commentaires pour des tests plus spécifiques.
*/

// Explanations in English
/*
 - The first test ensures that the component renders without errors.
 - The second test checks for the presence of the profile image with the alt attribute 'alix hennion'.
 - The third test confirms the existence of the short presentation section and provides comments for more specific tests.
*/
