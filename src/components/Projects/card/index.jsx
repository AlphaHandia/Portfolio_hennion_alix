import React from "react";
import { useLanguage } from "../../LanguageSelector/LanguageContext";
import projectData from "./projectscover/projectContent.json";

const TimelineCard = () => {
  const { language } = useLanguage();
  const projects = projectData.projects;

  return (
    <div className="timeline-card" style={{ left: "30%" }}>
      <div className="info">
        <div className="title">{projects.title[language]}</div>
        <div className="content">
          <h3>Project Details</h3>
          <p>Description: {projects.description[language]}</p>
          <p>Start Date: {projects.date_realization}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;