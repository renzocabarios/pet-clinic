import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimalType from "./views/AnimalType";
import AddAnimalType from "./views/AddAnimalType";
import EditAnimalType from "./views/EditAnimalType";
import CONST from "../src/constants/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path={CONST.ROUTE.ANIMAL_TYPE} element={<AnimalType />} />
        <Route
          path={`${CONST.ROUTE.ANIMAL_TYPE}/${CONST.ROUTE.ADD}`}
          element={<AddAnimalType />}
        />
        <Route
          path={`${CONST.ROUTE.ANIMAL_TYPE}/:id/${CONST.ROUTE.EDIT}`}
          element={<EditAnimalType />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
