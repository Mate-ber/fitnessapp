import { useState, useMemo } from "react";
import { FitnessForm } from "./components/FitnessForm";
import { ActivityList } from "./components/ActivityList";
import type { Activity } from "./types";
import {
  getTotalDuration,
  getPendingDuration,
  getMotivationalMessage,
} from "./utils";
import { Container, Typography, Box, Paper } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TimerIcon from "@mui/icons-material/Timer";
import PendingIcon from "@mui/icons-material/Pending";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  const stats = useMemo(() => {
    const total = getTotalDuration(activities);
    const pending = getPendingDuration(activities);
    const completed = total - pending;
    return {
      totalDuration: total,
      completedCount: completed,
      pendingCount: pending,
      message: getMotivationalMessage(completed, total),
    };
  }, [activities]);

  function addActivity(data: Omit<Activity, "id">) {
    const newActivity: Activity = {
      ...data,
      id: Date.now(),
    };

    setActivities((prev) => [newActivity, ...prev]);
  }

  function deleteActivity(id: number) {
    setActivities((prev) => prev.filter((a) => a.id !== id));
  }

  function toggleCompleted(id: number) {
    setActivities((prev) =>
      prev.map((a) => (a.id === id ? { ...a, completed: !a.completed } : a)),
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            mb: 1,
          }}
        >
          <FitnessCenterIcon color="primary" />
          <Typography variant="h4" color="primary" gutterBottom align="center">
            Fitness Tracker
          </Typography>
        </Box>

        <FitnessForm onAdd={addActivity} />

        <Paper elevation={6} sx={{ mt: 3, p: 4, textAlign: "center" }}>
          <Typography>{stats.message}</Typography>

          <Typography
            sx={{
              mt: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <CheckCircleIcon fontSize="small" color="primary" />{" "}
            {stats.completedCount} min done {"| "}
            <PendingIcon fontSize="small" color="secondary" />{" "}
            {stats.pendingCount} min pending {"| "}
            <TimerIcon fontSize="small" /> {stats.totalDuration} min total
          </Typography>
        </Paper>

        <Box sx={{ mt: 3 }}>
          <ActivityList
            activities={activities}
            onDelete={deleteActivity}
            onToggle={toggleCompleted}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default App;
