import { useState } from "react"
import { FitnessForm } from "./components/FitnessForm"
import { ActivityList } from "./components/ActivityList"
import type { Activity } from "./types"

function App() {
    const [activities, setActivities] = useState<Activity[]>([])

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

            <ActivityList
                activities={activities}
                onDelete={deleteActivity}
                onToggle={toggleCompleted}
            />
        </main>
    )
}

export default App