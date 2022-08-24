import { useState } from "react";
import api from "../services/api.service";
import CONST from "../constants/index";
import { useNavigate } from "react-router-dom";

function AddAnimalType() {
  const navigate = useNavigate();

  const [formdata, setformdata] = useState({
    name: "",
    description: "",
  });

  const submit = async () => {
    await api.post(CONST.ROUTE.ANIMAL_TYPE, formdata);
    navigate(`/${CONST.ROUTE.ANIMAL_TYPE}`);
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
      <div className="shadow-md p-10 flex flex-col items-center">
        <h1>Add Animal Type</h1>
        {inputs.map((i) => {
          return (
            <div className="flex flex-col" key={i.name}>
              <label htmlFor={i.name}>{i.title}</label>
              <input
                className="rounded border-0 outline-0 shadow-md p-2"
                type="text"
                name={i.name}
                onChange={i.onChange}
              />
            </div>
          );
        })}
        <button className="shadow-md p-2" onClick={submit}>
          Add Animal Type
        </button>
      </div>
    </div>
  );
}

export default AddAnimalType;
