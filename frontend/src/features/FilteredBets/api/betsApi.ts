import { baseAppApi } from "@/app/services/baseAppApi"
import { Bet, BetsStatus } from "../model/types"

export const betsApi = baseAppApi.injectEndpoints({
  endpoints: (builder) => ({
    getBets: builder.query < Bet[], { status?: BetsStatus } >({
      query: ({status}) => ({
          url: "bets",
          params: { status}
      }),
      providesTags: ["Bets"],
    }),
    updateBet: builder.mutation<Bet, { betId: number; status: BetsStatus }>({
      query: ({ betId, status }) => ({
        url: `bets/${betId}`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: ["Bets"],
    }),
  }),
})

export const { useGetBetsQuery, useUpdateBetMutation } = betsApi
