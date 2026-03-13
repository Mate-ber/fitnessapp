import { useCallback, useEffect, useMemo, useState } from "react";
import type { Activity } from "../types";
import {
  getTotalDuration,
  getPendingDuration,
  getMotivationalMessage,
} from "../utils";
import { ActivitiesContext } from "./ActivitiesContext";

export const ActivitiesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activities, setActivities] = useState<Activity[]>(() => {
    const saved = localStorage.getItem("activities");
    return saved ? (JSON.parse(saved) as Activity[]) : [];
  });

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  const addActivity = useCallback((data: Omit<Activity, "id">) => {
    setActivities((prev) => [{ ...data, id: Date.now() }, ...prev]);
  }, []);

  const deleteActivity = useCallback((id: number) => {
    setActivities((prev) => prev.filter((a) => a.id !== id));
  }, []);

  const toggleCompleted = useCallback((id: number) => {
    setActivities((prev) =>
      prev.map((a) => (a.id === id ? { ...a, completed: !a.completed } : a)),
    );
  }, []);

  const clearAll = useCallback(() => {
    setActivities([]);
  }, []);

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

  const context = useMemo(
    () => ({
      activities,
      stats,
      addActivity,
      deleteActivity,
      toggleCompleted,
      clearAll,
    }),
    [activities, stats, addActivity, deleteActivity, toggleCompleted, clearAll],
  );

  return <ActivitiesContext value={context}>{children}</ActivitiesContext>;
};
