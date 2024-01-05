import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LanguageSelector from "./LanguageSelector";
import { LanguageProvider } from "./LanguageContext";

// Mock LanguageProvider pour fournir le contexte de langue
jest.mock("./LanguageContext", () => ({
  ...jest.requireActual("./LanguageContext"),
  useLanguage: jest.fn(),
}));

describe("LanguageSelector", () => {
  it("renders LanguageSelector correctly", () => {
    
    render(
      <LanguageProvider>
        <LanguageSelector />
      </LanguageProvider>
    );

    // Vous pouvez ajouter des assertions ici pour vérifier le rendu initial du composant
    expect(screen.getByText("English")).toBeInTheDocument();
    expect(screen.getByText("Français")).toBeInTheDocument();
  });

  it("changes language on button click", () => {
    // Mock de la fonction useLanguage
    const useLanguageMock = jest.fn(() => ({ language: "en", changeLanguage: jest.fn() }));
    render(
      <LanguageProvider>
        <LanguageSelector />
      </LanguageProvider>
    );

    const frenchButton = screen.getByText("Français");

    // Assurez-vous que la langue actuelle est correcte
    expect(frenchButton).toHaveClass("french");
    expect(frenchButton).not.toHaveClass("selected");

    // Déclenchez l'événement de clic sur le bouton français
    fireEvent.click(frenchButton);

    // Assurez-vous que la fonction changeLanguage a été appelée avec le bon paramètre
    expect(useLanguageMock().changeLanguage).toHaveBeenCalledWith("fr");

    // Assurez-vous que le style du bouton change après le clic
    expect(frenchButton).toHaveClass("selected");
  });

  // Ajoutez d'autres tests si nécessaire
});

// Explications en français
/*
 - Le premier test vérifie que le composant LanguageSelector est rendu correctement avec les boutons de sélection de langue.
 - Le deuxième test vérifie que la langue change lorsqu'un bouton est cliqué.
*/

// Explanations in English
/*
 - The first test checks that the LanguageSelector component renders correctly with language selection buttons.
 - The second test checks that the language changes when a button is clicked.
*/
