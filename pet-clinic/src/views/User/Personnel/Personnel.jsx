import { useEffect } from "react";
import DataTable from "../../../components/DataTable";
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

  const updateById = async (id) => {
    navigate(`${id}/${CONST.ROUTE.EDIT}`);
  };

  const actions = [{ title: "Edit", onClick: updateById }];

  const { header, dataName } = CONST.DATATABLE.PERSONNEL;

  useEffect(() => {
    dispatch(fetchData());
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
        header={header}
        data={data}
        dataName={dataName}
        actions={actions}
      />
    </>
  );
}

export default Personnel;
