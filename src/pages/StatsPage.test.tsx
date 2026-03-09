import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it } from "vitest";
import { StatsPage } from "./StatsPage";

describe("StatsPage", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <StatsPage />
      </MemoryRouter>,
    );
  });
});
