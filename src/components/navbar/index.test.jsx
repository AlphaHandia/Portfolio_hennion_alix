
import { render} from "@testing-library/react";

import NavBar from "./index";

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


jest.mock("react-router-dom", () => ({
  useLocation: () => ({
    pathname: "/Contact", 
  }),
}));

describe("NavBar Component", () => {
  it("renders properly", () => {
    render(<NavBar />);

   
  });

 
});