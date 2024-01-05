import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProjectModal from "./ProjectModal";
import { LanguageProvider } from "../../LanguageSelector/LanguageContext";

// Mock LanguageProvider pour fournir le contexte de langue
jest.mock("../../LanguageSelector/LanguageContext", () => ({
  ...jest.requireActual("../../LanguageSelector/LanguageContext"),
  useLanguage: jest.fn(),
}));

describe("ProjectModal", () => {
  it("renders ProjectModal correctly", () => {
    const project = {
      title: {
        en: "Project Title",
        fr: "Titre du projet",
      },
      description: {
        en: "Project Description",
        fr: "Description du projet",
      },
      languages: ["JavaScript", "React"],
      skills_acquired: ["Front-end Development"],
      linkGithub: "https://github.com/example/project",
      linkGithubPages: "https://example.github.io/project",
    };

    render(
      <LanguageProvider>
        <ProjectModal project={project} />
      </LanguageProvider>
    );

    // Vous pouvez ajouter des assertions ici pour vérifier le rendu initial du composant
    expect(screen.getByText("Project Title")).toBeInTheDocument();
    expect(screen.getByText("Description du projet")).toBeInTheDocument();
    expect(screen.getByText("Languages: JavaScript, React")).toBeInTheDocument();
    expect(screen.getByText("Skills Acquired: Front-end Development")).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("GitHub Pages")).toBeInTheDocument();
  });

  it("calls onClose function when modal background is clicked", () => {
    const onCloseMock = jest.fn();
    const project = {
      title: {
        en: "Project Title",
        fr: "Titre du projet",
      },
      description: {
        en: "Project Description",
        fr: "Description du projet",
      },
      languages: ["JavaScript", "React"],
      skills_acquired: ["Front-end Development"],
      linkGithub: "https://github.com/example/project",
      linkGithubPages: "https://example.github.io/project",
    };

    render(
      <LanguageProvider>
        <ProjectModal project={project} onClose={onCloseMock} />
      </LanguageProvider>
    );

    fireEvent.click(screen.getByTestId("modal-background"));

    // Assurez-vous que la fonction onClose a été appelée
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  // Explications en français
  /*
   - Le premier test vérifie que le composant ProjectModal est rendu correctement avec les données du projet.
   - Le deuxième test vérifie que la fonction onClose est appelée lorsque le fond du modal est cliqué.
  */

  // Explanations in English
  /*
   - The first test checks that the ProjectModal component renders correctly with project data.
   - The second test checks that the onClose function is called when the modal background is clicked.
  */
});
