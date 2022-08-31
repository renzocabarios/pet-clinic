import { useEffect } from "react";
import DataTable from "../../components/DataTable";
import { useNavigate } from "react-router-dom";
import CONST from "../../constants/index";
import PrimaryButton from "../../components/PrimaryButton";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAnimal,
  deleteAnimal,
} from "../../states/reducers/animal.reducer";

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
    navigate(`${id}/${CONST.ROUTE.EDIT}`);
  };

  useEffect(() => {
    dispatch(fetchAnimal());
  }, [data]);

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
