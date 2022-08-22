function DataTable({ header, data, dataName, deleteById }) {
  return (
    <div className="h-full w-full">
      <table className="w-full text-base border-collapse shadow-md">
        <thead>
          <tr className="text-center">
            {header.map((i) => {
              return (
                <th className="p-3" key={i}>
                  {i}
                </th>
              );
            })}
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i) => {
            return (
              <tr className="text-center" key={i._id}>
                {dataName.map((name) => {
                  return (
                    <td className="p-3" key={name}>
                      {i[name]}
                    </td>
                  );
                })}
                <td className="p-3">
                  <button className="px-5 py-2 shadow-md rounded-md">
                    Edit
                  </button>
                  <button
                    className="px-5 py-2 shadow-md rounded-md"
                    onClick={() => {
                      deleteById(i._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
