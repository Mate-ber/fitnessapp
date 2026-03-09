import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it } from "vitest";
import { HomePage } from "./HomePage";

describe("HomePage", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );
  });
});
