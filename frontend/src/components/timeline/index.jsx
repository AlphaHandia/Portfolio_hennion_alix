import React from 'react';
import Timeline from 'react-calendar-timeline';

const MyTimeline = () => {
  const groups = [{ id: 1, title: 'Groupe 1' }];
  const items = [
    {
      id: 1,
      group: 1,
      title: 'Projet 1',
      start_time: new Date(2023, 0, 1),
      end_time: new Date(2023, 0, 10),
    },
    // Ajoutez d'autres éléments au besoin
  ];

  const defaultTimeStart = new Date(2023, 0, 1); // Date de début par défaut
  const defaultTimeEnd = new Date(2023, 0, 20); // Date de fin par défaut

  return (
    <Timeline
      groups={groups}
      items={items}
      defaultTimeStart={defaultTimeStart}
      defaultTimeEnd={defaultTimeEnd}
      sidebarWidth={150}
      sidebarContent={<div>Barre Latérale</div>}
    />
  );
};
export default MyTimeline;
