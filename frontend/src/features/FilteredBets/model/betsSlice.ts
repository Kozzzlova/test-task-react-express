import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SortType, StatusFilter } from "./types"

type InitialState = {
  statusFilter: StatusFilter,
  statusSortType: SortType
}

const initialState: InitialState = {
  statusFilter: "All",
  statusSortType: null
}

const betsSlice = createSlice({
  name: "bets",
  initialState,
  reducers: {
    setStatusFilter(state, action: PayloadAction<StatusFilter>) {
      state.statusFilter = action.payload
    },
    setStatusSortType(state, action: PayloadAction<SortType>) {
      state.statusSortType = action.payload
    },
  },
})

export const { setStatusFilter, setStatusSortType } = betsSlice.actions
export default betsSlice
