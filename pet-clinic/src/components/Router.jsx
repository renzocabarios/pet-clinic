import { useRoutes } from "react-router-dom";
import LoginUser from "../views/LoginUser";
import App from "../App";
import CONST from "../constants/index";
import RegisterUser from "../views/RegisterUser";
import Dashboard from "../Dashboard";
import AnimalType from "../views/AnimalType/AnimalType";
import AddAnimalType from "../views/AnimalType/AddAnimalType";
import EditAnimalType from "../views/AnimalType/EditAnimalType";
import Animal from "../views/Animal/Animal";
import AddAnimal from "../views/Animal/AddAnimal";
import EditAnimal from "../views/Animal/EditAnimal";
import Disease from "../views/Disease/Disease";
import AddDisease from "../views/Disease/AddDisease";
import EditDisease from "../views/Disease/EditDisease";
import User from "../views/User/User";

function Router() {
  return useRoutes([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: CONST.ROUTE.LOGIN,
          element: <LoginUser />,
        },
        {
          path: CONST.ROUTE.REGISTER,
          element: <RegisterUser />,
        },
        {
          path: `/${CONST.ROUTE.DASHBOARD}`,
          element: <Dashboard />,
          children: [
            {
              path: CONST.ROUTE.ANIMAL_TYPE,
              element: <AnimalType />,
            },
            {
              path: `${CONST.ROUTE.ANIMAL_TYPE}/${CONST.ROUTE.ADD}`,
              element: <AddAnimalType />,
            },
            {
              path: `${CONST.ROUTE.ANIMAL_TYPE}/:id/${CONST.ROUTE.EDIT}`,
              element: <EditAnimalType />,
            },
            {
              path: CONST.ROUTE.ANIMAL,
              element: <Animal />,
            },
            {
              path: `${CONST.ROUTE.ANIMAL}/${CONST.ROUTE.ADD}`,
              element: <AddAnimal />,
            },
            {
              path: `${CONST.ROUTE.ANIMAL}/:id/${CONST.ROUTE.EDIT}`,
              element: <EditAnimal />,
            },
            {
              path: CONST.ROUTE.DISEASE,
              element: <Disease />,
            },
            {
              path: `${CONST.ROUTE.DISEASE}/${CONST.ROUTE.ADD}`,
              element: <AddDisease />,
            },
            {
              path: `${CONST.ROUTE.DISEASE}/:id/${CONST.ROUTE.EDIT}`,
              element: <EditDisease />,
            },
            {
              path: CONST.ROUTE.USER,
              element: <User />,
            },
          ],
        },
      ],
    },
  ]);
}

export default Router;
