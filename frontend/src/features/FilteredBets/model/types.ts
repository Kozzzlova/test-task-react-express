export type BetsStatus = "Pending" | "Won" | "Lost"
export type StatusFilter = "All" | BetsStatus

export type Bet = {
  betId: number
  userId: string
  eventName: string
  amount: string
  status: BetsStatus
}

export type SortOrder = 'asc' | 'desc' | undefined
export type SortBy = 'status' | 'amount' | 'betId' | undefined