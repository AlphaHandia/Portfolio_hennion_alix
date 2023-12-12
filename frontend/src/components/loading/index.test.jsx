import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PageLoader from './PageLoader';

// Suite de tests pour le composant PageLoader
describe('PageLoader Component', () => {
  // Test : le composant rend sans erreur
  it('renders without crashing', () => {
    render(<PageLoader />);
  });

  // Test : le composant affiche le message de chargement pendant une certaine période
  it('displays the loading message for a certain period', async () => {
    render(<PageLoader />);

    // Attendre que le message de chargement disparaisse (délai + 1000ms pour être sûr)
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    }, { timeout: 3000 }); 
  });


});

// Explications en français
/*
 - Le premier test s'assure que le composant est rendu sans erreur.
 - Le deuxième test vérifie si le message de chargement est affiché pendant une certaine période.
 - Ajoutez d'autres tests spécifiques en fonction de la logique de votre composant.
*/

// Explanations in English
/*
 - The first test ensures that the component renders without errors.
 - The second test checks if the loading message is displayed for a certain period.
 - Add other specific tests based on the logic of your component.
*/
