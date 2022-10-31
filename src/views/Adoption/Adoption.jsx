import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DATATABLE } from "@/constants";
import { DataTable } from "@/components";
import { updateAdoptionStatus, fetchAdoption } from "@/states/actions";

function Adoption() {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.adoptionReducer.entries;
  });

  const approve = (id) => {
    dispatch(updateAdoptionStatus({ id, status: "Approved" }));
  };

  const reject = (id) => {
    dispatch(updateAdoptionStatus({ id, status: "Rejected" }));
  };

  const actions = [
    {
      title: "Approve",
      onClick: approve,
    },
    {
      title: "Reject",
      onClick: reject,
    },
  ];

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

export default Adoption;
