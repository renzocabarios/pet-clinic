import { useEffect } from "react";
import DataTable from "../../../components/DataTable";
import api from "../../../services/api.service";
import { useNavigate } from "react-router-dom";
import CONST from "../../../constants/index";
import PrimaryButton from "../../../components/PrimaryButton";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../states/reducers/personnel.reducer";

function Personnel() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.personnelReducer.entries;
  });

  const deleteById = async (id) => {
    await api.deleteById(`${CONST.ROUTE.PERSONNEL}/${id}`);
    get();
  };

  const updateById = async (id) => {
    navigate(`${id}/${CONST.ROUTE.EDIT}`);
  };

  const get = async () => {
    const {
      data: { data },
    } = await api.get(CONST.ROUTE.PERSONNEL);
    setdata(data);
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
        header={["First Name", "Last Name", "Email", "Position"]}
        data={data}
        dataName={["firstName", "lastName", "email", "position.name"]}
        actions={actions}
      />
    </>
  );
}

export default Personnel;
