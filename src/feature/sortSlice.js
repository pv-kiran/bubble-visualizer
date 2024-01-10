import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputArr: [],
  sortSteps: [],
  compareIndices: [],
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    // saving the use input
    saveInput: (state, action) => {
      state.inputArr = [...state.inputArr, action.payload];
    },

    // sorting the user input array
    sortArr: (state) => {
      const inputArrCopy = [...state.inputArr];
      let sortSteps = [];
      let compareIndices = [];

      // sorting logic
      for (let i = 0; i < inputArrCopy.length; i++) {
        for (let j = 1; j < inputArrCopy.length - i; j++) {
          if (inputArrCopy[j] < inputArrCopy[j - 1]) {
            let temp = inputArrCopy[j - 1];
            inputArrCopy[j - 1] = inputArrCopy[j];
            inputArrCopy[j] = temp;
          }

          // visualization logic
          sortSteps.push([...inputArrCopy]);
          compareIndices.push([j - 1, j]);
        }
      }
      // sorted array
      state.inputArr = inputArrCopy;

      // visualization logic
      state.sortSteps = sortSteps;
      state.compareIndices = compareIndices;
    },
  },
});

export const { saveInput, sortArr } = sortSlice.actions;
export default sortSlice.reducer;
