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
    sortArr: (state) => {
      for (let i = 0; i < state.inputArr.length; i++) {
        for (let j = 1; j < state.inputArr.length - i; j++) {
          if (state.inputArr[j] < state.inputArr[j - 1]) {
            let temp = state.inputArr[j - 1];
            state.inputArr[j - 1] = state.inputArr[j];
            state.inputArr[j] = temp;
          }
        }
      }
    },
  },
});

export const { saveInput, sortArr } = sortSlice.actions;
export default sortSlice.reducer;
