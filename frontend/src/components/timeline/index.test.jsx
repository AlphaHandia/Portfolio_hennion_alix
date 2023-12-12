import React from 'react';
import { render, screen } from '@testing-library/react';
import MyTimeline from './MyTimeline';

// Suite de tests pour le composant MyTimeline
describe('MyTimeline Component', () => {
  // Test : le composant rend sans erreur
  it('renders without crashing', () => {
    render(<MyTimeline />);
  });

  // Test : le composant affiche la barre latérale
  it('displays the sidebar', () => {
    render(<MyTimeline />);
    const sidebar = screen.getByText('Barre Latérale');
    expect(sidebar).toBeInTheDocument();
  });

});

// Explications en français
/*
 - Le premier test s'assure que le composant est rendu sans erreur.
 - Le deuxième test vérifie si le composant affiche la barre latérale.
*/

// Explanations in English
/*
 - The first test ensures that the component renders without errors.
 - The second test checks if the component displays the sidebar.
*/
