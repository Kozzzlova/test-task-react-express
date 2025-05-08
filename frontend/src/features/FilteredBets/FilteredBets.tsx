import { getNextStatus } from "@/shared/lib/getNextStatus"
import { useUpdateBetMutation } from "./api/betsApi"
import { useFilteredBets } from "./hooks/useFilteredBets"
import { Bet, BetsStatus } from "./model/types"
import { S } from "./FilteredBets.styles"

type Props = {
  sortType: null | 'asc' | 'desc'
}

export const FilteredBets = ({sortType}: Props) => {
  const [updateStatus] = useUpdateBetMutation()
  const filteredBets = useFilteredBets()

  const nextStatusHandler = (id: number, status: BetsStatus) => {
    const nextStatus = getNextStatus(status)
    updateStatus({ betId: id, status: nextStatus })
  }

  const nextSortHandler = (bets: Bet[], sortType: null | 'asc' | 'desc') => {
    switch (sortType) {
      case 'asc':
        return [...bets].sort((a, b) => {
          if (a.status < a.status) return 1;
          if (a.status > b.status) return -1;
          return 0;
        }); 
      case 'desc':
        return [...bets].sort((a, b) => {
         if (a.status < b.status) return -1;
         if (a.status > b.status) return 1;
        return 0;
        }); 
      default:
        return bets;
    }
  }

  const sortedBets = nextSortHandler(filteredBets, sortType)
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
