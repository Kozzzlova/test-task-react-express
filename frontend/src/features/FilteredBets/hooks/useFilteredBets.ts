import { useAppSelector } from "@/shared/hooks/useAppSelector"
import { selectBetsFilter } from "../model/selectBetsFilter"
import { useGetBetsQuery } from "../api/betsApi"
import { useMemo } from "react"

export const useFilteredBets = () => {
  const selectedStatus = useAppSelector(selectBetsFilter)
  const { data: bets } = useGetBetsQuery()


  const filteredBets = useMemo(() => {

  if (!bets) return []
  if (selectedStatus === "All") return bets
  return bets.filter((bet) => bet.status === selectedStatus)    
  }, [bets, selectedStatus])
  return filteredBets
}
