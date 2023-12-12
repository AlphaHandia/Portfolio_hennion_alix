import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import WeatherApp from './WeatherApp';

// Mock axios pour simuler une réponse d'API
jest.mock('axios');

// Suite de tests pour le composant WeatherApp
describe('WeatherApp Component', () => {
  // Test : le composant rend sans erreur
  it('renders without crashing', () => {
    render(<WeatherApp />);
  });

  // Test : le composant affiche les informations météorologiques correctes
  it('displays correct weather information', async () => {
    // Mock de la réponse d'API
    const mockData = {
      name: 'Paris',
      main: {
        temp: 20, 
      },
    };

    axios.get.mockResolvedValueOnce({ data: mockData });

    render(<WeatherApp />);

    // Attendre que les données météorologiques soient chargées
    await waitFor(() => {
      expect(screen.getByText('City: Paris')).toBeInTheDocument();
     
    });
  });


});

// Explications en français
/*
 - Le premier test s'assure que le composant est rendu sans erreur.
 - Le deuxième test vérifie si le composant affiche les informations météorologiques correctes.
*/

// Explanations in English
/*
 - The first test ensures that the component renders without errors.
 - The second test checks if the component displays the correct weather information.
*/
