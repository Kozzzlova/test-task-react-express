import { BetsStatus } from "@/features/FilteredBets/model/types"

export const getNextStatus = (status: BetsStatus) => {
  switch (status) {
    case "Pending":
      return "Won"
    case "Won":
      return "Lost"
    default:
      return "Pending"
  }
}
