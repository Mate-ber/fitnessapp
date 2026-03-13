import { Typography, Paper, Stack, Divider } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TimerIcon from "@mui/icons-material/Timer";
import PendingIcon from "@mui/icons-material/Pending";
import { useActivities } from "../context/useActivitiesContext";

export function StatsPage() {
  const { activities, stats } = useActivities();

  const completedActivities = activities.filter((a) => a.completed);
  const pendingActivities = activities.filter((a) => !a.completed);

  return (
    <Stack spacing={3}>
      <Paper sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="h6" gutterBottom>
          Overall Progress
        </Typography>
        <Typography variant="h3" color="primary" fontWeight={700}>
          {stats.totalDuration > 0
            ? Math.round((stats.completedCount / stats.totalDuration) * 100)
            : 0}
          %
        </Typography>
        <Typography color="text.secondary">completed</Typography>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Stack spacing={1}>
          <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <TimerIcon color="inherit" fontSize="small" /> Total:{" "}
            {stats.totalDuration} min
          </Typography>
          <Divider />
          <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CheckCircleIcon color="primary" fontSize="small" /> Done:{" "}
            {stats.completedCount} min ({completedActivities.length} activities)
          </Typography>
          <Divider />
          <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PendingIcon color="secondary" fontSize="small" /> Pending:{" "}
            {stats.pendingCount} min ({pendingActivities.length} activities)
          </Typography>
        </Stack>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Motivation
        </Typography>
        <Typography color="primary" fontStyle="italic">
          {stats.message}
        </Typography>
      </Paper>
    </Stack>
  );
}
