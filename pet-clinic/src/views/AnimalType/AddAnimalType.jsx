import { useState } from "react";
import api from "../../services/api.service";
import CONST from "../../constants/index";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput";
import PrimaryForm from "../../components/PrimaryForm";
import { useDispatch } from "react-redux";
import { addData } from "../../states/reducers/animal-type.reducer";
import PrimaryButton from "../../components/PrimaryButton";

function AddAnimalType() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formdata, setformdata] = useState({
    name: "",
    description: "",
  });

  const submit = async () => {
    dispatch(addData({ body: formdata }));
    navigate(`/${CONST.ROUTE.DASHBOARD}/${CONST.ROUTE.ANIMAL_TYPE}`);
  };

  const inputs = [
    {
      name: "name",
      title: "Name",
      onChange: (e) => {
        setformdata((prevState) => ({
          ...prevState,
          name: e.target.value,
        }));
      },
    },
    {
      name: "description",
      title: "Description",
      onChange: (e) => {
        setformdata((prevState) => ({
          ...prevState,
          description: e.target.value,
        }));
      },
    },
  ];

  return (
    <div className="h-full w-full flex justify-center items-center">
      <PrimaryForm title="Add Animal Type">
        {inputs.map((i) => {
          return (
            <FormInput
              name={i.name}
              title={i.title}
              onChange={i.onChange}
              key={i.name}
            />
          );
        })}
        <PrimaryButton title="Add" onClick={submit} />
      </PrimaryForm>
    </div>
  );
}

export default AddAnimalType;
