import { useRoutes } from "react-router-dom";
import LoginUser from "../views/LoginUser";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
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
import AddUser from "../views/User/AddUser";
import Position from "../views/Position/Position";
import AddPosition from "../views/Position/AddPosition";
import EditPosition from "../views/Position/EditPosition";
import Personnel from "../views/User/Personnel/Personnel";

function Router() {
  const location = useLocation();
  const navigate = useNavigate();

  const token = useSelector((state) => {
    return state.authReducer.token;
  });

  useEffect(() => {
    if (
      location.pathname.split("/").includes(CONST.ROUTE.DASHBOARD) &&
      !token
    ) {
      navigate(`/${CONST.ROUTE.LOGIN}`);
    }
  }, [location]);

  return useRoutes([
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
        {
          path: `${CONST.ROUTE.USER}/${CONST.ROUTE.ADD}`,
          element: <AddUser />,
        },
        {
          path: CONST.ROUTE.POSITION,
          element: <Position />,
        },
        {
          path: `${CONST.ROUTE.POSITION}/${CONST.ROUTE.ADD}`,
          element: <AddPosition />,
        },
        {
          path: `${CONST.ROUTE.POSITION}/:id/${CONST.ROUTE.EDIT}`,
          element: <EditPosition />,
        },
        {
          path: CONST.ROUTE.PERSONNEL,
          element: <Personnel />,
        },
      ],
    },
  ]);
}

export default Router;
