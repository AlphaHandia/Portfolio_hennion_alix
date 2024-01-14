import React from "react";
import { render } from "@testing-library/react";
import Footer from "./index"; 

// Mock des contextes
jest.mock("../LanguageSelector/LanguageContext", () => ({
  useLanguage: () => ({
    language: "fr",
  }),
}));

jest.mock("../theme-switch/ThemeContext", () => ({
  useTheme: () => ({
    state: {
      currentTheme: "garden", 
    },
  }),
}));

describe("Footer Component", () => {
  it("renders properly", () => {
    render(<Footer />);

   
  });

 


  describe("Documentation Section", () => {
    it("renders links properly", () => {
      render(<Footer />);

    
    });

    
  });
});