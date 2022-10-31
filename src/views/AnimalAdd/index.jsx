import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAnimalType, addAnimal } from "@/states/actions";
import { PrimaryButton, Card, InputSelect, FormInput } from "@/components";
import { ROUTE } from "@/constants";

function AnimalAdd() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.animalTypeReducer.entries;
  });

  const sexes = [{ sex: "Male" }, { sex: "Female" }];

  const [formdata, setformdata] = useState({
    name: "",
    breed: "",
    age: 0,
    sex: "",
    animalType: "",
  });

  useEffect(() => {
    dispatch(fetchAnimalType());
  }, [data]);

  const submit = async () => {
    dispatch(addAnimal({ body: formdata }));
    navigate(`/${ROUTE.DASHBOARD}/${ROUTE.ANIMAL}`);
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
      name: "breed",
      title: "Breed",
      onChange: (e) => {
        setformdata((prevState) => ({
          ...prevState,
          breed: e.target.value,
        }));
      },
    },
  ];

  return (
    <div className="h-full w-full flex justify-center items-center text-white">
      <Card>
        <div className="flex flex-col gap-3 items-center text-white">
          <h1 className="font-bold text-3xl">Add Animal</h1>
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

          <FormInput
            name="age"
            title="Age"
            value={formdata.age}
            onChange={(e) => {
              setformdata((prevState) => ({
                ...prevState,
                age: e.target.value.replace(/\D/g, ""),
              }));
            }}
          />

          <InputSelect
            name="sex"
            title="Sex"
            onChange={(e) => {
              setformdata((prevState) => ({
                ...prevState,
                sex: e.target.value,
              }));
            }}
            data={sexes}
            value="sex"
            option="sex"
          />

          <InputSelect
            name="animalType"
            title="Animal Type"
            onChange={(e) => {
              setformdata((prevState) => ({
                ...prevState,
                animalType: e.target.value,
              }));
            }}
            data={data}
            value="_id"
            option="name"
          />

          <PrimaryButton title="Add" onClick={submit} />
        </div>
      </Card>
    </div>
  );
}

export default AnimalAdd;
