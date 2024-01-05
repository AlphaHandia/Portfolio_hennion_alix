import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../components/theme-switch/ThemeContext";
import { LanguageProvider } from "../components/LanguageSelector/LanguageContext";
import Error from "./Error";

describe("Error Component", () => {
  it("renders Error component with default message", () => {
    render(
      <ThemeProvider>
        <LanguageProvider>
          <Error />
        </LanguageProvider>
      </ThemeProvider>
    );

    const errorMessage = screen.getByText(/an unexpected error occurred/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it("renders Error component with translated error message", () => {
    // Mock error page data
    const mockErrorData = {
      title: {
        en: "Error Title",
        fr: "Titre d'erreur",
      },
      errorMessage: {
        en: "This is an error message.",
        fr: "Ceci est un message d'erreur.",
      },
      contactAdmin: {
        en: "Please contact the administrator.",
        fr: "Veuillez contacter l'administrateur.",
      },
      errorCode: {
        en: "Error Code",
        fr: "Code d'erreur",
      },
      returnHome: {
        en: "Return to home",
        fr: "Retour à l'accueil",
      },
    };

    render(
      <ThemeProvider>
        <LanguageProvider>
          <Error errorData={mockErrorData} />
        </LanguageProvider>
      </ThemeProvider>
    );

    const translatedErrorMessage = screen.getByText(/ceci est un message d'erreur/i);
    expect(translatedErrorMessage).toBeInTheDocument();
  });
});
