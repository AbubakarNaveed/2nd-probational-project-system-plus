import { configureStore } from "@reduxjs/toolkit";
import StatusReducer from "../Slices/statusSlice";
export const store = configureStore({
  reducer: { status: StatusReducer },
});
