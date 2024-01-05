import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NavBar from './NavBar';

// Suite de tests pour le composant NavBar
describe('NavBar Component', () => {
  // Test : le composant rend sans erreur
  it('renders without crashing', () => {
    render(<NavBar />);
  });

  // Test : vérifier si le chargement initial est désactivé
  it('initially does not display loading spinner', () => {
    render(<NavBar />);
    const loadingSpinner = screen.queryByTestId('loading-spinner');
    expect(loadingSpinner).toBeNull();
  });

  // Test : vérifier si le chargement est déclenché lors du clic sur le lien Accueil
  it('displays loading spinner on home link click', async () => {
    render(<NavBar />);
    fireEvent.click(screen.getByText('Accueil'));

    const loadingSpinner = await screen.findByTestId('loading-spinner');
    expect(loadingSpinner).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByTestId('loading-spinner')).toBeNull();
    });
  });

  // Test : vérifier si le texte du lien Accueil change en fonction de la page
  it('displays correct text for home link based on page', () => {
    render(<NavBar />);
    expect(screen.getByText('Accueil')).toBeInTheDocument();

    // Changer la page à "Contact"
    window.history.pushState({}, 'Contact', '/Contact');
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});

// Explications en français
/*
 - Le premier test s'assure que le composant est rendu sans erreur.
 - Le deuxième test vérifie que le chargement initial n'affiche pas le spinner.
 - Le troisième test vérifie si le chargement est déclenché lors du clic sur le lien Accueil et s'il se désactive après un délai simulé.
 - Le quatrième test vérifie si le texte du lien Accueil change en fonction de la page.
*/

// Explanations in English
/*
 - The first test ensures that the component renders without errors.
 - The second test checks that the initial loading does not display the spinner.
 - The third test checks if the loading is triggered on clicking the home link and if it deactivates after a simulated delay.
 - The fourth test checks if the text of the home link changes based on the page.
*/
