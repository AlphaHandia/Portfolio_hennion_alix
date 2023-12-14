import React from 'react';
import projectData from '../projectContent.json';

const TimelineCard = () => {
  const projects = projectData.projects;
  return (
    <div className="timeline-card" style={{ left: '30%' }}>
      <div className="info">
        <div className="title">{projects.title}</div>
        <div className="content">
          <h3>Project Details</h3>
          <p>Description: {projects.description}</p>
          <p>Start Date: {projects.date_realization}</p>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
