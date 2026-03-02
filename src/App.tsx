import { useState, useMemo } from "react"
import { FitnessForm } from "./components/FitnessForm"
import { ActivityList } from "./components/ActivityList"
import type { Activity } from "./types"
import { getTotalDuration, getPendingDuration, getMotivationalMessage } from "./utils"

function App() {
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

    function addActivity(data: Omit<Activity, "id">) {
        const newActivity: Activity = {
            ...data,
            id: Date.now(),
        }
        setActivities((prev) => [newActivity, ...prev])
    }

    function deleteActivity(id: number) {
        setActivities((prev) => prev.filter((a) => a.id !== id))
    }

    function toggleCompleted(id: number) {
        setActivities((prev) =>
            prev.map((a) =>
                a.id === id ? { ...a, completed: !a.completed } : a
            )
        )
    }

    return (
        <main style={{ padding: "2rem" }}>
            <h1>Fitness Tracker</h1>

            <FitnessForm onAdd={addActivity} />

            <div style={{ marginTop: "1.5rem", padding: "1rem", border: "1px solid #555", borderRadius: "8px", maxWidth: 400 }}>
                <p style={{ margin: 0 }}>{stats.message}</p>
                <p style={{ margin: "0.5rem 0 0" }}>
                    {stats.completedCount} min done &nbsp;|&nbsp;
                    {stats.pendingCount} min pending &nbsp;|&nbsp;
                    {stats.totalDuration} min total
                </p>
            </div>

            <ActivityList
                activities={activities}
                onDelete={deleteActivity}
                onToggle={toggleCompleted}
            />
        </main>
    )
}

export default App