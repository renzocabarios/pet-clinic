import { Outlet } from "react-router-dom";
import Sidenav from "./components/SideNav";

function Dashboard() {
  return (
    <div className="h-screen bg-gray-600">
      <div className="template h-full">
        <Sidenav />
        <div className="m-3 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
