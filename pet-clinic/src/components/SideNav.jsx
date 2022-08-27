import { useNavigate } from "react-router-dom";
import CONST from "../constants/index";

function Sidenav() {
  const navigate = useNavigate();

  const links = [
    { name: "User", route: `${CONST.ROUTE.USER}` },
    { name: "Animal Type", route: `${CONST.ROUTE.ANIMAL_TYPE}` },
    { name: "Animal", route: `${CONST.ROUTE.ANIMAL}` },
    { name: "Disease", route: `${CONST.ROUTE.DISEASE}` },
  ];

  return (
    <div className="sidenav row-span-2 shadow bg-sky-500">
      <div className="flex justify-center items-center text-3xl text-white">
        Pet Clinic
      </div>
      <div className="text-lg flex flex-col gap-2 p-10">
        {links.map((e) => {
          return (
            <button
              key={e.name}
              onClick={() => {
                navigate(e.route);
              }}
              className="shadow p-2 rounded-md bg-sky-600 text-white text-center"
            >
              {e.name}
            </button>
          );
        })}
      </div>
      <div className="flex justify-center items-center text-2xl text-white bg-sky-600">
        Log out
      </div>
    </div>
  );
}

export default Sidenav;
