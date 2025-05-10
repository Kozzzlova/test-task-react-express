import { RootState } from "@/app/store/store"

export const selectSortBy = (state: RootState) => state.bets.sortBy
export const selectSortOrder = (state: RootState) => state.bets.sortOrder