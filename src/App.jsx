import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="h-screen bg-gray-600">
      <Outlet />
    </div>
  );
}

export default App;
