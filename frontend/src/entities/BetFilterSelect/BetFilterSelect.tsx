import { selectBetsFilter } from "@/features/FilteredBets/model/selectBetsFilter"
import { BetsStatus } from "@/features/FilteredBets/model/types"
import { useAppDispatch } from "@/shared/hooks/useAppDispatch"
import { useAppSelector } from "@/shared/hooks/useAppSelector"
import { S } from "./BetFilterSelect.styles"
import { setStatusFilter } from "@/features/FilteredBets/model/betsSlice"

const BetFilterSelect = () => {
  const dispatch = useAppDispatch()
  const selectedStatus = useAppSelector(selectBetsFilter)
  const changeStatusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value;
    dispatch(setStatusFilter(value === 'All' ? undefined : value as BetsStatus ));  }

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
