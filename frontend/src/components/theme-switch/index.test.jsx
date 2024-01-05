import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ThemedComponent from "./ThemedComponent";
import { ThemeProvider } from "./ThemeContext";
import { LanguageProvider } from "../LanguageSelector/LanguageContext";

// Mock LanguageProvider pour fournir le contexte de langue
jest.mock("../LanguageSelector/LanguageContext", () => ({
  ...jest.requireActual("../LanguageSelector/LanguageContext"),
  useLanguage: jest.fn(),
}));

describe("ThemedComponent", () => {
  it("renders ThemedComponent correctly", () => {
    render(
      <LanguageProvider>
        <ThemedComponent />
      </LanguageProvider>
    );

    // Vous pouvez ajouter des assertions ici pour vérifier le rendu initial du composant
    expect(screen.getByText("Cyber")).toBeInTheDocument();
    expect(screen.getByText("Garden")).toBeInTheDocument();
  });

  it("toggles the theme on button click", async () => {
    render(
      <LanguageProvider>
        <ThemeProvider>
          <ThemedComponent />
        </ThemeProvider>
      </LanguageProvider>
    );

    fireEvent.click(screen.getByRole("button"));

    // Attendez que le chargement soit terminé
    await waitFor(() => {
      expect(screen.getByText("Garden Canvas")).toBeInTheDocument();
    });

    // Vous pouvez ajouter d'autres assertions ici pour vérifier le changement de thème
    expect(document.body.classList.contains("garden-theme")).toBe(true);
  });

  // Explications en français
  /*
   - Le premier test vérifie que le composant ThemedComponent est rendu correctement.
   - Le deuxième test vérifie que le thème est basculé lorsqu'on clique sur le bouton.
  */

  // Explanations in English
  /*
   - The first test checks that the ThemedComponent renders correctly.
   - The second test checks that the theme is toggled when the button is clicked.
  */
});
