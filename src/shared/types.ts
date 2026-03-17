export interface Activity {
  id: number
  activity: string
  duration: number
  completed: boolean
}

export type Stats = {
  totalDuration: number
  completedCount: number
  pendingCount: number
  message: string
}
