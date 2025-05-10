import { getNextStatus } from "@/shared/lib/getNextStatus"
import { useGetBetsQuery, useUpdateBetMutation } from "./api/betsApi"
import {  BetsStatus } from "./model/types"
import { S } from "./FilteredBets.styles"
import { useAppSelector } from "@/shared/hooks/useAppSelector"
import { selectBetsFilter } from "./model/selectBetsFilter"
import { selectSortOrder, selectSortBy } from "./model/selectSort"

export const FilteredBets = () => {
  const [updateStatus] = useUpdateBetMutation()
  const selectedStatus = useAppSelector(selectBetsFilter)
  const selectedSortOrder = useAppSelector(selectSortOrder)
  const selectedSortBy = useAppSelector(selectSortBy)
  const { data: bets } = useGetBetsQuery({status: selectedStatus, sortBy: selectedSortBy, sortOrder: selectedSortOrder})

  const nextStatusHandler = (id: number, status: BetsStatus) => {
    const nextStatus = getNextStatus(status)
    updateStatus({ betId: id, status: nextStatus })
  }
  return (
    <>
      {bets ? (bets.map((bet) => {
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
      })) : (<span>List is empty</span>)}
    </>
  )
}
