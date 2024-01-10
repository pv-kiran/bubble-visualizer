import { configureStore } from "@reduxjs/toolkit";
import sortReducer from "../feature/sortSlice";
const store = configureStore({
  reducer: {
    sort: sortReducer,
  },
});

export default store;
