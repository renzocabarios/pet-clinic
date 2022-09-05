import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE, DATATABLE } from "../../constants";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPosition,
  deletePosition,
} from "../../states/reducers/position.reducer";
import { PrimaryButton, DataTable } from "../../components";

function Position() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => {
    return state.positionReducer.entries;
  });

  const deleteById = async (id) => {
    dispatch(deletePosition({ id }));
  };

  const updateById = async (id) => {
    navigate(`${id}/${ROUTE.EDIT}`);
  };

  const actions = [
    { title: "Edit", onClick: updateById },
    { title: "Delete", onClick: deleteById },
  ];

  const { header, dataName } = DATATABLE.POSITION;

  useEffect(() => {
    dispatch(fetchPosition());
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

export default Position;
