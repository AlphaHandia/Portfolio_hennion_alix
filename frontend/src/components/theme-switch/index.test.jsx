import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import ThemedComponent from "./index"; // Assurez-vous d'utiliser le bon chemin vers votre composant

// Mock des contextes
jest.mock("./ThemeContext", () => ({
  useTheme: () => ({
    toggleTheme: jest.fn(),
    state: {
      currentTheme: "cyber", // Remplacez par le thème que vous souhaitez tester
    },
  }),
}));

jest.mock("../LanguageSelector/LanguageContext", () => ({
  useLanguage: () => ({
    language: "fr", // Remplacez par la langue que vous souhaitez tester
  }),
}));

// Mock du composant CustomCursor
jest.mock("./CustomCursor", () => () => <div data-testid="custom-cursor" />);

// Mock du composant GardenCanvas
jest.mock("../MousefollowCanvas/garden", () => () => <div data-testid="garden-canvas" />);

describe("ThemedComponent Component", () => {
  it("renders properly", () => {
    render(<ThemedComponent />);

    // Ajoutez ici vos assertions spécifiques au rendu du composant ThemedComponent
    // Par exemple, vérifiez la présence d'éléments, leurs valeurs, etc.
  });

  it("handles theme toggle", async () => {
    render(<ThemedComponent />);

    // Vérifiez que le bouton de bascule de thème est présent
    const toggleButton = screen.getByRole("button");

    // Simulez le clic sur le bouton de bascule de thème
    fireEvent.click(toggleButton);


  });

  // Ajoutez d'autres tests selon vos besoins
});
