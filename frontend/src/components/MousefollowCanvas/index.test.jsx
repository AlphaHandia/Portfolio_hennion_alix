import React from 'react';
import { render } from '@testing-library/react';
import NetworkCanvas from './NetworkCanvas';

// Suite de tests pour le composant NetworkCanvas
describe('NetworkCanvas Component', () => {
  // Test : le composant rend sans erreur
  it('renders without crashing', () => {
    render(<NetworkCanvas />);
  });

  
});

// Explications en français
/*
 - Le premier test s'assure que le composant est rendu sans erreur.
*/

// Explanations in English
/*
 - The first test ensures that the component renders without errors.
*/
