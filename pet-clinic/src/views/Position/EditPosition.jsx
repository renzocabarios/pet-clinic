import { useEffect, useState } from "react";
import api from "../../services/api.service";
import { ROUTE } from "../../constants";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateData } from "../../states/reducers/position.reducer";
import { PrimaryButton, FormInput, Card } from "../../components";

function EditPosition() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();

  const [formdata, setformdata] = useState({
    name: "",
    description: "",
  });

  const get = async () => {
    const {
      data: { data },
    } = await api.get(`${ROUTE.POSITION}/${params.id}`);

    setformdata(data[0]);
  };

  useEffect(() => {
    get();
  }, []);

  const submit = async () => {
    dispatch(updateData({ id: params.id, body: formdata }));
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
