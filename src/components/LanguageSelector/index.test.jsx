import React from "react";
import { render } from "@testing-library/react";
import LanguageSelector from "./index";


jest.mock("./LanguageContext", () => ({
  useLanguage: () => ({
    language: "fr", 
    changeLanguage: jest.fn(),
  }),
}));

describe("LanguageSelector Component", () => {
  it("renders properly", () => {
    render(<LanguageSelector />);

   
  });

  
});