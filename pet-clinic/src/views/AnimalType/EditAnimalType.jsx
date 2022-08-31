import { useEffect, useState } from "react";
import api from "../../services/api.service";
import CONST from "../../constants/index";
import { useNavigate, useParams } from "react-router-dom";
import PrimaryForm from "../../components/PrimaryForm";
import FormInput from "../../components/FormInput";

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
    navigate(`/${CONST.ROUTE.DASHBOARD}/${CONST.ROUTE.ANIMAL_TYPE}`);
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
        <button className="shadow-md p-2" onClick={submit}>
          Update
        </button>
      </PrimaryForm>
    </div>
  );
}

export default EditAnimalType;
