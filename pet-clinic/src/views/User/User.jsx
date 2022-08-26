import { useEffect, useState } from "react";
import DataTable from "../../components/DataTable";
import api from "../../services/api.service";
import { useNavigate } from "react-router-dom";
import CONST from "../../constants/index";

function User() {
  const navigate = useNavigate();

  const [data, setdata] = useState([]);

  const deleteById = async (id) => {
    await api.deleteById(`${CONST.ROUTE.USER}/${id}`);
    get();
  };

  const updateById = async (id) => {
    navigate(`${id}/${CONST.ROUTE.EDIT}`);
  };

  const get = async () => {
    const {
      data: { data },
    } = await api.get(CONST.ROUTE.USER);
    setdata(data);
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <>
      <button
        className="shadow-md rounded-md px-6 py-3 bg-sky-500 text-white"
        onClick={() => {
          navigate(CONST.ROUTE.ADD);
        }}
      >
        Add
      </button>
      <DataTable
        header={["First Name", "Last Name", "Email"]}
        data={data}
        dataName={["firstName", "lastName", "email"]}
        deleteById={deleteById}
        updateById={updateById}
      />
    </>
  );
}

export default User;
