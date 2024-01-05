import React from "react";
import { render, screen } from "@testing-library/react";
import TimelineCard from "./TimelineCard";
import { LanguageProvider } from "../../LanguageSelector/LanguageContext";

// Mock LanguageProvider pour fournir le contexte de langue
jest.mock("../../LanguageSelector/LanguageContext", () => ({
  ...jest.requireActual("../../LanguageSelector/LanguageContext"),
  useLanguage: jest.fn(),
}));

describe("TimelineCard", () => {
  it("renders TimelineCard correctly", () => {
    render(
      <LanguageProvider>
        <TimelineCard />
      </LanguageProvider>
    );

    // Vous pouvez ajouter des assertions ici pour vérifier le rendu initial du composant
    expect(screen.getByText("Project Details")).toBeInTheDocument();
    expect(screen.getByText("Description: Project Description")).toBeInTheDocument();
    expect(screen.getByText("Start Date: 2022-01-01")).toBeInTheDocument();
  });

  // Explications en français
  /*
   - Le premier test vérifie que le composant TimelineCard est rendu correctement.
  */

  // Explanations in English
  /*
   - The first test checks that the TimelineCard component renders correctly.
  */
});
