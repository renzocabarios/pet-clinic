import { useRoutes } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ROUTE } from "@/constants";
import {
  RegisterUser,
  Dashboard,
  Setting,
  LoginUser,
  AdoptAnimal,
  ConfirmAdopt,
  MyAnimal,
  Personnel,
  AddPersonnel,
  EditPersonnel,
  User,
  AddUser,
  AddPosition,
  EditPosition,
  Position,
  Disease,
  AddDisease,
  EditDisease,
  Animal,
  AddAnimal,
  EditAnimal,
  AnimalType,
  AddAnimalType,
  EditAnimalType,
  Adoption,
  Adopter,
  AddAdopter,
} from "../views";

function Router() {


  return useRoutes([
    {
      path: ROUTE.LOGIN,
      element: <LoginUser />,
    },
    {
      path: ROUTE.REGISTER,
      element: <RegisterUser />,
    },
    {
      path: ROUTE.ADOPT,
      element: <AdoptAnimal />,
    },
    {
      path: `/${ROUTE.ADOPT}/${ROUTE.CONFIRM}`,
      element: <ConfirmAdopt />,
    },
    {
      path: ROUTE.MY_ANIMAL,
      element: <MyAnimal />,
    },
    {
      path: `/${ROUTE.DASHBOARD}`,
      element: <Dashboard />,
      children: [
        {
          path: `${ROUTE.ADOPTER}/${ROUTE.ADD}`,
          element: <AddAdopter />,
        },
        {
          path: ROUTE.ADOPTER,
          element: <Adopter />,
        },
        {
          path: ROUTE.ADOPTION,
          element: <Adoption />,
        },
        {
          path: ROUTE.ANIMAL_TYPE,
          element: <AnimalType />,
        },
        {
          path: `${ROUTE.ANIMAL_TYPE}/${ROUTE.ADD}`,
          element: <AddAnimalType />,
        },
        {
          path: `${ROUTE.ANIMAL_TYPE}/:id/${ROUTE.EDIT}`,
          element: <EditAnimalType />,
        },
        {
          path: ROUTE.ANIMAL,
          element: <Animal />,
        },
        {
          path: `${ROUTE.ANIMAL}/${ROUTE.ADD}`,
          element: <AddAnimal />,
        },
        {
          path: `${ROUTE.ANIMAL}/:id/${ROUTE.EDIT}`,
          element: <EditAnimal />,
        },
        {
          path: ROUTE.DISEASE,
          element: <Disease />,
        },
        {
          path: `${ROUTE.DISEASE}/${ROUTE.ADD}`,
          element: <AddDisease />,
        },
        {
          path: `${ROUTE.DISEASE}/:id/${ROUTE.EDIT}`,
          element: <EditDisease />,
        },
        {
          path: ROUTE.USER,
          element: <User />,
        },
        {
          path: `${ROUTE.USER}/${ROUTE.ADD}`,
          element: <AddUser />,
        },
        {
          path: ROUTE.POSITION,
          element: <Position />,
        },
        {
          path: `${ROUTE.POSITION}/${ROUTE.ADD}`,
          element: <AddPosition />,
        },
        {
          path: `${ROUTE.POSITION}/:id/${ROUTE.EDIT}`,
          element: <EditPosition />,
        },
        {
          path: ROUTE.PERSONNEL,
          element: <Personnel />,
        },
        {
          path: `${ROUTE.PERSONNEL}/${ROUTE.ADD}`,
          element: <AddPersonnel />,
        },
        {
          path: `${ROUTE.PERSONNEL}/:id/${ROUTE.EDIT}`,
          element: <EditPersonnel />,
        },
        {
          path: `${ROUTE.SETTING}`,
          element: <Setting />,
        },
      ],
    },
  ]);
}

export default Router;
