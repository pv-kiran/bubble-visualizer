import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputArr: [],
  sortSteps: [],
  compareIndices: [],
  testArr: [],
  testIndices: [],
  isComplete: false,
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    // saving the use input
    saveInput: (state, action) => {
      state.inputArr = action.payload;
    },

    testSort: (state, action) => {
      const { testArr, testIndices } = action.payload;
      console.log(testArr);
      state.testArr = testArr;
      state.testIndices = testIndices;
    },

    sortComplete: (state) => {
      state.isComplete = true;
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

export const { saveInput, sortArr, setSortData, testSort, sortComplete } =
  sortSlice.actions;
export default sortSlice.reducer;
