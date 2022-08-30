import { useState } from "react";
import api from "../../services/api.service";
import CONST from "../../constants/index";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput";
import PrimaryForm from "../../components/PrimaryForm";

function AddDisease() {
  const navigate = useNavigate();

  const [formdata, setformdata] = useState({
    name: "",
    description: "",
  });

  const submit = async () => {
    await api.post(CONST.ROUTE.DISEASE, formdata);
    navigate(`/${CONST.ROUTE.DASHBOARD}/${CONST.ROUTE.DISEASE}`);
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
      <PrimaryForm title="Add Disease">
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
        <button className="shadow-md p-2" onClick={submit}>
          Add
        </button>
      </PrimaryForm>
    </div>
  );
}

export default AddDisease;
