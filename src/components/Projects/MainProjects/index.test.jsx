import React from "react";
import { render} from "@testing-library/react";
import MainProject from "./index"; 

// Mock des contextes
jest.mock("../../LanguageSelector/LanguageContext", () => ({
  useLanguage: () => ({
    language: "fr", 
  }),
}));

jest.mock("../../theme-switch/ThemeContext", () => ({
  useTheme: () => ({
    state: {
      currentTheme: "garden", 
    },
  }),
}));


jest.mock("../projectContent.json", () => ({
  projects: [
    {
      id: 7,
      title: { en: "Project Title", fr: "Titre du projet" },
      description: { en: "Project Description", fr: "Description du projet" },
      date_realization: "2023-01-01",
      languages: ["JavaScript", "React"],
      skills_acquired: ["Web Development", "UI/UX Design"],
      linkGithub: "https://github.com/example",
      linkgithubPages: "https://example.github.io",
      picture: "project-image.jpg",
    },
   
  ],
}));

describe("MainProject Component", () => {
  it("renders properly", () => {
    render(<MainProject />);

   
  });

  
});