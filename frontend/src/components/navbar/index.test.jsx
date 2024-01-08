
import { render} from "@testing-library/react";

import NavBar from "./index"; // Assurez-vous d'utiliser le bon chemin vers votre composant

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

// Mock de useLocation
jest.mock("react-router-dom", () => ({
  useLocation: () => ({
    pathname: "/Contact", // Changez selon les besoins de votre test
  }),
}));

describe("NavBar Component", () => {
  it("renders properly", () => {
    render(<NavBar />);

    // Ajoutez ici vos assertions spécifiques au rendu du composant NavBar
    // Par exemple, vérifiez la présence d'éléments, leurs valeurs, etc.
  });

  // Ajoutez d'autres tests selon vos besoins
});
