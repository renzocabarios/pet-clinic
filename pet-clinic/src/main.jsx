import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimalType from "./views/AnimalType/AnimalType";
import AddAnimalType from "./views/AnimalType/AddAnimalType";
import EditAnimalType from "./views/AnimalType/EditAnimalType";
import Animal from "./views/Animal/Animal";
import AddAnimal from "./views/Animal/AddAnimal";
import EditAnimal from "./views/Animal/EditAnimal";
import CONST from "../src/constants/index";
import RegisterUser from "./views/RegisterUser";
import Disease from "./views/Disease/Disease";
import AddDisease from "./views/Disease/AddDisease";
import EditDisease from "./views/Disease/EditDisease";
import User from "./views/User/User";
import { Provider } from "react-redux";
import { store } from "./states/index";
import LoginUser from "./views/LoginUser";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path={CONST.ROUTE.LOGIN} element={<LoginUser />} />
          <Route path={CONST.ROUTE.ANIMAL_TYPE} element={<AnimalType />} />
          <Route
            path={`${CONST.ROUTE.ANIMAL_TYPE}/${CONST.ROUTE.ADD}`}
            element={<AddAnimalType />}
          />
          <Route
            path={`${CONST.ROUTE.ANIMAL_TYPE}/:id/${CONST.ROUTE.EDIT}`}
            element={<EditAnimalType />}
          />
          <Route path={CONST.ROUTE.ANIMAL} element={<Animal />} />
          <Route
            path={`${CONST.ROUTE.ANIMAL}/${CONST.ROUTE.ADD}`}
            element={<AddAnimal />}
          />
          <Route
            path={`${CONST.ROUTE.ANIMAL}/:id/${CONST.ROUTE.EDIT}`}
            element={<EditAnimal />}
          />
          <Route
            path={`${CONST.ROUTE.USER}/register`}
            element={<RegisterUser />}
          />
          <Route path={CONST.ROUTE.USER} element={<User />} />

          <Route path={CONST.ROUTE.DISEASE} element={<Disease />} />
          <Route
            path={`${CONST.ROUTE.DISEASE}/${CONST.ROUTE.ADD}`}
            element={<AddDisease />}
          />
          <Route
            path={`${CONST.ROUTE.DISEASE}/:id/${CONST.ROUTE.EDIT}`}
            element={<EditDisease />}
          />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
