import { useState, useEffect } from "react";
import api from "../../services/api.service";
import { useNavigate } from "react-router-dom";
import CONST from "../../constants/index";
import FormInput from "../../components/FormInput";
import PrimaryForm from "../../components/PrimaryForm";

function AddAnimal() {
  const navigate = useNavigate();

  const sexes = ["Male", "Female"];

  const [formdata, setformdata] = useState({
    name: "",
    breed: "",
    age: 0,
    sex: sexes[0],
    animalType: "",
  });

  const [animalTypes, setanimalTypes] = useState([]);

  const get = async () => {
    const {
      data: { data },
    } = await api.get(CONST.ROUTE.ANIMAL_TYPE);
    setanimalTypes(data);
  };

  useEffect(() => {
    get();
  }, []);

  const submit = async () => {
    await api.post(CONST.ROUTE.ANIMAL, formdata);
    navigate(`/${CONST.ROUTE.ANIMAL}`);
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
      <PrimaryForm title="Add Animal">
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

        <div className="flex flex-col" key="age">
          <label htmlFor="age">Age</label>
          <input
            className="rounded border-0 outline-0 shadow-md p-2 bg-sky-500"
            type="text"
            name="age"
            value={formdata.age}
            onChange={(e) => {
              setformdata((prevState) => ({
                ...prevState,
                age: e.target.value.replace(/\D/g, ""),
              }));
            }}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="sex">Sex</label>
          <select
            className="rounded border-0 outline-0 shadow-md p-2 w-full bg-sky-500"
            name="sex"
          >
            {sexes.map((e) => {
              return (
                <option value={e} key={e}>
                  {e}
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="animalType">Animal Type</label>
          <select
            className="rounded border-0 outline-0 shadow-md p-2 w-full bg-sky-500"
            name="animalType"
            onChange={(e) => {
              setformdata((prevState) => ({
                ...prevState,
                animalType: e.target.value,
              }));
            }}
          >
            {animalTypes.map((e) => {
              return (
                <option value={e._id} key={e._id}>
                  {e.name}
                </option>
              );
            })}
          </select>
        </div>
        <button className="shadow-md p-2" onClick={submit}>
          Add
        </button>
      </PrimaryForm>
    </div>
  );
}

export default AddAnimal;
