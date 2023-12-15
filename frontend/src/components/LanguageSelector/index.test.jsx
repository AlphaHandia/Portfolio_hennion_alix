import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LanguageSelector from './LanguageSelector';

// Suite de tests pour le composant LanguageSelector
describe('LanguageSelector Component', () => {
  // Test : le composant rend sans erreur
  it('renders without crashing', () => {
    render(<LanguageSelector />);
  });

  // Test : le composant affiche les boutons pour les langues avec les drapeaux
  it('displays language buttons with flags', () => {
    render(<LanguageSelector />);
    const englishButton = screen.getByAltText('english flag');
    const frenchButton = screen.getByAltText('french flag');

    expect(englishButton).toBeInTheDocument();
    expect(frenchButton).toBeInTheDocument();
  });

  // Test : le changement de langue est déclenché correctement
  it('triggers language change correctly', () => {
    render(<LanguageSelector />);
    const englishButton = screen.getByAltText('english flag');
    const frenchButton = screen.getByAltText('french flag');

    // Simule un clic sur le bouton anglais
    fireEvent.click(englishButton);
    expect(localStorage.getItem('i18nextLng')).toBe('en');

    // Simule un clic sur le bouton français
    fireEvent.click(frenchButton);
    expect(localStorage.getItem('i18nextLng')).toBe('fr');
  });
});

// Explications en français
/*
 - Le premier test s'assure que le composant est rendu sans erreur.
 - Le deuxième test vérifie la présence des boutons de langues avec les drapeaux.
 - Le troisième test simule un clic sur les boutons de langues et vérifie si le changement de langue est déclenché correctement.
*/

// Explanations in English
/*
 - The first test ensures that the component renders without errors.
 - The second test checks for the presence of language buttons with flags.
 - The third test simulates a click on the language buttons and checks if the language change is triggered correctly.
*/
