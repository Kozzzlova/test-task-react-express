import { FilteredBets } from "@/features/FilteredBets/FilteredBets"
import { S } from "./BetTable.styles"
import BetFilterSelect from "../BetFilterSelect/BetFilterSelect"
import { useGetNextSortType } from "@/shared/hooks/useGetNextSortType"
import { useAppSelector } from "@/shared/hooks/useAppSelector"
import { selectStatusSortType } from "@/features/FilteredBets/model/selectStatusSortType"


export const BetTable = () => {
  const statusSortType = useAppSelector(selectStatusSortType)
  const checkStatusSortType = () => {
    return statusSortType === 'asc' ? '⇧' : statusSortType === "desc" ? '⇩' : ''
  }
  const getNextSortType = useGetNextSortType()
  return (
    <S.Table>
      <S.HeaderRow>
        <div>Bet ID</div>
        <div>User ID</div>
        <div>Event Name</div>
        <div>Amount</div>
        <S.StatusCell>
          <S.SortButton onClick={getNextSortType}>
            <span> Sort by status</span>
            <span>{checkStatusSortType() }</span>
           </S.SortButton>
          <BetFilterSelect />
        </S.StatusCell>
        <div></div>
      </S.HeaderRow>
      <FilteredBets />
    </S.Table>
  )
}

export default BetTable
