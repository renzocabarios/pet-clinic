import React from "react";
import { useEffect } from "react";
import DataTable from "../../components/DataTable";
import { useNavigate } from "react-router-dom";
import CONST from "../../constants/index";
import PrimaryButton from "../../components/PrimaryButton";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, deleteData } from "../../states/reducers/position.reducer";

function Position() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => {
    return state.positionReducer.entries;
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
        header={["Position Name", "Description"]}
        data={data}
        dataName={["name", "description"]}
        actions={actions}
      />
    </>
  );
}

export default Position;
