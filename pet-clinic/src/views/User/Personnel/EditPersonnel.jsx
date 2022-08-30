import { useState } from "react";
import CONST from "../../../constants/index";
import { useNavigate, useParams } from "react-router-dom";
import PrimaryForm from "../../../components/PrimaryForm";
import InputSelect from "../../../components/InputSelect";
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
      <PrimaryForm title="Edit Personnel">
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
        <button className="shadow-md p-2" onClick={submit}>
          Update
        </button>
      </PrimaryForm>
    </div>
  );
}

export default EditPersonnel;
