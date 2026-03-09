import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it } from "vitest";
import { SecondaryLayout } from "./SecondaryLayout";

describe("SecondaryLayout", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <SecondaryLayout />
      </MemoryRouter>,
    );
  });
});
