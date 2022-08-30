import { useState, useEffect } from "react";
import CONST from "../../../constants/index";
import { useNavigate } from "react-router-dom";
import FormInput from "../../../components/FormInput";
import PrimaryForm from "../../../components/PrimaryForm";
import PrimaryButton from "../../../components/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import FromSelect from "../../../components/InputSelect";
import { addData } from "../../../states/reducers/personnel.reducer";

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
      <PrimaryForm title="Add Personnel">
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
        <FromSelect
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
      </PrimaryForm>
    </div>
  );
}

export default AddPersonnel;
