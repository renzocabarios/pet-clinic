import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CONST from "../../constants/index";
import FormInput from "../../components/FormInput";
import PrimaryForm from "../../components/PrimaryForm";
import PrimaryButton from "../../components/PrimaryButton";
import { useSelector, useDispatch } from "react-redux";
import { addAnimal } from "../../states/reducers/animal.reducer";
import { fetchAnimalType } from "../../states/reducers/animal-type.reducer";

function AddAnimal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.animalTypeReducer.entries;
  });

  const sexes = ["Male", "Female"];

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
    navigate(`/${CONST.ROUTE.DASHBOARD}/${CONST.ROUTE.ANIMAL}`);
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
            defaultValue={"DEFAULT"}
            onChange={(e) => {
              setformdata((prevState) => ({
                ...prevState,
                sex: e.target.value,
              }));
            }}
          >
            <option disabled value="DEFAULT">
              Choose Sex
            </option>
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
            defaultValue={"DEFAULT"}
            onChange={(e) => {
              setformdata((prevState) => ({
                ...prevState,
                animalType: e.target.value,
              }));
            }}
          >
            <option disabled value="DEFAULT">
              Choose Animal Type
            </option>
            {data.map((e) => {
              return (
                <option value={e._id} key={e._id}>
                  {e.name}
                </option>
              );
            })}
          </select>
        </div>
        <PrimaryButton title="Add" onClick={submit} />
      </PrimaryForm>
    </div>
  );
}

export default AddAnimal;
