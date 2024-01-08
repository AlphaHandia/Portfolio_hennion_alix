import React from "react";
import { render} from "@testing-library/react";
import ContactForm from "./index"; // Assurez-vous d'utiliser le bon chemin vers votre composant

// Mock des contextes
jest.mock("../LanguageSelector/LanguageContext", () => ({
  useLanguage: () => ({
    language: "fr", // Remplacez par la langue que vous souhaitez tester
  }),
}));

describe("ContactForm Component", () => {
  it("renders properly", () => {
    render(<ContactForm />);

    // Ajoutez ici vos assertions spécifiques au rendu du composant ContactForm
    // Par exemple, vérifiez la présence d'éléments, leurs valeurs, etc.
  });

  // Ajoutez d'autres tests selon vos besoins
});
