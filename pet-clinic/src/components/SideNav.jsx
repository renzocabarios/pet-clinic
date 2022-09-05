import { useNavigate } from "react-router-dom";
import { ROUTE } from "@/constants";

function Sidenav() {
  const navigate = useNavigate();

  const links = [
    { name: "User", route: `${ROUTE.USER}` },
    { name: "Personnel", route: `${ROUTE.PERSONNEL}` },
    { name: "Animal Type", route: `${ROUTE.ANIMAL_TYPE}` },
    { name: "Animal", route: `${ROUTE.ANIMAL}` },
    { name: "Disease", route: `${ROUTE.DISEASE}` },
    { name: "Position", route: `${ROUTE.POSITION}` },
    { name: "Setting", route: `${ROUTE.SETTING}` },
  ];

  return (
    <div className="sidenav shadow bg-gray-900">
      <div className="flex justify-center items-center text-3xl font-extrabold text-white">
        Pet Clinic
      </div>
      <div className="text-lg flex flex-col gap-4 p-10">
        {links.map((e) => {
          return (
            <button
              key={e.name}
              onClick={() => {
                navigate(e.route);
              }}
              className="p-2 rounded-md text-white text-center hover:bg-gray-800 hover:p-5 transition-all"
            >
              {e.name}
            </button>
          );
        })}
      </div>
      <div className="w-full flex justify-center items-center text-2xl text-white ">
        <h1 className="text-2xl p-5 hover:p-8 transition-all rounded-md">
          Log out
        </h1>
      </div>
    </div>
  );
}

export default Sidenav;
