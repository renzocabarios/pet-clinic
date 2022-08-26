import { configureStore } from "@reduxjs/toolkit";
import diseaseReducer from "./reducers/disease.reducer";

export const store = configureStore({
  reducer: {
    diseaseReducer,
  },
});
