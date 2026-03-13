import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { ActivityList } from "./ActivityList";
import type { Activity } from "../../../types";

const activities: Activity[] = [
  { id: 1, activity: "Running", duration: 30, completed: false },
  { id: 2, activity: "Cycling", duration: 45, completed: true },
];

describe("ActivityList", () => {
  it("renders without crashing", () => {
    render(
      <ActivityList
        activities={[]}
        onDelete={vi.fn()}
        onToggle={vi.fn()}
        onClearAll={vi.fn()}
      />,
    );
  });

  it("shows empty message when no activities", () => {
    render(
      <ActivityList
        activities={[]}
        onDelete={vi.fn()}
        onToggle={vi.fn()}
        onClearAll={vi.fn()}
      />,
    );
    expect(screen.getByText(/no activities yet/i)).toBeInTheDocument();
  });

  it("renders all activities", () => {
    render(
      <ActivityList
        activities={activities}
        onDelete={vi.fn()}
        onToggle={vi.fn()}
        onClearAll={vi.fn()}
      />,
    );
    expect(screen.getByText("Running")).toBeInTheDocument();
    expect(screen.getByText("Cycling")).toBeInTheDocument();
  });

  it("renders activity durations", () => {
    render(
      <ActivityList
        activities={activities}
        onDelete={vi.fn()}
        onToggle={vi.fn()}
        onClearAll={vi.fn()}
      />,
    );
    expect(screen.getByText(/30 min/i)).toBeInTheDocument();
    expect(screen.getByText(/45 min/i)).toBeInTheDocument();
  });

  it("calls onDelete when delete button is clicked", async () => {
    const onDelete = vi.fn();
    render(
      <ActivityList
        activities={activities}
        onDelete={onDelete}
        onToggle={vi.fn()}
        onClearAll={vi.fn()}
      />,
    );
    const deleteButtons = screen.getAllByRole("button", { name: "" });
    await userEvent.click(deleteButtons[0]);
    expect(onDelete).toHaveBeenCalledWith(1);
  });

  it("calls onToggle when checkbox is clicked", async () => {
    const onToggle = vi.fn();
    render(
      <ActivityList
        activities={activities}
        onDelete={vi.fn()}
        onToggle={onToggle}
        onClearAll={vi.fn()}
      />,
    );
    const checkboxes = screen.getAllByRole("checkbox");
    await userEvent.click(checkboxes[0]);
    expect(onToggle).toHaveBeenCalledWith(1);
  });

  it("calls onClearAll when clear all button is clicked", async () => {
    const onClearAll = vi.fn();
    render(
      <ActivityList
        activities={activities}
        onDelete={vi.fn()}
        onToggle={vi.fn()}
        onClearAll={onClearAll}
      />,
    );
    await userEvent.click(screen.getByRole("button", { name: /clear all/i }));
    expect(onClearAll).toHaveBeenCalled();
  });
});
