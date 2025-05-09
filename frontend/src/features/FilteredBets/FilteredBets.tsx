import { getNextStatus } from "@/shared/lib/getNextStatus"
import { useUpdateBetMutation } from "./api/betsApi"
import { useFilteredBets } from "./hooks/useFilteredBets"
import {  BetsStatus } from "./model/types"
import { S } from "./FilteredBets.styles"
import { useGetSortedBets } from "./hooks/useGetSortedBets"

export const FilteredBets = () => {
  const [updateStatus] = useUpdateBetMutation()
  const filteredBets = useFilteredBets()

  const nextStatusHandler = (id: number, status: BetsStatus) => {
    const nextStatus = getNextStatus(status)
    updateStatus({ betId: id, status: nextStatus })
  }

  const sortedBets = useGetSortedBets(filteredBets)

  return (
    <>
      {sortedBets.map((bet) => {
        return (
          <S.BodyRow key={bet.betId}>
            <S.Cell>{bet.betId}</S.Cell>
            <S.Cell>{bet.userId}</S.Cell>
            <S.Cell>{bet.eventName}</S.Cell>
            <S.Cell>{bet.amount}</S.Cell>
            <S.Cell $status={bet.status}>{bet.status}</S.Cell>
            <S.Cell>
              <S.Button
                onClick={() => {
                  nextStatusHandler(bet.betId, bet.status)
                }}
              >
                Update status
              </S.Button>
            </S.Cell>
          </S.BodyRow>
        )
      })}
    </>
  )
}
