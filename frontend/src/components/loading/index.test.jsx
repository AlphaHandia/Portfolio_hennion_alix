import React from "react";
import { render, screen } from "@testing-library/react";
import PageLoader from "./PageLoader";

describe("PageLoader", () => {
  it("renders PageLoader correctly", async () => {
    render(<PageLoader />);

    // Attendre que le chargement soit terminé (après le délai de 3000 ms)
    await screen.findByTestId("page-loader-container", {}, { timeout: 4000 });

    // Vérifier que l'élément de chargement n'est plus dans le DOM
    const loaderContainer = screen.queryByTestId("page-loader-container");
    expect(loaderContainer).toBeNull();

    // Vous pouvez ajouter d'autres assertions si nécessaire
  });
});

// Explications en français
/*
 - Ce test vérifie que le composant PageLoader est rendu correctement et qu'il disparaît après le délai spécifié.
*/

// Explanations in English
/*
 - This test checks that the PageLoader component is rendered correctly and disappears after the specified delay.
*/
