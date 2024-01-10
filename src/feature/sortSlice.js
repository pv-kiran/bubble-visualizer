import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputArr: [],
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    saveInput: (state, action) => {
      state.inputArr = [...state.inputArr, action.payload];
    },
    sortArr: () => {},
  },
});

export const { saveInput, sortArr } = sortSlice.actions;
export default sortSlice.reducer;
