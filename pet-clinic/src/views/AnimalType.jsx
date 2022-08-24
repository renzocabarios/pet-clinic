import React from "react";
import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import api from "../services/api.service";
import { useNavigate } from "react-router-dom";
import CONST from "../constants/index";

function AnimalType() {
  const navigate = useNavigate();

  const [data, setdata] = useState([]);

  const deleteById = async (id) => {
    await api.deleteById(`${CONST.ROUTE.ANIMAL_TYPE}/${id}`);
    get();
  };

  const updateById = async (id) => {
    navigate(`${id}/${CONST.ROUTE.EDIT}`);
  };

  const get = async () => {
    const {
      data: { data },
    } = await api.get(CONST.ROUTE.ANIMAL_TYPE);
    setdata(data);
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div className="h-full w-full">
      <button
        className="shadow-md rounded-md"
        onClick={() => {
          navigate(CONST.ROUTE.ADD);
        }}
      >
        Add
      </button>
      <DataTable
        header={["Name", "Description"]}
        data={data}
        dataName={["name", "description"]}
        deleteById={deleteById}
        updateById={updateById}
      />
    </div>
  );
}

export default AnimalType;
