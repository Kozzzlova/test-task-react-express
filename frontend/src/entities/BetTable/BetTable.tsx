import { FilteredBets } from "@/features/FilteredBets/FilteredBets"
import { S } from "./BetTable.styles"
import BetFilterSelect from "../BetFilterSelect/BetFilterSelect"
import { useGetNextSortOrder } from "@/shared/hooks/useGetNextSortOrder"
import { useAppSelector } from "@/shared/hooks/useAppSelector"
import {  selectSortBy, selectSortOrder } from "@/features/FilteredBets/model/selectSort"
import { SortBy } from "@/features/FilteredBets/model/types"


export const BetTable = () => {
  const sortOrder = useAppSelector(selectSortOrder)
  const sortBy = useAppSelector(selectSortBy)
  const getSortIcon = (field: SortBy) => {
    if(sortBy !== field) return '↕'
    return sortOrder === 'asc' ? '⇧' : sortOrder === "desc" ? '⇩' : '↕'
  }
  const getNextAmountSort = useGetNextSortOrder('amount');
  const getNextStatusSort = useGetNextSortOrder('status');
  return (
    <S.Table>
      <S.HeaderRow>
        <div>Bet ID</div>
        <div>User ID</div>
        <div>Event Name</div>
        <S.SortCell>Amount
        <S.SortButton onClick={getNextAmountSort}>
            <span>{getSortIcon('amount') }</span>
           </S.SortButton>
        </S.SortCell>
        <S.SortCell>
        <BetFilterSelect />
          <S.SortButton onClick={getNextStatusSort}>
            <span>{getSortIcon('status') }</span>
           </S.SortButton>
        </S.SortCell>
        <div></div>
      </S.HeaderRow>
      <FilteredBets />
    </S.Table>
  )
}

export default BetTable
