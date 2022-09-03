import { useState } from "react";
import { ROUTE } from "../../constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addData } from "../../states/reducers/position.reducer";
import { PrimaryButton, FormInput, Card } from "../../components";

function AddPosition() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formdata, setformdata] = useState({
    name: "",
    description: "",
  });

  const submit = async () => {
    dispatch(addData({ body: formdata }));
    navigate(`/${ROUTE.DASHBOARD}/${ROUTE.POSITION}`);
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
          <h1 className="font-bold text-3xl">Add Position</h1>
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

export default AddPosition;
