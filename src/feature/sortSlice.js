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
      state.inputArr = action.payload;
    },

    // saving the sorting result and the sorting steps for the visualization
    setSortData: (state, action) => {
      const { inputArrCopy, sortSteps, compareIndices } = action.payload;
      state.inputArr = inputArrCopy;
      state.sortSteps = sortSteps;
      state.compareIndices = compareIndices;
    },
  },
});

export const { saveInput, sortArr, setSortData } = sortSlice.actions;
export default sortSlice.reducer;
