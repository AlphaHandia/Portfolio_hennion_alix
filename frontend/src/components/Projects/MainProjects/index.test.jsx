import React from "react";
import { render} from "@testing-library/react";
import MainProject from "./index"; // Assurez-vous d'utiliser le bon chemin vers votre composant

// Mock des contextes
jest.mock("../../LanguageSelector/LanguageContext", () => ({
  useLanguage: () => ({
    language: "fr", // Remplacez par la langue que vous souhaitez tester
  }),
}));

jest.mock("../../theme-switch/ThemeContext", () => ({
  useTheme: () => ({
    state: {
      currentTheme: "garden", // Remplacez par le thème que vous souhaitez tester
    },
  }),
}));

// Mock des données de projet
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
    // Ajoutez d'autres projets au besoin
  ],
}));

describe("MainProject Component", () => {
  it("renders properly", () => {
    render(<MainProject />);

    // Ajoutez ici vos assertions spécifiques au rendu du composant MainProject
    // Par exemple, vérifiez la présence d'éléments, leurs valeurs, etc.
  });

  // Ajoutez d'autres tests selon vos besoins
});
