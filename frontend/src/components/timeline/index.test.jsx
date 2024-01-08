import React from "react";
import { render } from "@testing-library/react";
import ProjectTimeline from "./index"; // Assurez-vous d'utiliser le bon chemin vers votre composant

// Mock du contexte du thème
jest.mock("../theme-switch/ThemeContext", () => ({
  useTheme: () => ({
    state: {
      currentTheme: "garden", // Remplacez par le thème que vous souhaitez tester
    },
  }),
}));

// Mock de projectContent.json
jest.mock("../Projects/projectContent.json", () => ({
  projects: [
    // Ajoutez des projets de test ici
  ],
}));

describe("ProjectTimeline Component", () => {
  it("renders properly", () => {
    render(<ProjectTimeline />);

  
  });


  // Ajoutez d'autres tests selon vos besoins
});
