import {
  Typography,
  Paper,
  Stack,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const features = [
  "Log activities with a name and duration",
  "Mark activities as completed",
  "Track total, completed, and pending minutes",
  "Delete individual activities or clear all",
  "Data is saved automatically in your browser",
];

export function AboutPage() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Stack spacing={3}>
        <Paper sx={{ p: 3, textAlign: "center" }}>
          <FitnessCenterIcon color="primary" sx={{ fontSize: 48, mb: 1 }} />
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Fitness Tracker
          </Typography>
          <Typography color="text.secondary">
            A simple app to log your workouts and keep track of your progress
            day by day.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Features
          </Typography>
          <List dense>
            {features.map((f) => (
              <ListItem key={f}>
                <ListItemText primary={f} />
              </ListItem>
            ))}
          </List>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            How to use
          </Typography>
          <Typography color="text.secondary">
            Head to the Tracker page, type in an activity name and how many
            minutes it took, then hit Add Activity. Check it off when done.
            Visit the Stats page to see your overall progress.
          </Typography>
        </Paper>
      </Stack>
    </Container>
  );
}
