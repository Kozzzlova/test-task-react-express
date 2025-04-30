import { setStatusFilter } from "@/features/FilteredBets/model/betsSlice"
import { selectBetsFilter } from "@/features/FilteredBets/model/selectors"
import { StatusFilter } from "@/features/FilteredBets/model/types"
import { useAppDispatch } from "@/shared/hooks/useAppDispatch"
import { useAppSelector } from "@/shared/hooks/useAppSelector"
import { S } from "./BetFilterSelect.styles"

const BetFilterSelect = () => {
  const dispatch = useAppDispatch()
  const selectedStatus = useAppSelector(selectBetsFilter)
  const changeStatusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setStatusFilter(e.currentTarget.value as StatusFilter))
  }

  return (
    <S.Select value={selectedStatus} onChange={changeStatusHandler}>
      <option value="All">All</option>
      <option value="Pending">Pending</option>
      <option value="Won">Won</option>
      <option value="Lost">Lost</option>
    </S.Select>
  )
}

export default BetFilterSelect
