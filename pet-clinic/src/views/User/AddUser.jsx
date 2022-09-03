import { useState } from "react";
import api from "../../services/api.service";
import { ROUTE } from "../../constants";
import { useNavigate } from "react-router-dom";
import { PrimaryButton, Card, FormInput } from "../../components";

function AddUser() {
  const navigate = useNavigate();

  const [formdata, setformdata] = useState({
    name: "",
    description: "",
  });

  const submit = async () => {
    await api.post(ROUTE.DISEASE, formdata);
    navigate(`/${ROUTE.DISEASE}`);
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
          <h1 className="font-bold text-3xl">Add User</h1>
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
          <PrimaryButton title="Add" onClick={submit} />
        </div>
      </Card>
    </div>
  );
}

export default AddUser;
