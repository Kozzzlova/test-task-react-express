import { createSlice, PayloadAction } from "@reduxjs/toolkit"


const initialState = {
  animationShow: true,
}

const animationSlice = createSlice({
  name: "animation",
  initialState,
  reducers: {
    setAnimation(state, action: PayloadAction<boolean>) {
      state.animationShow = action.payload
    },
  },
})

export const { setAnimation } = animationSlice.actions
export default animationSlice
