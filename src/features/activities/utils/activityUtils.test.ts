import { describe, it, expect } from "vitest"
import {
  getTotalDuration,
  getPendingDuration,
  getMotivationalMessage,
} from "./activityUtils"
import type { Activity } from "../../../shared/types"

const activities: Activity[] = [
  { id: 1, activity: "Run", duration: 30, completed: true },
  { id: 2, activity: "Swim", duration: 20, completed: false },
]

describe("getTotalDuration", () => {
  it("sums all durations", () => {
    expect(getTotalDuration(activities)).toBe(50)
  })
  it("returns 0 for empty list", () => {
    expect(getTotalDuration([])).toBe(0)
  })
})

describe("getPendingDuration", () => {
  it("sums only pending durations", () => {
    expect(getPendingDuration(activities)).toBe(20)
  })
})

describe("getMotivationalMessage", () => {
  it("returns add message when no activities", () => {
    expect(getMotivationalMessage(0, 0)).toBe("Add an activity!")
  })
  it("returns good luck when nothing completed", () => {
    expect(getMotivationalMessage(0, 50)).toBe("Good Luck!")
  })
  it("returns good work when all completed", () => {
    expect(getMotivationalMessage(50, 50)).toBe("Good work!")
  })
  it("returns nearly done when >= 50% complete", () => {
    expect(getMotivationalMessage(30, 50)).toBe("Nearly Done.")
  })
  it("returns good start when < 50% complete", () => {
    expect(getMotivationalMessage(10, 50)).toBe("Good start!")
  })
})
