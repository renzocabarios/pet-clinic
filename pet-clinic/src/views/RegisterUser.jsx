import { useState } from "react";
import api from "../services/api.service";
import CONST from "../constants/index";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";

function RegisterUser() {
  const navigate = useNavigate();

  const [formdata, setformdata] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const submit = async () => {
    await api.post(CONST.ROUTE.USER, formdata);
    navigate(`/`);
  };

  const inputs = [
    {
      name: "email",
      title: "Email",
      onChange: (e) => {
        setformdata((prevState) => ({
          ...prevState,
          email: e.target.value,
        }));
      },
    },
    {
      name: "password",
      title: "Password",
      onChange: (e) => {
        setformdata((prevState) => ({
          ...prevState,
          password: e.target.value,
        }));
      },
    },
    {
      name: "firstName",
      title: "First Name",
      onChange: (e) => {
        setformdata((prevState) => ({
          ...prevState,
          firstName: e.target.value,
        }));
      },
    },
    {
      name: "lastName",
      title: "Last Name",
      onChange: (e) => {
        setformdata((prevState) => ({
          ...prevState,
          lastName: e.target.value,
        }));
      },
    },
  ];

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="shadow-md p-10 flex flex-col items-center">
        <h1>Create User</h1>
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
          Create Account
        </button>
      </div>
    </div>
  );
}

export default RegisterUser;
