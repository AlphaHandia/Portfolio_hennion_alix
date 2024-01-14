import React from "react";
import { render} from "@testing-library/react";
import ContactForm from "./index"; 


jest.mock("../LanguageSelector/LanguageContext", () => ({
  useLanguage: () => ({
    language: "fr", 
  }),
}));

describe("ContactForm Component", () => {
  it("renders properly", () => {
    render(<ContactForm />);

    
  });

  
});