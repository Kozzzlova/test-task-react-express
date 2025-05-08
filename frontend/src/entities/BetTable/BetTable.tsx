import { FilteredBets } from "@/features/FilteredBets/FilteredBets"
import { S } from "./BetTable.styles"
import BetFilterSelect from "../BetFilterSelect/BetFilterSelect"
import { useState } from "react"

export type SortType = null | 'asc' | 'desc'

export const BetTable = () => {
  const [sortType, setSortType] = useState<SortType>(null)
  
  const getNextSortType = (sortType: SortType) => {
    switch (sortType) {
      case null:
        setSortType('asc')
        return;
      case 'asc':
        setSortType('desc')
        return;
      default:
        setSortType(null);
        return;
    }
  }
  return (
    <S.Table>
      <S.HeaderRow>
        <div>Bet ID</div>
        <div>User ID</div>
        <div>Event Name</div>
        <div>Amount</div>
        <div>
          <BetFilterSelect />
          <button onClick={() => { getNextSortType(sortType); console.log(sortType); }}>sort</button>
        </div>
        <div></div>
      </S.HeaderRow>
      <FilteredBets sortType={sortType } />
    </S.Table>
  )
}

export default BetTable
