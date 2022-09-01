import { useState } from "react";
import CONST from "../../../constants/index";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../../components/Card";
import InputSelect from "../../../components/InputSelect";
import PrimaryButton from "../../../components/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../../states/reducers/personnel.reducer";

function EditPersonnel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const data = useSelector((state) => {
    return state.positionReducer.entries;
  });

  const [formdata, setformdata] = useState({
    position: "",
  });

  const submit = async () => {
    dispatch(updateData({ id: params.id, body: formdata }));
    navigate(`/${CONST.ROUTE.DASHBOARD}/${CONST.ROUTE.PERSONNEL}`);
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <Card>
        <div className="flex flex-col gap-3 items-center text-white">
          <h1 className="font-bold text-3xl">Edit Personnel</h1>
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
          <PrimaryButton title="Update" onClick={submit} />
        </div>
      </Card>
    </div>
  );
}

export default EditPersonnel;