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
      const inputArrCopy = [...state.inputArr];
      for (let i = 0; i < inputArrCopy.length; i++) {
        for (let j = 1; j < inputArrCopy.length - i; j++) {
          if (inputArrCopy[j] < inputArrCopy[j - 1]) {
            let temp = inputArrCopy[j - 1];
            inputArrCopy[j - 1] = inputArrCopy[j];
            inputArrCopy[j] = temp;
          }
        }
      }
      state.inputArr = inputArrCopy;
    },
  },
});

export const { saveInput, sortArr } = sortSlice.actions;
export default sortSlice.reducer;
