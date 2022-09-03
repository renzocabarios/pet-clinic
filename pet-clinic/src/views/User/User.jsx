import { useEffect, useState } from "react";
import api from "../../services/api.service";
import { useNavigate } from "react-router-dom";
import { ROUTE, DATATABLE } from "../../constants";
import { PrimaryButton, DataTable } from "../../components";

function User() {
  const navigate = useNavigate();

  const [data, setdata] = useState([]);

  const deleteById = async (id) => {
    await api.deleteById(`${ROUTE.USER}/${id}`);
    get();
  };

  const updateById = async (id) => {
    navigate(`${id}/${ROUTE.EDIT}`);
  };

  const actions = [
    { title: "Edit", onClick: updateById },
    { title: "Delete", onClick: deleteById },
  ];

  const { header, dataName } = DATATABLE.USER;

  const get = async () => {
    const {
      data: { data },
    } = await api.get(ROUTE.USER);
    setdata(data);
  };

  useEffect(() => {
    get();
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

export default User;
