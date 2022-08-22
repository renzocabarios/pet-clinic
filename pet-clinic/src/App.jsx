import NavBar from "./components/NavBar";
import AnimalType from "./views/AnimalType";

function App() {
  return (
    <div className="h-screen">
      <NavBar />
      <div className="body">
        <AnimalType />
      </div>
    </div>
  );
}

export default App;
