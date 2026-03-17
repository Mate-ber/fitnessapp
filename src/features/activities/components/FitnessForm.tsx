import React, { useState } from "react"
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  Alert,
  Paper,
} from "@mui/material"
import type { Activity } from "../../../shared/types"

interface Props {
  onAdd: (data: Omit<Activity, "id">) => void
}

export function FitnessForm({ onAdd }: Props) {
  const [activity, setActivity] = useState("")
  const [duration, setDuration] = useState("")
  const [completed, setCompleted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.SyntheticEvent) => {
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
    <Paper sx={{ p: 2 }}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          {error && <Alert severity="error">{error}</Alert>}
          <TextField
            label="Activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            fullWidth
          />
          <TextField
            label="Duration (minutes)"
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            fullWidth
            inputProps={{ style: { MozAppearance: "textfield" } }}
            sx={{
              "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                { display: "none" },
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
              />
            }
            label="Mark as completed"
          />
          <Button type="submit" variant="contained" color="secondary">
            Add Activity
          </Button>
        </Stack>
      </form>
    </Paper>
  )
}
