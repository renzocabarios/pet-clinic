import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE, DATATABLE } from "../../constants";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, deleteData } from "../../states/reducers/disease.reducer";
import { PrimaryButton, DataTable } from "../../components";

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
    navigate(`${id}/${ROUTE.EDIT}`);
  };

  const actions = [
    { title: "Edit", onClick: updateById },
    { title: "Delete", onClick: deleteById },
  ];

  const { header, dataName } = DATATABLE.DISEASE;

  useEffect(() => {
    dispatch(fetchData());
  }, []);

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

export default Disease;
