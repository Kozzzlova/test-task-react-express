import { RootState } from "@/app/store/store"

export const selectBetsFilter = (state: RootState) => state.bets.statusFilter
