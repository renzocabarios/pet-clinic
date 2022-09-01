import React from "react";
import { useEffect } from "react";
import DataTable from "../../components/DataTable";
import { useNavigate } from "react-router-dom";
import CONST from "../../constants/index";
import PrimaryButton from "../../components/PrimaryButton";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAnimalType,
  deleteAnimalType,
} from "../../states/reducers/animal-type.reducer";

function AnimalType() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.animalTypeReducer.entries;
  });

  const deleteById = async (id) => {
    dispatch(deleteAnimalType({ id }));
  };

  const updateById = async (id) => {
    navigate(`${id}/${CONST.ROUTE.EDIT}`);
  };

  const actions = [
    { title: "Edit", onClick: updateById },
    { title: "Delete", onClick: deleteById },
  ];

  const { header, dataName } = CONST.DATATABLE.ANIMAL_TYPE;

  useEffect(() => {
    dispatch(fetchAnimalType());
  }, [data]);

  return (
    <>
      <PrimaryButton
        title={"Add"}
        onClick={() => {
          navigate(CONST.ROUTE.ADD);
        }}
      />
      <DataTable
        header={header}
        data={data}
        dataName={dataName}
        actions={actions}
      />
    </>
  );
}

export default AnimalType;
