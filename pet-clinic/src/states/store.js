import { configureStore } from "@reduxjs/toolkit";
import {
  diseaseReducer,
  authReducer,
  positionReducer,
  personnelReducer,
  animalTypeReducer,
  animalReducer,
  userReducer,
} from "./reducers";

export const store = configureStore({
  reducer: {
    diseaseReducer,
    authReducer,
    positionReducer,
    personnelReducer,
    animalTypeReducer,
    animalReducer,
    userReducer,
  },
});
