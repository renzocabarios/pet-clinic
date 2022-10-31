import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE, DATATABLE } from "@/constants";
import { PrimaryButton, DataTable } from "@/components";
import { fetchUser } from "@/states/actions";
import { useSelector, useDispatch } from "react-redux";

function User() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.userReducer.entries;
  });

  const deleteById = async (id) => {
    dispatch(deleteUser({ id }));
  };

  const updateById = async (id) => {
    navigate(`${id}/${ROUTE.EDIT}`);
  };

  const actions = [
    { title: "Edit", onClick: updateById },
    { title: "Delete", onClick: deleteById },
  ];

  const { header, dataName } = DATATABLE.USER;

  useEffect(() => {
    dispatch(fetchUser());
  }, [data]);

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
