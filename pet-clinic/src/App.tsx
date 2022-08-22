import DataTable from "./components/DataTable"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="h-screen">
      <NavBar/>
      <div className="body">
        <DataTable/>
      </div>
    </div>
  )
}

export default App