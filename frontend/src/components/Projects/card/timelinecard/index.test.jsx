import React from 'react';
import { render, screen } from '@testing-library/react';
import TimelineCard from './TimelineCard';

// Suite de tests pour le composant TimelineCard
describe('TimelineCard Component', () => {
  // Test : le composant rend sans erreur
  it('renders without crashing', () => {
    const mockData = {
      title: 'Sample Project',
      start_time: new Date('2022-01-01'),
      end_time: new Date('2022-02-01'),
    };
    render(<TimelineCard {...mockData} />);
  });

  // Test : le composant affiche le titre, la date de début et la date de fin correctement
  it('displays title, start date, and end date correctly', () => {
    const mockData = {
      title: 'Sample Project',
      start_time: new Date('2022-01-01'),
      end_time: new Date('2022-02-01'),
    };
    render(<TimelineCard {...mockData} />);

    const titleElement = screen.getByText('Sample Project');
    const startDateElement = screen.getByText('Start Date: Sat Jan 01 2022');
    const endDateElement = screen.getByText('End Date: Tue Feb 01 2022');

    expect(titleElement).toBeInTheDocument();
    expect(startDateElement).toBeInTheDocument();
    expect(endDateElement).toBeInTheDocument();
  });
});

// Explications en français
/*
 - Le premier test s'assure que le composant est rendu sans erreur.
 - Le deuxième test vérifie si le composant affiche correctement le titre, la date de début et la date de fin.
*/

// Explanations in English
/*
 - The first test ensures that the component renders without errors.
 - The second test checks if the component displays the title, start date, and end date correctly.
*/
