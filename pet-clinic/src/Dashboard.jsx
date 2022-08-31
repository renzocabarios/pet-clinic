import { Outlet } from "react-router-dom";
import Sidenav from "./components/SideNav";

function Dashboard() {
  return (
    <div className="h-screen">
      <div className="template h-full bg-gray-600">
        <Sidenav />
        <div className="m-3 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
