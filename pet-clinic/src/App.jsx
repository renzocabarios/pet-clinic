import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import CONST from "./constants/index";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const token = useSelector((state) => {
    return state.authReducer.token;
  });

  useEffect(() => {
    if (
      location.pathname.split("/").includes(CONST.ROUTE.DASHBOARD) &&
      !token
    ) {
      navigate(`/${CONST.ROUTE.LOGIN}`);
    }
  }, [location]);
  return (
    <div className="h-screen">
      <Outlet />
    </div>
  );
}

export default App;
