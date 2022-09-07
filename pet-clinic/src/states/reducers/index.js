import diseaseReducer, {
  fetchDisease,
  deleteDisease,
  updateDisease,
  addDisease,
} from "./disease.reducer";

import authReducer, { authUser } from "./auth.reducer";

import positionReducer, {
  fetchPosition,
  deletePosition,
  updatePosition,
  addPosition,
} from "./position.reducer";

import personnelReducer, {
  fetchPersonnel,
  updatePersonnel,
  addPersonnel,
} from "./personnel.reducer";

import animalTypeReducer, {
  fetchAnimalType,
  deleteAnimalType,
  updateAnimalType,
  addAnimalType,
} from "./animal-type.reducer";

import animalReducer, {
  fetchAnimal,
  deleteAnimal,
  updateAnimal,
  addAnimal,
} from "./animal.reducer";

import userReducer, { fetchUser, deleteUser } from "./user.reducer";

import adoptionReducer, {
  fetchAdoption,
  updateAdoptionStatus,
  addAdoption,
} from "./adoption.reducer";

import adopterReducer, {
  fetchAdopter,
  updateAdopter,
  addAdopter,
} from "./adopter.reducer";

export {
  adopterReducer,
  diseaseReducer,
  authReducer,
  positionReducer,
  personnelReducer,
  animalTypeReducer,
  animalReducer,
  userReducer,
  adoptionReducer,
  addAdoption,
  fetchAdopter,
  updateAdopter,
  addAdopter,
  updateAdoptionStatus,
  fetchAnimalType,
  deleteAnimalType,
  updateAnimalType,
  addAnimalType,
  fetchAnimal,
  deleteAnimal,
  updateAnimal,
  addAnimal,
  authUser,
  fetchDisease,
  deleteDisease,
  updateDisease,
  addDisease,
  fetchPersonnel,
  updatePersonnel,
  addPersonnel,
  fetchPosition,
  deletePosition,
  updatePosition,
  addPosition,
  fetchUser,
  deleteUser,
  fetchAdoption,
};
