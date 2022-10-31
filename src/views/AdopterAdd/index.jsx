import { useState } from "react";
import { ROUTE } from "@/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAdopter } from "@/states/actions";
import { PrimaryButton, Card, FormInput } from "@/components";

function AdopterAdd() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formdata, setformdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    dispatch(addAdopter({ body: formdata }));
    navigate(`/${ROUTE.DASHBOARD}/${ROUTE.ADOPTER}`);
  };

  const inputs = [
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
    {
      name: "email",
      title: "Email",
      type: "email",
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
      type: "password",
      onChange: (e) => {
        setformdata((prevState) => ({
          ...prevState,
          password: e.target.value,
        }));
      },
    },
  ];

  return (
    <div className="h-full w-full flex justify-center items-center">
      <Card>
        <div className="flex flex-col gap-3 items-center text-white">
          <h1 className="font-bold text-3xl">Add Adopter</h1>
          {inputs.map((i) => {
            return (
              <FormInput
                name={i.name}
                title={i.title}
                onChange={i.onChange}
                key={i.name}
                type={i.type}
              />
            );
          })}

          <PrimaryButton title="Add" onClick={submit} />
        </div>
      </Card>
    </div>
  );
}

export default AdopterAdd;
