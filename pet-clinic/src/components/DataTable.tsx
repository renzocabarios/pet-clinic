
function DataTable() {
  return (
    <div className="h-full w-full">
      <table className="w-full text-base border-collapse shadow-md">
          <thead>
              <tr className="text-center">
                  <th className="p-3">Name</th>
                  <th className="p-3">Description</th>
                  <th className="p-3">Action</th>
              </tr>
          </thead>
          <tbody>
              <tr className="text-center">
                  <td className="p-3">Dom</td>
                  <td className="p-3">6000</td>
                  <td className="p-3"><button className="px-5 py-2 shadow-md rounded-md">Edit</button><button className="px-5 py-2 shadow-md rounded-md">Delete</button></td>
              </tr>
          </tbody>
      </table>
    </div>
  )
}

export default DataTable