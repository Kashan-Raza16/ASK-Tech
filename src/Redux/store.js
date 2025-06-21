import { configureStore } from "@reduxjs/toolkit";
import chartReducer from "../Pages/Dashbord/chartSlice";

export const store = configureStore({
  reducer: {
    charts: chartReducer,
  },
});