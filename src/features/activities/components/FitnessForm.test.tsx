import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { FitnessForm } from "./FitnessForm";

describe("FitnessForm", () => {
  it("renders without crashing", () => {
    render(<FitnessForm onAdd={vi.fn()} />);
  });

  it("renders activity input", () => {
    render(<FitnessForm onAdd={vi.fn()} />);
    expect(screen.getByLabelText(/activity/i)).toBeInTheDocument();
  });

  it("renders duration input", () => {
    render(<FitnessForm onAdd={vi.fn()} />);
    expect(screen.getByLabelText(/duration/i)).toBeInTheDocument();
  });

  it("shows error when submitting empty activity name", async () => {
    render(<FitnessForm onAdd={vi.fn()} />);
    await userEvent.click(
      screen.getByRole("button", { name: /add activity/i }),
    );
    expect(
      screen.getByText(/activity name cannot be empty/i),
    ).toBeInTheDocument();
  });

  it("shows error when submitting invalid duration", async () => {
    render(<FitnessForm onAdd={vi.fn()} />);
    await userEvent.type(screen.getByLabelText(/activity/i), "Running");
    await userEvent.click(
      screen.getByRole("button", { name: /add activity/i }),
    );
    expect(
      screen.getByText(/duration must be a positive number/i),
    ).toBeInTheDocument();
  });

  it("calls onAdd with correct data when form is valid", async () => {
    const onAdd = vi.fn();
    render(<FitnessForm onAdd={onAdd} />);
    await userEvent.type(screen.getByLabelText(/activity/i), "Running");
    await userEvent.type(screen.getByLabelText(/duration/i), "30");
    await userEvent.click(
      screen.getByRole("button", { name: /add activity/i }),
    );
    expect(onAdd).toHaveBeenCalledWith({
      activity: "Running",
      duration: 30,
      completed: false,
    });
  });

  it("clears form after successful submit", async () => {
    render(<FitnessForm onAdd={vi.fn()} />);
    await userEvent.type(screen.getByLabelText(/activity/i), "Running");
    await userEvent.type(screen.getByLabelText(/duration/i), "30");
    await userEvent.click(
      screen.getByRole("button", { name: /add activity/i }),
    );
    expect(screen.getByLabelText(/activity/i)).toHaveValue("");
  });
});
