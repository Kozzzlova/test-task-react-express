import { FilteredBets } from "@/features/FilteredBets/FilteredBets"
import { S } from "./BetTable.styles"
import BetFilterSelect from "../BetFilterSelect/BetFilterSelect"
import { useState } from "react"

export type SortType = null | 'asc' | 'desc'

export const BetTable = () => {
  const [sortType, setSortType] = useState<SortType>(null)
  
  const getNextSortType = () => {
    let nextSortType: SortType;
    switch (sortType) {
      case null:
        nextSortType = 'asc';
        break;
      case 'asc':
        nextSortType = 'desc';
        break;
      case 'desc':
        nextSortType = null;
        break;
      default:
        nextSortType = null;
    }
    setSortType(nextSortType);
    console.log(nextSortType); 
  };
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
            <span>{ sortType === 'asc' ? '⇧' : sortType === "desc" ? '⇩' : ''}</span>
           </S.SortButton>
          <BetFilterSelect />
        </S.StatusCell>
        <div></div>
      </S.HeaderRow>
      <FilteredBets sortType={sortType } />
    </S.Table>
  )
}

export default BetTable
