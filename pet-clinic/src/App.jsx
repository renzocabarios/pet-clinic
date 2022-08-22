import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="h-screen">
      <NavBar />
      <div className="body">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
