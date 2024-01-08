import React from "react";
import { render } from "@testing-library/react";
import LanguageSelector from "./index"; // Assurez-vous d'utiliser le bon chemin vers votre composant

// Mock du contexte
jest.mock("./LanguageContext", () => ({
  useLanguage: () => ({
    language: "fr", // Remplacez par la langue que vous souhaitez tester
    changeLanguage: jest.fn(),
  }),
}));

describe("LanguageSelector Component", () => {
  it("renders properly", () => {
    render(<LanguageSelector />);

    // Ajoutez ici vos assertions spécifiques au rendu du composant LanguageSelector
    // Par exemple, vérifiez la présence d'éléments, leurs valeurs, etc.
  });

  
});
