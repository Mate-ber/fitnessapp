import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it } from "vitest";
import { AboutPage } from "./AboutPage";

describe("AboutPage", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>,
    );
  });
});
