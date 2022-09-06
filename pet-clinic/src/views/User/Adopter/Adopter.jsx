import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE, DATATABLE } from "@/constants";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdopter } from "@/states/actions";
import { PrimaryButton, DataTable } from "@/components";

function Adopter() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.adopterReducer.entries;
  });

  const actions = [];

  const { header, dataName } = DATATABLE.ADOPTER;

  useEffect(() => {
    dispatch(fetchAdopter());
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

export default Adopter;
