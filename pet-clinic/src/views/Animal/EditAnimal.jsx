import { useEffect, useState } from "react";
import CONST from "../../constants/index";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateAnimal } from "../../states/reducers/animal.reducer";
import { fetchAnimalType } from "../../states/reducers/animal-type.reducer";
import { PrimaryButton, Card, FormInput } from "../../components";

function EditAnimal() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.animalTypeReducer.entries;
  });

  const [formdata, setformdata] = useState({
    name: "",
    breed: "",
    age: 0,
    sex: "",
    animalType: "",
  });

  useEffect(() => {
    dispatch(fetchAnimalType());
  }, []);

  const submit = async () => {
    dispatch(updateAnimal({ id: params.id, body: formdata }));
    navigate(`/${CONST.ROUTE.DASHBOARD}/${CONST.ROUTE.ANIMAL}`);
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
      <Card>
        <div className="flex flex-col gap-3 items-center text-white">
          <h1 className="font-bold text-3xl">Edit Animal</h1>
          {inputs.map((i) => {
            return (
              <FormInput
                name={i.name}
                title={i.title}
                onChange={i.onChange}
                defaultValue={i.defaultValue}
                value={i.value}
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
              className="rounded border-0 outline-0 shadow-md p-2 w-full bg-sky-500 text-white"
              name="animalType"
              defaultValue="DEFAULT"
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
          <PrimaryButton title="Update" onClick={submit} />
        </div>
      </Card>
    </div>
  );
}

export default EditAnimal;
