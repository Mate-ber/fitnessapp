import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useActivities } from "./useActivities";

describe("useActivities", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it("initializes with empty activities", () => {
    const { result } = renderHook(() => useActivities());
    expect(result.current.activities).toEqual([]);
  });

  it("adds an activity", () => {
    const { result } = renderHook(() => useActivities());
    act(() => {
      result.current.addActivity({
        activity: "Running",
        duration: 30,
        completed: false,
      });
    });
    expect(result.current.activities).toHaveLength(1);
    expect(result.current.activities[0].activity).toBe("Running");
  });

  it("deletes an activity", () => {
    const { result } = renderHook(() => useActivities());
    act(() => {
      result.current.addActivity({
        activity: "Running",
        duration: 30,
        completed: false,
      });
    });
    const id = result.current.activities[0].id;
    act(() => {
      result.current.deleteActivity(id);
    });
    expect(result.current.activities).toHaveLength(0);
  });

  it("toggles an activity completed state", () => {
    const { result } = renderHook(() => useActivities());
    act(() => {
      result.current.addActivity({
        activity: "Running",
        duration: 30,
        completed: false,
      });
    });
    const id = result.current.activities[0].id;
    act(() => {
      result.current.toggleCompleted(id);
    });
    expect(result.current.activities[0].completed).toBe(true);
  });

  it("clears all activities", () => {
    const { result } = renderHook(() => useActivities());
    act(() => {
      result.current.addActivity({
        activity: "Running",
        duration: 30,
        completed: false,
      });
      result.current.addActivity({
        activity: "Cycling",
        duration: 45,
        completed: false,
      });
    });
    act(() => {
      result.current.clearAll();
    });
    expect(result.current.activities).toHaveLength(0);
  });

  it("calculates stats correctly", () => {
    const { result } = renderHook(() => useActivities());
    act(() => {
      result.current.addActivity({
        activity: "Running",
        duration: 30,
        completed: true,
      });
      result.current.addActivity({
        activity: "Cycling",
        duration: 45,
        completed: false,
      });
    });
    expect(result.current.stats.totalDuration).toBe(75);
    expect(result.current.stats.completedCount).toBe(30);
    expect(result.current.stats.pendingCount).toBe(45);
  });
});
