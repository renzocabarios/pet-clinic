import { useEffect, useState } from "react";
import api from "../../services/api.service";
import CONST from "../../constants/index";
import { useNavigate, useParams } from "react-router-dom";
import FormInput from "../../components/FormInput";
import PrimaryForm from "../../components/PrimaryForm";
import { useDispatch } from "react-redux";
import { updateData } from "../../states/reducers/position.reducer";

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
    } = await api.get(`${CONST.ROUTE.POSITION}/${params.id}`);

    setformdata(data[0]);
  };

  useEffect(() => {
    get();
  }, []);

  const submit = async () => {
    dispatch(updateData({ id: params.id, body: formdata }));
    navigate(`/${CONST.ROUTE.DASHBOARD}/${CONST.ROUTE.POSITION}`);
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
      <PrimaryForm title="Edit Disease">
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
        <button className="shadow-md p-2" onClick={submit}>
          Update
        </button>
      </PrimaryForm>
    </div>
  );
}

export default EditPosition;
