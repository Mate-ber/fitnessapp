import { Container, Typography, Box, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TimerIcon from "@mui/icons-material/Timer";
import PendingIcon from "@mui/icons-material/Pending";
import { FitnessForm } from "../../features/activities/components/FitnessForm";
import { ActivityList } from "../../features/activities/components/ActivityList";
import { useActivities } from "../../features/activities/context/useActivitiesContext";
import { QuoteCard } from "../../features/quotes/components/QuoteCard";

export function HomePage() {
  const {
    activities,
    stats,
    addActivity,
    deleteActivity,
    toggleCompleted,
    clearAll,
  } = useActivities();

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <FitnessForm onAdd={addActivity} />

      <QuoteCard />

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
          onClearAll={clearAll}
        />
      </Box>
    </Container>
  );
}
