import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProjectCard from "./ProjectCard";
import { LanguageProvider } from "../../LanguageSelector/LanguageContext";
import { ThemeProvider } from "../../theme-switch/ThemeContext";

// Mock LanguageProvider et ThemeProvider pour fournir les contextes de langue et de thème
jest.mock("../../LanguageSelector/LanguageContext", () => ({
  ...jest.requireActual("../../LanguageSelector/LanguageContext"),
  useLanguage: jest.fn(),
}));
jest.mock("../../theme-switch/ThemeContext", () => ({
  ...jest.requireActual("../../theme-switch/ThemeContext"),
  useTheme: jest.fn(),
}));

describe("ProjectCard", () => {
  it("renders ProjectCard correctly", () => {
    const project = {
      id: 1,
      title: {
        en: "Project Title",
        fr: "Titre du projet",
      },
      resume: {
        en: "Project Summary",
        fr: "Résumé du projet",
      },
      cover: "/path/to/cover.jpg",
    };



    render(
      <LanguageProvider>
        <ThemeProvider>
          <ProjectCard projectId={project.id} />
        </ThemeProvider>
      </LanguageProvider>
    );

    // Vous pouvez ajouter des assertions ici pour vérifier le rendu initial du composant
    expect(screen.getByText("Project Title")).toBeInTheDocument();
    expect(screen.getByText("Project Summary")).toBeInTheDocument();
    expect(screen.getByAltText("Project Title")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Voir plus" })).toBeInTheDocument();
  });

  it("opens and closes ProjectModal when 'Voir plus' button is clicked", () => {
    const project = {
      id: 1,
      title: {
        en: "Project Title",
        fr: "Titre du projet",
      },
      resume: {
        en: "Project Summary",
        fr: "Résumé du projet",
      },
      cover: "/path/to/cover.jpg",
    };



    render(
      <LanguageProvider>
        <ThemeProvider>
          <ProjectCard projectId={project.id} />
        </ThemeProvider>
      </LanguageProvider>
    );

    // Vous pouvez ajouter des assertions ici pour vérifier le rendu initial du composant

    // Cliquez sur le bouton "Voir plus"
    fireEvent.click(screen.getByRole("button", { name: "Voir plus" }));

    // Vérifiez que ProjectModal est ouvert
    expect(screen.getByText("Project Title")).toBeInTheDocument();

    // Cliquez sur le bouton de fermeture dans ProjectModal
    fireEvent.click(screen.getByText("× Close"));

    // Vérifiez que ProjectModal est fermé
    expect(screen.queryByText("Project Title")).not.toBeInTheDocument();
  });

  // Explications en français
  /*
   - Le premier test vérifie que le composant ProjectCard est rendu correctement avec les données du projet.
   - Le deuxième test vérifie que ProjectModal s'ouvre et se ferme correctement lorsque le bouton "Voir plus" est cliqué.
  */

  // Explanations in English
  /*
   - The first test checks that the ProjectCard component renders correctly with project data.
   - The second test checks that ProjectModal opens and closes correctly when the "Voir plus" button is clicked.
  */
});
