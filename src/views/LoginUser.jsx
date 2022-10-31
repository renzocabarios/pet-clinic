import { useState, useEffect } from "react";
import { FormInput, PrimaryButton, Card } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../states/reducers/auth.reducer";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../constants";

function LoginUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.authReducer;
  });

  const [formdata, setformdata] = useState({
    email: "renzo.cabarios@gmail.com",
    password: "User123!",
  });

  useEffect(() => {
    if (data.token)
      navigate(
        data.user.type == "Adopter" ? `/${ROUTE.ADOPT}` : `/${ROUTE.DASHBOARD}`
      );
  }, [data]);

  const submit = async () => {
    dispatch(authUser({ body: formdata }));
  };

  const inputs = [
    {
      name: "email",
      title: "Email",
      defaultValue: formdata.email,
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
      defaultValue: formdata.password,
      onChange: (e) => {
        setformdata((prevState) => ({
          ...prevState,
          password: e.target.value,
        }));
      },
    },
  ];

  return (
    <div className="h-screen flex justify-center items-center bg-gray-600">
      <Card>
        <div className="flex flex-col gap-3 items-center text-white">
          <h1 className="font-bold text-3xl">Login</h1>
          {inputs.map((i) => {
            return (
              <FormInput
                name={i.name}
                title={i.title}
                onChange={i.onChange}
                defaultValue={i.defaultValue}
                key={i.name}
                type={i.type}
              />
            );
          })}
          <PrimaryButton
            title={"Login"}
            onClick={() => {
              submit();
            }}
          />
        </div>
      </Card>
    </div>
  );
}

export default LoginUser;
