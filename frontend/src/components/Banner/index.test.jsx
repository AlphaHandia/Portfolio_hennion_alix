import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Banner from "./Banner";
import { LanguageProvider } from "../LanguageSelector/LanguageContext"; // Importez le composant ou le contexte approprié pour la gestion de la langue

jest.mock("../LanguageSelector/LanguageContext", () => ({
  ...jest.requireActual("../LanguageSelector/LanguageContext"),
  useLanguage: jest.fn(),
}));

describe("Banner Component", () => {
  // Test : le composant rend sans erreur
  it("renders without crashing", () => {
    render(
      <LanguageProvider>
        <Banner />
      </LanguageProvider>
    );
    // Ajoutez des assertions appropriées pour votre composant
    expect(screen.getByText("VotreTexte")).toBeInTheDocument(); // Exemple d'assertion, assurez-vous d'ajuster en fonction de votre composant
  });

  // Test : vérifier si le chargement initial n'affiche pas le spinner
  it("initially does not display loading spinner", () => {
    render(
      <LanguageProvider>
        <Banner />
      </LanguageProvider>
    );
    // Ajoutez des assertions appropriées pour vérifier l'absence du spinner initial
    expect(screen.queryByTestId("loading-spinner")).toBeNull(); // Exemple d'assertion, assurez-vous d'ajuster en fonction de votre composant
  });

  // Test : vérifier si le chargement est déclenché lors du clic sur le lien Accueil et s'il se désactive après un délai simulé
  it("displays loading spinner on home link click and deactivates after a simulated delay", async () => {
    render(
      <LanguageProvider>
        <Banner />
      </LanguageProvider>
    );
    // Simuler le clic sur le lien Accueil
    fireEvent.click(screen.getByText("Accueil"));
    
    // Attendre l'affichage du spinner
    const loadingSpinner = await screen.findByTestId("loading-spinner");
    expect(loadingSpinner).toBeInTheDocument();

    // Simuler un délai
    await waitFor(() => {
      // Vérifier que le spinner n'est plus présent
      expect(screen.queryByTestId("loading-spinner")).toBeNull();
    });
  });

  // Test : vérifier si le texte du lien Accueil change en fonction de la page
  it("displays correct text for home link based on page", () => {
    render(
      <LanguageProvider>
        <Banner />
      </LanguageProvider>
    );
    // Ajoutez des assertions appropriées pour vérifier le changement de texte du lien Accueil
    expect(screen.getByText("Accueil")).toBeInTheDocument(); // Exemple d'assertion, assurez-vous d'ajuster en fonction de votre composant
  });

  // Explications en français
  /*
   - Le premier test s'assure que le composant est rendu sans erreur.
   - Le deuxième test vérifie que le chargement initial n'affiche pas le spinner.
   - Le troisième test vérifie si le chargement est déclenché lors du clic sur le lien Accueil et s'il se désactive après un délai simulé.
   - Le quatrième test vérifie si le texte du lien Accueil change en fonction de la page.
  */

  // Explanations in English
  /*
   - The first test ensures that the component renders without errors.
   - The second test checks that the initial loading does not display the spinner.
   - The third test checks if the loading is triggered on clicking the home link and if it deactivates after a simulated delay.
   - The fourth test checks if the text of the home link changes based on the page.
  */
});
