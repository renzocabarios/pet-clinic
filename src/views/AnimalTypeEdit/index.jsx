import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PrimaryButton, Card, FormInput } from "@/components";
import { ROUTE } from "@/constants";
import { updateAnimalType } from "@/states/actions";
import { useDispatch } from "react-redux";

function AnimalTypeEdit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const [formdata, setformdata] = useState({
    name: "",
    description: "",
  });

  const submit = async () => {
    dispatch(updateAnimalType({ id: params.id, body: formdata }));
    navigate(`/${ROUTE.DASHBOARD}/${ROUTE.ANIMAL_TYPE}`);
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
          <h1 className="font-bold text-3xl">Edit Animal Type</h1>
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

          <PrimaryButton title="Update" onClick={submit} />
        </div>
      </Card>
    </div>
  );
}

export default AnimalTypeEdit;
