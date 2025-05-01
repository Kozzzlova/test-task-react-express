import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { StatusFilter } from "./types"

const initialState = {
  statusFilter: "All",
}

const betsSlice = createSlice({
  name: "bets",
  initialState,
  reducers: {
    setStatusFilter(state, action: PayloadAction<StatusFilter>) {
      state.statusFilter = action.payload
    },
  },
})

export const { setStatusFilter } = betsSlice.actions
export default betsSlice
