import React from 'react';
import Timeline from 'react-calendar-timeline';
import TimelineCard from '../Projects/card/timelinecard/index'; 

const MyTimeline = () => {
  const groups = [{ id: 1, title: 'Groupe 1' }];
  const items = [
    {
      id: 1,
      group: 1,
      title: 'Projet 1',
      start_time: new Date(2023, 0, 1),
      end_time: new Date(2023, 0, 2),
    },
   
  ];

  const defaultTimeStart = new Date(2023, 0, 1); // Date de début par défaut
  const defaultTimeEnd = new Date(2023, 0, 20); // Date de fin par défaut

  return (
    <div className="my-timeline">
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={defaultTimeStart}
        defaultTimeEnd={defaultTimeEnd}
        sidebarWidth={12}
        sidebarContent={<div>Barre Latérale</div>}
      />

      
      {items.map((item) => (
        <TimelineCard key={item.id} {...item} />
        
      ))}
    </div>
  );
};

export default MyTimeline;
