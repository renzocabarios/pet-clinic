import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE, DATATABLE } from "../../../constants";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../states/reducers/personnel.reducer";
import { PrimaryButton, DataTable } from "../../../components";

function Personnel() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.personnelReducer.entries;
  });

  const updateById = async (id) => {
    navigate(`${id}/${ROUTE.EDIT}`);
  };

  const actions = [{ title: "Edit", onClick: updateById }];

  const { header, dataName } = DATATABLE.PERSONNEL;

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

export default Personnel;
