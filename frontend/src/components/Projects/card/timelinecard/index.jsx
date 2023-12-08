import React from 'react';

const TimelineCard = ({ title, start_time, end_time }) => {
  return (
    <div  className="timeline-card" style={{ left: '30%' }}>
      {/* Add content for each timeline card based on item properties */}
      <div className="info">
        <div className="title">{title}</div>
        <div className="content">
          <h3>Project Details</h3>
          <p>Start Date: {start_time.toDateString()}</p>
          <p>End Date: {end_time.toDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
