import type { Activity } from "../types"

interface Props {
    activities: Activity[]
    onDelete: (id: number) => void
    onToggle: (id: number) => void
}

export function ActivityList({ activities, onDelete, onToggle }: Props) {
    if (activities.length === 0) {
        return <p>No activities yet. Add one above!</p>
    }

    return (
        <ul style={{ listStyle: "none", padding: 0, marginTop: "2rem", maxWidth: 400 }}>
            {activities.map((a) => (
                <li
                    key={a.id}
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0.75rem 1rem",
                        marginBottom: "0.5rem",
                        border: "1px solid #444",
                        borderRadius: "8px",
                        opacity: a.completed ? 0.6 : 1,
                    }}
                >
                    <div>
                        <strong style={{ textDecoration: a.completed ? "line-through" : "none" }}>
                            {a.activity}
                        </strong>
                        <span style={{ marginLeft: "0.5rem", fontSize: "0.85rem", color: "#aaa" }}>
                            {a.duration} min
                        </span>
                    </div>

                    <div style={{ display: "flex", gap: "0.5rem" }}>
                        <button type="button" onClick={() => onToggle(a.id)}>
                            {a.completed ? "Undo" : "Done"}
                        </button>
                        <button type="button" onClick={() => onDelete(a.id)}>
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}
