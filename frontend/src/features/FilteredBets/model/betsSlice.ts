import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BetsStatus, SortType } from "./types"

type InitialState = {
  statusFilter: BetsStatus | undefined,
  statusSortType: SortType
}

const initialState: InitialState = {
  statusFilter: undefined,
  statusSortType: null
}

const betsSlice = createSlice({
  name: "bets",
  initialState,
  reducers: {
    setStatusFilter(state, action: PayloadAction<BetsStatus | undefined>) {
      state.statusFilter = action.payload
    },
    setStatusSortType(state, action: PayloadAction<SortType>) {
      state.statusSortType = action.payload
    },
  },
})

export const { setStatusFilter, setStatusSortType } = betsSlice.actions
export default betsSlice
