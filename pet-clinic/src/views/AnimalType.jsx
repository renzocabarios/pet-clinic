import React from "react";
import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import api from "../services/api.service";

function AnimalType() {
  const [data, setdata] = useState([]);

  const deleteById = async (id) => {
    await api.deleteById(`animal-type/${id}`);
    get();
  };

  const get = async () => {
    const {
      data: { data },
    } = await api.get("animal-type");
    setdata(data);
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div className="h-full w-full">
      <button className="shadow-md rounded-md">Add</button>
      <DataTable
        header={["Name", "Description"]}
        data={data}
        dataName={["name", "description"]}
        deleteById={deleteById}
      />
    </div>
  );
}

export default AnimalType;
