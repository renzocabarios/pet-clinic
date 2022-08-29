import { useEffect, useState } from "react";
import api from "../../services/api.service";
import CONST from "../../constants/index";
import { useNavigate, useParams } from "react-router-dom";
import FormInput from "../../components/FormInput";
import PrimaryForm from "../../components/PrimaryForm";

function EditAnimal() {
  const navigate = useNavigate();
  const params = useParams();

  const [formdata, setformdata] = useState({
    name: "",
    breed: "",
    age: 0,
    sex: "Male",
    animalType: "",
  });

  const [animalTypes, setanimalTypes] = useState([]);

  const get = async () => {
    const {
      data: { data },
    } = await api.get(`${CONST.ROUTE.ANIMAL}/${params.id}`);
    setformdata(data[0]);
    getAnimalTypes();
  };

  const getAnimalTypes = async () => {
    const {
      data: { data },
    } = await api.get(CONST.ROUTE.ANIMAL_TYPE);
    setanimalTypes(data);
  };

  useEffect(() => {
    get();
  }, []);

  const submit = async () => {
    await api.update(`${CONST.ROUTE.ANIMAL}/${params.id}`, formdata);
    navigate(`/${CONST.ROUTE.ANIMAL}`);
  };

  const inputs = [
    {
      name: "name",
      title: "Name",
      defaultValue: formdata.name,
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
      defaultValue: formdata.breed,
      onChange: (e) => {
        setformdata((prevState) => ({
          ...prevState,
          breed: e.target.value,
        }));
      },
    },
  ];

  const sexes = ["Male", "Female"];

  return (
    <div className="h-full w-full flex justify-center items-center">
      <PrimaryForm title="Edit Animal Type">
        {inputs.map((i) => {
          return (
            <FormInput
              name={i.name}
              title={i.title}
              onChange={i.onChange}
              defaultValue={i.defaultValue}
              key={i.name}
            />
          );
        })}
        <div className="flex flex-col" key="age">
          <label htmlFor="age">Age</label>
          <input
            className="rounded border-0 outline-0 shadow-md p-2 bg-sky-500 text-white"
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
            className="rounded border-0 outline-0 shadow-md p-2 w-full bg-sky-500 text-white"
            name="sex"
            onChange={(e) => {
              setformdata((prevState) => ({
                ...prevState,
                sex: e.target.value,
              }));
            }}
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
            className="rounded border-0 outline-0 shadow-md p-2 w-full bg-sky-500 text-white"
            name="animalType"
            value={animalTypes[0]}
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
          Update
        </button>
      </PrimaryForm>
    </div>
  );
}

export default EditAnimal;
