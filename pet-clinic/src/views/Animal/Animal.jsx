import { useEffect, useState } from "react";
import DataTable from "../../components/DataTable";
import api from "../../services/api.service";
import { useNavigate } from "react-router-dom";
import CONST from "../../constants/index";
import PrimaryButton from "../../components/PrimaryButton";

function Animal() {
  const navigate = useNavigate();

  const [data, setdata] = useState([]);

  const deleteById = async (id) => {
    await api.deleteById(`${CONST.ROUTE.ANIMAL}/${id}`);
    get();
  };

  const updateById = async (id) => {
    navigate(`${id}/${CONST.ROUTE.EDIT}`);
  };

  const get = async () => {
    const {
      data: { data },
    } = await api.get(CONST.ROUTE.ANIMAL);
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
          navigate(CONST.ROUTE.ADD);
        }}
      />
      <DataTable
        header={["Name", "Breed", "Age", "Sex"]}
        data={data}
        dataName={["name", "breed", "age", "sex"]}
        deleteById={deleteById}
        updateById={updateById}
      />
    </>
  );
}

export default Animal;
