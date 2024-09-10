import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./taskSlice"; // Make sure this path is correct

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
