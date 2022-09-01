import React from "react";
import { useEffect } from "react";
import DataTable from "../../components/DataTable";
import { useNavigate } from "react-router-dom";
import CONST from "../../constants/index";
import PrimaryButton from "../../components/PrimaryButton";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, deleteData } from "../../states/reducers/disease.reducer";

function Disease() {
  const data = useSelector((state) => {
    return state.diseaseReducer.entries;
  });
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const deleteById = async (id) => {
    dispatch(deleteData({ id }));
  };

  const updateById = async (id) => {
    navigate(`${id}/${CONST.ROUTE.EDIT}`);
  };

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const actions = [
    { title: "Edit", onClick: updateById },
    { title: "Delete", onClick: deleteById },
  ];

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
        actions={actions}
      />
    </>
  );
}

export default Disease;
