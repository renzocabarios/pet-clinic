import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DATATABLE } from "@/constants";
import { fetchAdoption } from "@/states/actions";
import { DataTable } from "@/components";

function Animal() {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.adoptionReducer.entries;
  });

  const actions = [];

  const { header, dataName } = DATATABLE.ADOPTION;

  useEffect(() => {
    dispatch(fetchAdoption());
  }, []);

  return (
    <>
      <DataTable
        header={header}
        data={data}
        dataName={dataName}
        actions={actions}
      />
    </>
  );
}

export default Animal;
