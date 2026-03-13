import { createContext } from "react";
import type { Activity } from "../types";

type Stats = {
  totalDuration: number;
  completedCount: number;
  pendingCount: number;
  message: string;
};

export type ActivitiesContextValue = {
  activities: Activity[];
  stats: Stats;
  addActivity: (data: Omit<Activity, "id">) => void;
  deleteActivity: (id: number) => void;
  toggleCompleted: (id: number) => void;
  clearAll: () => void;
};

export const ActivitiesContext = createContext<
  ActivitiesContextValue | undefined
>(undefined);
