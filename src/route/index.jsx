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
  PersonnelAdd,
  PersonnelEdit,
  User,
  UserAdd,
  PositionAdd,
  PositionEdit,
  Position,
  Disease,
  DiseaseAdd,
  DiseaseEdit,
  Animal,
  AnimalAdd,
  AnimalEdit,
  AnimalType,
  AnimalTypeAdd,
  AnimalTypeEdit,
  Adoption,
  Adopter,
  AdopterAdd,
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
          element: <AdopterAdd />,
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
          element: <AnimalTypeAdd />,
        },
        {
          path: `${ROUTE.ANIMAL_TYPE}/:id/${ROUTE.EDIT}`,
          element: <AnimalTypeEdit />,
        },
        {
          path: ROUTE.ANIMAL,
          element: <Animal />,
        },
        {
          path: `${ROUTE.ANIMAL}/${ROUTE.ADD}`,
          element: <AnimalAdd />,
        },
        {
          path: `${ROUTE.ANIMAL}/:id/${ROUTE.EDIT}`,
          element: <AnimalEdit />,
        },
        {
          path: ROUTE.DISEASE,
          element: <Disease />,
        },
        {
          path: `${ROUTE.DISEASE}/${ROUTE.ADD}`,
          element: <DiseaseAdd />,
        },
        {
          
          path: `${ROUTE.DISEASE}/:id/${ROUTE.EDIT}`,
          element: <DiseaseEdit />,
        },
        {
          path: ROUTE.USER,
          element: <User />,
        },
        {
          path: `${ROUTE.USER}/${ROUTE.ADD}`,
          element: <UserAdd />,
        },
        {
          path: ROUTE.POSITION,
          element: <Position />,
        },
        {
          path: `${ROUTE.POSITION}/${ROUTE.ADD}`,
          element: <PositionAdd />,
        },
        {
          path: `${ROUTE.POSITION}/:id/${ROUTE.EDIT}`,
          element: <PositionEdit />,
        },
        {
          path: ROUTE.PERSONNEL,
          element: <Personnel />,
        },
        {
          path: `${ROUTE.PERSONNEL}/${ROUTE.ADD}`,
          element: <PersonnelAdd />,
        },
        {
          path: `${ROUTE.PERSONNEL}/:id/${ROUTE.EDIT}`,
          element: <PersonnelEdit />,
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
