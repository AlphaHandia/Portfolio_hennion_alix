import React from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import WeatherApp from "./WeatherApp";
import { LanguageProvider } from "../LanguageSelector/LanguageContext";

// Mock LanguageProvider pour fournir le contexte de langue
jest.mock("../LanguageSelector/LanguageContext", () => ({
  ...jest.requireActual("../LanguageSelector/LanguageContext"),
  useLanguage: jest.fn(),
}));

const mockWeatherData = {
  name: "Paris",
  main: {
    temp: 293.15, // Example temperature in Kelvin
  },
  weather: [
    {
      description: "Clear", // Example weather description
    },
  ],
};

const axiosMock = new MockAdapter(axios);

describe("WeatherApp Component", () => {
  beforeEach(() => {
    axiosMock.reset();
  });

  // Test : le composant rend sans erreur
  it("renders without crashing", () => {
    render(
      <LanguageProvider>
        <WeatherApp />
      </LanguageProvider>
    );
    expect(screen.getByText("Weather App")).toBeInTheDocument();
  });

  // Test : affiche un message de chargement initialement
  it("displays loading message initially", () => {
    render(
      <LanguageProvider>
        <WeatherApp />
      </LanguageProvider>
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  // Test : récupère et affiche les données météorologiques
  it("fetches and displays weather data", async () => {
    axiosMock.onGet(/api.openweathermap.org/).reply(200, mockWeatherData);

    render(
      <LanguageProvider>
        <WeatherApp />
      </LanguageProvider>
    );

    // Vous pouvez ajouter des assertions ici pour vérifier le rendu des données météorologiques
    expect(screen.getByText("City: Paris")).toBeInTheDocument();
    expect(screen.getByText("Temperature: 20.0°C")).toBeInTheDocument();
    expect(screen.getByText("Weather: Clear")).toBeInTheDocument();
    expect(screen.getByText("Weather Icon:")).toBeInTheDocument();
  });

  // Test : gère les erreurs API de manière appropriée
  it("handles API error gracefully", async () => {
    axiosMock.onGet(/api.openweathermap.org/).reply(500);

    render(
      <LanguageProvider>
        <WeatherApp />
      </LanguageProvider>
    );

    // Vous pouvez ajouter des assertions ici pour vérifier le rendu du message d'erreur
    expect(screen.getByText("Error fetching weather data")).toBeInTheDocument();
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
