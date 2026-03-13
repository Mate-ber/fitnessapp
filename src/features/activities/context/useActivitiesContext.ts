import { useContext } from "react";
import {
  ActivitiesContext,
  type ActivitiesContextValue,
} from "./ActivitiesContext";

export function useActivities(): ActivitiesContextValue {
  const context = useContext(ActivitiesContext);
  if (!context) throw new Error("Requires ActivitiesContext.");
  return context;
}
