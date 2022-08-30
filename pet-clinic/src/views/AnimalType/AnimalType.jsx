import React from "react";
import { useEffect } from "react";
import DataTable from "../../components/DataTable";
import { useNavigate } from "react-router-dom";
import CONST from "../../constants/index";
import PrimaryButton from "../../components/PrimaryButton";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchData,
  deleteData,
} from "../../states/reducers/animal-type.reducer";

function AnimalType() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.animalTypeReducer.entries;
  });

  const deleteById = async (id) => {
    dispatch(deleteData({ id }));
  };

  const updateById = async (id) => {
    navigate(`${id}/${CONST.ROUTE.EDIT}`);
  };

  useEffect(() => {
    dispatch(fetchData());
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
        header={["Name", "Description"]}
        data={data}
        dataName={["name", "description"]}
        deleteById={deleteById}
        updateById={updateById}
      />
    </>
  );
}

export default AnimalType;
