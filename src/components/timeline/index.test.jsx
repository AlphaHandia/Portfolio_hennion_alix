import React from "react";
import { render } from "@testing-library/react";
import ProjectTimeline from "./index"; 


jest.mock("../theme-switch/ThemeContext", () => ({
  useTheme: () => ({
    state: {
      currentTheme: "garden", 
    },
  }),
}));


jest.mock("../Projects/projectContent.json", () => ({
  projects: [
  
  ],
}));

describe("ProjectTimeline Component", () => {
  it("renders properly", () => {
    render(<ProjectTimeline />);

  
  });



});