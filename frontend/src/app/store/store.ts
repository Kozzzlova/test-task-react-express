import animationSlice from "@/features/FallingIcons/model/animationSlice"
import { betsApi } from "@/features/FilteredBets/api/betsApi"
import betsSlice from "@/features/FilteredBets/model/betsSlice"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    [betsApi.reducerPath]: betsApi.reducer,
    [betsSlice.name]: betsSlice.reducer,
    [animationSlice.name]: animationSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(betsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
