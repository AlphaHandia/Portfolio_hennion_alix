import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './Error';

// Suite de tests pour le composant Error
describe('Error Component', () => {
  // Test : le composant rend sans erreur
  it('renders without crashing', () => {
    render(<Error />);
  });

  // Test : le composant affiche le titre "Erreur de Sécurité"
  it('displays the title "Erreur de Sécurité"', () => {
    render(<Error />);
    const titleElement = screen.getByText('Erreur de Sécurité');
    expect(titleElement).toBeInTheDocument();
  });
});

// Explications en français
/*
 - Le premier test s'assure que le composant est rendu sans erreur.
 - Le deuxième test vérifie si le composant affiche le titre "Erreur de Sécurité".
 */

// Explanations in English
/*
 - The first test ensures that the component renders without errors.
 - The second test checks if the component displays the title "Erreur de Sécurité".
*/
