import type { Activity } from "./types";

export function getTotalDuration(activities: Activity[]): number {
  return activities.reduce((sum, a) => sum + a.duration, 0);
}

export function getPendingDuration(activities: Activity[]): number {
  return activities
    .filter((a) => !a.completed)
    .reduce((sum, a) => sum + a.duration, 0);
}

export function getMotivationalMessage(
  completed: number,
  total: number,
): string {
  if (total === 0) return "Add an activity!";
  if (completed === 0) return "Good Luck!";
  if (completed === total) return "Good work!";
  if (completed / total >= 0.5) return "Nearly Done.";
  return "Good start!";
}
