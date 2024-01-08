import React from "react";
import { render } from "@testing-library/react";
import Footer from "./index"; // Assurez-vous d'utiliser le bon chemin vers votre composant

// Mock des contextes
jest.mock("../LanguageSelector/LanguageContext", () => ({
  useLanguage: () => ({
    language: "fr", // Remplacez par la langue que vous souhaitez tester
  }),
}));

jest.mock("../theme-switch/ThemeContext", () => ({
  useTheme: () => ({
    state: {
      currentTheme: "garden", // Remplacez par le thème que vous souhaitez tester
    },
  }),
}));

describe("Footer Component", () => {
  it("renders properly", () => {
    render(<Footer />);

    // Ajoutez ici vos assertions spécifiques au rendu du composant Footer
    // Par exemple, vérifiez la présence d'éléments, leurs valeurs, etc.
  });

 

  // Ajoutez d'autres tests selon vos besoins

  describe("Documentation Section", () => {
    it("renders links properly", () => {
      render(<Footer />);

      // Ajoutez ici vos assertions spécifiques à la section de documentation
      // Par exemple, vérifiez la présence de liens, leurs valeurs, etc.
    });

    // Ajoutez d'autres tests pour cette section si nécessaire
  });
});
