import { useAppSelector } from "@/shared/hooks/useAppSelector"
import { selectBetsFilter } from "../model/selectors"
import { useGetBetsQuery } from "../api/betsApi"

export const useFilteredBets = () => {
  const selectedStatus = useAppSelector(selectBetsFilter)
  const { data: bets } = useGetBetsQuery()

  if (!bets) return []
  if (selectedStatus === "All") return bets
  return bets.filter((bet) => bet.status === selectedStatus)
}
