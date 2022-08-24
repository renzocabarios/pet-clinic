import { useEffect, useState } from "react";
import api from "../services/api.service";
import CONST from "../constants/index";
import { useNavigate, useParams } from "react-router-dom";

function EditAnimalType() {
  const navigate = useNavigate();
  const params = useParams();

  const [formdata, setformdata] = useState({
    name: "",
    description: "",
  });

  const get = async () => {
    const {
      data: { data },
    } = await api.get(`${CONST.ROUTE.ANIMAL_TYPE}/${params.id}`);
    setformdata(data[0]);
  };

  useEffect(() => {
    get();
  }, []);

  const submit = async () => {
    await api.update(`${CONST.ROUTE.ANIMAL_TYPE}/${params.id}`, formdata);
    navigate(`/${CONST.ROUTE.ANIMAL_TYPE}`);
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
      name: "description",
      title: "Description",
      defaultValue: formdata.description,
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
        <h1>Edit Animal Type</h1>
        {inputs.map((i) => {
          return (
            <div className="flex flex-col" key={i.name}>
              <label htmlFor={i.name}>{i.title}</label>
              <input
                className="rounded border-0 outline-0 shadow-md p-2"
                type="text"
                defaultValue={i.defaultValue}
                name={i.name}
                onChange={i.onChange}
              />
            </div>
          );
        })}
        <button className="shadow-md p-2" onClick={submit}>
          Update
        </button>
      </div>
    </div>
  );
}

export default EditAnimalType;
