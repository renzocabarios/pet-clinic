import { configureStore } from "@reduxjs/toolkit";
import {
  diseaseReducer,
  authReducer,
  positionReducer,
  personnelReducer,
  animalTypeReducer,
  animalReducer,
  userReducer,
  adoptionReducer,
  adopterReducer,
} from "./reducers";

export const store = configureStore({
  reducer: {
    adopterReducer,
    diseaseReducer,
    authReducer,
    positionReducer,
    personnelReducer,
    animalTypeReducer,
    animalReducer,
    userReducer,
    adoptionReducer,
  },
});
