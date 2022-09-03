import { useEffect, useState } from "react";
import api from "../../services/api.service";
import { useNavigate, useParams } from "react-router-dom";
import { PrimaryButton, Card, FormInput } from "../../components";
import { ROUTE } from "../../constants";

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
    } = await api.get(`${ROUTE.ANIMAL_TYPE}/${params.id}`);
    setformdata(data[0]);
  };

  useEffect(() => {
    get();
  }, []);

  const submit = async () => {
    await api.update(`${ROUTE.ANIMAL_TYPE}/${params.id}`, formdata);
    navigate(`/${ROUTE.DASHBOARD}/${ROUTE.ANIMAL_TYPE}`);
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
      <Card>
        <div className="flex flex-col gap-3 items-center text-white">
          <h1 className="font-bold text-3xl">Edit Animal Type</h1>
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

          <PrimaryButton title="Update" onClick={submit} />
        </div>
      </Card>
    </div>
  );
}

export default EditAnimalType;
