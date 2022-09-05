import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ROUTE } from "@/constants";
import { updatePosition } from "@/states/actions";
import { PrimaryButton, FormInput, Card } from "@/components";

function EditPosition() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const [formdata, setformdata] = useState({
    name: "",
    description: "",
  });

  const submit = async () => {
    dispatch(updatePosition({ id: params.id, body: formdata }));
    navigate(`/${ROUTE.DASHBOARD}/${ROUTE.POSITION}`);
  };

  const inputs = [
    {
      name: "name",
      title: "Name",
      defaultValue: formdata.name,
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
      defaultValue: formdata.description,
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
          <h1 className="font-bold text-3xl">Edit Position</h1>
          {inputs.map((i) => {
            return (
              <FormInput
                name={i.name}
                title={i.title}
                onChange={i.onChange}
                defaultValue={i.defaultValue}
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

export default EditPosition;
