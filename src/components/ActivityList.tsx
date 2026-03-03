import type { Activity } from "../types"
import { List, ListItem, ListItemText, IconButton, Checkbox, Paper, Typography, Box } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import TimerIcon from "@mui/icons-material/Timer"

interface Props {
    activities: Activity[]
    onDelete: (id: number) => void
    onToggle: (id: number) => void
}

export function ActivityList({ activities, onDelete, onToggle }: Props) {
    if (activities.length === 0) {
        return <Typography sx={{ mt: 3 }}>No activities yet. Add one above!</Typography>
    }

    return (
        <Paper sx={{ mt: 3 }}>
            <List>
                {activities.map((a) => (
                    <ListItem
                        key={a.id}
                        secondaryAction={
                            <IconButton edge="end" onClick={() => onDelete(a.id)}>
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <Checkbox
                            checked={a.completed}
                            onChange={() => onToggle(a.id)}
                        />

                        <ListItemText
                            primary={a.activity}
                            secondary={
                                <Box component="span" sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                    <TimerIcon sx={{ fontSize: 14 }} />
                                    {a.duration} min
                                </Box>
                            }
                            sx={{
                                textDecoration: a.completed ? "line-through" : "none",
                                opacity: a.completed ? 0.6 : 1,
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Paper>
    )
}