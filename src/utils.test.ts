import { describe, it, expect } from "vitest"
import { getTotalDuration, getPendingDuration, getMotivationalMessage } from "./utils"
import type { Activity } from "./types"

const activities: Activity[] = [
    { id: 1, activity: "Running", duration: 30, completed: true },
    { id: 2, activity: "Cycling", duration: 45, completed: false },
    { id: 3, activity: "Swimming", duration: 60, completed: true },
]

describe("getTotalDuration", () => {
    it("returns 0 for empty array", () => {
        expect(getTotalDuration([])).toBe(0)
    })

    it("returns sum of all durations", () => {
        expect(getTotalDuration(activities)).toBe(135)
    })

    it("counts both completed and pending activities", () => {
        expect(getTotalDuration(activities)).toBe(135)
    })
})

describe("getPendingDuration", () => {
    it("returns 0 for empty array", () => {
        expect(getPendingDuration([])).toBe(0)
    })

    it("returns sum of only incomplete activities", () => {
        expect(getPendingDuration(activities)).toBe(45)
    })

    it("returns 0 when all activities are completed", () => {
        const allDone = activities.map((a) => ({ ...a, completed: true }))
        expect(getPendingDuration(allDone)).toBe(0)
    })

    it("returns total when no activities are completed", () => {
        const noneDone = activities.map((a) => ({ ...a, completed: false }))
        expect(getPendingDuration(noneDone)).toBe(135)
    })
})

describe("getMotivationalMessage", () => {
    it("returns add activity message when total is 0", () => {
        expect(getMotivationalMessage(0, 0)).toBe("Add an activity!")
    })

    it("returns good luck when nothing is completed", () => {
        expect(getMotivationalMessage(0, 100)).toBe("Good Luck!")
    })

    it("returns good work when everything is completed", () => {
        expect(getMotivationalMessage(100, 100)).toBe("Good work!")
    })

    it("returns nearly done when more than half is completed", () => {
        expect(getMotivationalMessage(60, 100)).toBe("Nearly Done.")
    })

    it("returns good start when less than half is completed", () => {
        expect(getMotivationalMessage(30, 100)).toBe("Good start!")
    })
})