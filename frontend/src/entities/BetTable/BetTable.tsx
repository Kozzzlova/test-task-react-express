import { FilteredBets } from "@/features/FilteredBets/FilteredBets"
import { S } from "./BetTable.styles"
import BetFilterSelect from "../BetFilterSelect/BetFilterSelect"

export const BetTable = () => {
  return (
    <S.Table>
      <S.HeaderRow>
        <div>Bet ID</div>
        <div>User ID</div>
        <div>Event Name</div>
        <div>Amount</div>
        <div>
          <BetFilterSelect />
        </div>
        <div></div>
      </S.HeaderRow>
      <FilteredBets />
    </S.Table>
  )
}

export default BetTable
