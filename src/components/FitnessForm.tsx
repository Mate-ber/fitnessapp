import { useState } from "react"


interface Props {
    onAdd: (data: {
        activity: string
        duration: number
        completed: boolean
    }) => void
}
export function FitnessForm({ onAdd }: Props) {
    const [activity, setActivity] = useState("")
    const [duration, setDuration] = useState("")
    const [completed, setCompleted] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        if (activity.trim() === "") {
            setError("Activity name cannot be empty.")
            return
        }

        const parsedDuration = Number(duration)
        if (!duration || parsedDuration <= 0 || !Number.isFinite(parsedDuration)) {
            setError("Duration must be a positive number.")
            return
        }

        setError(null)
        onAdd({ activity: activity.trim(), duration: parsedDuration, completed })
        setActivity("")
        setDuration("")
        setCompleted(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <div>
                <label htmlFor="activity">Activity</label>
                <input
                    id="activity"
                    type="text"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="duration">Duration</label>
                <input
                    id="duration"
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />
            </div>

            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={(e) => setCompleted(e.target.checked)}
                    />
                    {" "}Mark as completed
                </label>
            </div>

            <button type="submit">Add Activity</button>
        </form>
    )
}
