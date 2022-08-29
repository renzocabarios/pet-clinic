import { useState, useEffect } from "react";
import FormInput from "../components/FormInput";
import PrimaryButton from "../components/PrimaryButton";
import PrimaryForm from "../components/PrimaryForm";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../states/reducers/auth.reducer";
import { useNavigate } from "react-router-dom";
import CONST from "../constants/index";

function LoginUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.authReducer.token;
  });

  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (data) navigate(`/${CONST.ROUTE.DASHBOARD}`);
  }, [data]);

  const submit = async () => {
    dispatch(authUser({ body: formdata }));
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
    <div className="h-screen flex justify-center items-center">
      <PrimaryForm>
        <h1>Login</h1>
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
        <PrimaryButton
          title={"Login"}
          onClick={() => {
            submit();
          }}
        />
      </PrimaryForm>
    </div>
  );
}

export default LoginUser;
