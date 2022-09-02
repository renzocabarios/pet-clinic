import { useState, useEffect } from "react";
import CONST from "../../../constants/index";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../../states/reducers/personnel.reducer";
import {
  PrimaryButton,
  InputSelect,
  Card,
  FormInput,
} from "../../../components";

function AddPersonnel() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formdata, setformdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    position: "",
  });

  const data = useSelector((state) => {
    return state.positionReducer.entries;
  });

  useEffect(() => {
    setformdata((prevState) => ({
      ...prevState,
      position: data[0],
    }));
  }, []);

  const submit = async () => {
    dispatch(addData({ body: formdata }));
    navigate(`/${CONST.ROUTE.DASHBOARD}/${CONST.ROUTE.PERSONNEL}`);
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
          <h1 className="font-bold text-3xl">Add Personnel</h1>
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
          <InputSelect
            name="position"
            title="Position"
            onChange={(e) => {
              setformdata((prevState) => ({
                ...prevState,
                position: e.target.value,
              }));
            }}
            data={data}
            value="_id"
            option="name"
          />
          <PrimaryButton title="Add" onClick={submit} />
        </div>
      </Card>
    </div>
  );
}

export default AddPersonnel;
