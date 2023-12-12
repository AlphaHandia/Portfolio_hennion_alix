import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ThemeToggle from './ThemeToggle';

// Créer un store factice avec redux-mock-store
const mockStore = configureStore([]);

// Suite de tests pour le composant ThemeToggle
describe('ThemeToggle Component', () => {
  // Test : le composant rend sans erreur
  it('renders without crashing', () => {
    const store = mockStore({
      theme: {
        currentTheme: 'cyber', 
      },
    });
    render(
      <Provider store={store}>
        <ThemeToggle />
      </Provider>
    );
  });

  // Test : le composant change de thème lorsqu'il est cliqué
  it('changes theme when clicked', () => {
    const store = mockStore({
      theme: {
        currentTheme: 'cyber',
      },
    });
    render(
      <Provider store={store}>
        <ThemeToggle />
      </Provider>
    );

    const toggleButton = screen.getByText('Toggle Theme');
    fireEvent.click(toggleButton);

  });
});

// Explications en français
/*
 - Le premier test s'assure que le composant est rendu sans erreur.
 - Le deuxième test vérifie si le composant change de thème lorsqu'il est cliqué.
*/

// Explanations in English
/*
 - The first test ensures that the component renders without errors.
 - The second test checks if the component changes the theme when clicked.
*/
