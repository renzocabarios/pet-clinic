import { PrimaryButton } from "../components";
import { date } from "../services";
import { useSelector } from "react-redux";

function Setting() {
  const data = useSelector((state) => {
    return state.authReducer.user;
  });

  return (
    <div className="h-full w-full flex justify-center items-center text-white">
      <div className="w-5/6 h-5/6 grid grid-rows-2 grid-cols-2 gap-5">
        <div className="bg-gray-900 row-span-2 grid grid-cols-2 place-items-center rounded">
          <div className="">
            <h1 className="text-4xl font-black">First Name</h1>
            <h1 className="text-2xl font-light">{data.firstName}</h1>
          </div>
          <div className="">
            <h1 className="text-4xl font-black">Last Name</h1>
            <h1 className="text-2xl font-light">{data.lastName}</h1>
          </div>
          <div className="col-span-2">
            <h1 className="text-4xl font-black">Email</h1>
            <h1 className="text-2xl font-light">{data.email}</h1>
          </div>
          <div className="">
            <h1 className="text-4xl font-black">Date Created</h1>
            <h1 className="text-2xl font-light">
              {date.getStringDate(data.DateCreated)}
            </h1>
          </div>
          <div className="">
            <h1 className="text-4xl font-black">Date Updated</h1>
            <h1 className="text-2xl font-light">
              {date.getStringDate(data.DateUpdated)}
            </h1>
          </div>
        </div>
        <div className="bg-gray-900 rounded">
          <PrimaryButton title="Change Password" />
        </div>
        <div className="bg-gray-900 rounded">
          <PrimaryButton title="Change Email" />
        </div>
      </div>
    </div>
  );
}

export default Setting;
