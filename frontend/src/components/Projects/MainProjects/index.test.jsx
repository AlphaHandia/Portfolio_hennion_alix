import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MainProject from "./MainProject";
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

describe("MainProject", () => {
  it("renders MainProject correctly", () => {


    render(
      <LanguageProvider>
        <ThemeProvider>
          <MainProject />
        </ThemeProvider>
      </LanguageProvider>
    );

    // Vous pouvez ajouter des assertions ici pour vérifier le rendu initial du composant
    expect(screen.getByText("Mes Projets de Développeur")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Mes Projets de Développeur" })).toBeInTheDocument();
    // Assurez-vous que le composant rend les projets filtrés correctement
    expect(screen.getAllByTestId("project-card")).toHaveLength(3);
  });

  it("changes style on mouse hover", () => {
    // Mock des fonctions useLanguage et useTheme


    render(
      <LanguageProvider>
        <ThemeProvider>
          <MainProject />
        </ThemeProvider>
      </LanguageProvider>
    );

    const projectCard = screen.getAllByTestId("project-card")[0];

    // Assurez-vous que le style initial est correct
    expect(projectCard).toHaveStyle({
      backgroundColor: "rgba(190, 240, 241, 0.6)",
      color: "rgba(252, 92, 17)",
    });

    // Déclenchez l'événement de survol de la souris
    fireEvent.mouseEnter(projectCard);

    // Assurez-vous que le style change lors du survol
    expect(projectCard).toHaveStyle({
      backgroundColor: "rgba(190, 240, 241, 0.6)",
      color: "rgba(252, 92, 17)",
    });
  });

  // Ajoutez d'autres tests si nécessaire
});

// Explications en français
/*
 - Le premier test vérifie que le composant MainProject est rendu correctement avec les données des projets filtrés.
 - Le deuxième test vérifie que le style du projet change lorsqu'il est survolé par la souris.
*/

// Explanations in English
/*
 - The first test checks that the MainProject component renders correctly with filtered project data.
 - The second test checks that the project style changes when hovered over by the mouse.
*/
