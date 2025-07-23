import { configureStore } from "@reduxjs/toolkit";

import taskReducer from "../redux/features/Task/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
