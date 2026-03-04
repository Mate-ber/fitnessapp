import { useState, useMemo, useCallback } from "react"
import type { Activity } from "./types"
import { getTotalDuration, getPendingDuration, getMotivationalMessage } from "./utils"

export function useActivities() {
    const [activities, setActivities] = useState<Activity[]>([])

    const stats = useMemo(() => {
        const total = getTotalDuration(activities)
        const pending = getPendingDuration(activities)
        const completed = total - pending
        return {
            totalDuration: total,
            completedCount: completed,
            pendingCount: pending,
            message: getMotivationalMessage(completed, total),
        }
    }, [activities])

    const addActivity = useCallback((data: Omit<Activity, "id">) => {
        const newActivity: Activity = {
            ...data,
            id: Date.now(),
        }
        setActivities((prev) => [newActivity, ...prev])
    }, [])

    const deleteActivity = useCallback((id: number) => {
        setActivities((prev) => prev.filter((a) => a.id !== id))
    }, [])

    const toggleCompleted = useCallback((id: number) => {
        setActivities((prev) =>
            prev.map((a) => (a.id === id ? { ...a, completed: !a.completed } : a))
        )
    }, [])

    return { activities, stats, addActivity, deleteActivity, toggleCompleted }
}