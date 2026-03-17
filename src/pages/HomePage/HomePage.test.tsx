import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ActivitiesProvider } from "../../features/activities/context/ActivitiesProvider";
import { HomePage } from "./HomePage";

describe("HomePage", () => {
  it("renders without crashing", () => {
    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });
    render(
      <QueryClientProvider client={queryClient}>
        <ActivitiesProvider>
          <MemoryRouter>
            <HomePage />
          </MemoryRouter>
        </ActivitiesProvider>
      </QueryClientProvider>,
    );
  });
});
