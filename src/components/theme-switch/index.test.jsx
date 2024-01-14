import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import ThemedComponent from "./index";

// Mock des contextes
jest.mock("./ThemeContext", () => ({
  useTheme: () => ({
    toggleTheme: jest.fn(),
    state: {
      currentTheme: "cyber", 
    },
  }),
}));

jest.mock("../LanguageSelector/LanguageContext", () => ({
  useLanguage: () => ({
    language: "fr", 
  }),
}));


jest.mock("./CustomCursor", () => () => <div data-testid="custom-cursor" />);


jest.mock("../MousefollowCanvas/garden", () => () => <div data-testid="garden-canvas" />);

describe("ThemedComponent Component", () => {
  it("renders properly", () => {
    render(<ThemedComponent />);

   
  });

  it("handles theme toggle", async () => {
    render(<ThemedComponent />);

  
    const toggleButton = screen.getByRole("button");

   
    fireEvent.click(toggleButton);


  });

});