import { configureStore } from "@reduxjs/toolkit";
import diseaseReducer from "./reducers/disease.reducer";
import authReducer from "./reducers/auth.reducer";
import positionReducer from "./reducers/position.reducer";
import personnelReducer from "./reducers/personnel.reducer";

export const store = configureStore({
  reducer: {
    diseaseReducer,
    authReducer,
    positionReducer,
    personnelReducer,
  },
});
