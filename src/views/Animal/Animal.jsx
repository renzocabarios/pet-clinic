import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ROUTE, DATATABLE } from "@/constants";
import { fetchAnimal, deleteAnimal } from "@/states/actions";
import { PrimaryButton, DataTable } from "@/components";

function Animal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.animalReducer.entries;
  });

  const deleteById = async (id) => {
    dispatch(deleteAnimal({ id }));
  };

  const updateById = async (id) => {
    navigate(`${id}/${ROUTE.EDIT}`);
  };

  const actions = [
    { title: "Edit", onClick: updateById },
    { title: "Delete", onClick: deleteById },
  ];

  const { header, dataName } = DATATABLE.ANIMAL;

  useEffect(() => {
    dispatch(fetchAnimal());
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

export default Animal;
