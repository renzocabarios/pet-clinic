import { Outlet } from "react-router-dom";
import { SideNav } from "@/components";

function Dashboard() {
  return (
    <div className="h-screen bg-gray-600">
      <div className="template h-full">
        <SideNav />
        <div className="m-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
