// store.js
// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { loggerMiddleware } from "./redux/middlewares/loggerMiddleware";
import { timerReducer } from "./redux/reducers/timerReducer";
import { counterReducer } from "./redux/reducers/counterReducer";

export const store = configureStore({
  reducer: {
    timerReducer,
    counterReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware)
});
