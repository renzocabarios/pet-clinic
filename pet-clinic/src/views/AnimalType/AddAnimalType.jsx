import { useState } from "react";
import CONST from "../../constants/index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAnimalType } from "../../states/reducers/animal-type.reducer";
import { PrimaryButton, Card, FormInput } from "../../components";

function AddAnimalType() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formdata, setformdata] = useState({
    name: "",
    description: "",
  });

  const submit = async () => {
    dispatch(addAnimalType({ body: formdata }));
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
      <Card>
        <div className="flex flex-col gap-3 items-center text-white">
          <h1 className="font-bold text-3xl">Add Animal Type</h1>
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
        </div>
      </Card>
    </div>
  );
}

export default AddAnimalType;
