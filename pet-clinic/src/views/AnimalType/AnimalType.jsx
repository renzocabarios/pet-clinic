import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE, DATATABLE } from "@/constants";
import { fetchAnimalType, deleteAnimalType } from "@/states/actions";
import { PrimaryButton, DataTable } from "@/components";
import { useSelector, useDispatch } from "react-redux";

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
    navigate(`${id}/${ROUTE.EDIT}`);
  };

  const actions = [
    { title: "Edit", onClick: updateById },
    { title: "Delete", onClick: deleteById },
  ];

  const { header, dataName } = DATATABLE.ANIMAL_TYPE;

  useEffect(() => {
    dispatch(fetchAnimalType());
  }, [data]);

  return (
    <>
      <PrimaryButton
        title={"Add"}
        onClick={() => {
          navigate(ROUTE.ADD);
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
