import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BetsStatus, SortBy, SortOrder } from "./types"

type InitialState = {
  statusFilter: BetsStatus | undefined,
  sortOrder: SortOrder
  sortBy: SortBy
}

const initialState: InitialState = {
  statusFilter: undefined,
  sortOrder: undefined,
  sortBy: undefined
}

const betsSlice = createSlice({
  name: "bets",
  initialState,
  reducers: {
    setStatusFilter(state, action: PayloadAction<BetsStatus | undefined>) {
      state.statusFilter = action.payload
    },
    setSortOrder(state, action: PayloadAction<SortOrder>) {
      state.sortOrder = action.payload
    },
    setSortBy(state, action: PayloadAction<SortBy>) {
      state.sortBy = action.payload
    },
  },
})

export const { setStatusFilter, setSortOrder, setSortBy } = betsSlice.actions
export default betsSlice
