import PrimaryButton from "./PrimaryButton";

function DataTable({ header, data, dataName, deleteById, updateById }) {
  return (
    <div className="">
      <table className="rounded-lg w-full text-base border-collapse shadow-md">
        <thead>
          <tr className="rounded-lg text-center bg-sky-700 text-white text-lg">
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
              <tr
                className="text-center border-y-4 border-gray-100"
                key={i._id}
              >
                {dataName.map((name) => {
                  let value = name;
                  if (name.includes(".")) {
                    const keys = name.split(".");
                    let tempValue = i[keys[0]];
                    keys.shift();
                    keys.forEach((element) => {
                      tempValue = tempValue[element];
                    });
                    value = tempValue;
                  }
                  return (
                    <td className="p-3" key={name}>
                      {name.includes(".") ? value : i[name]}
                    </td>
                  );
                })}
                <td className="p-3">
                  <PrimaryButton
                    title={"Edit"}
                    onClick={() => {
                      updateById(i._id);
                    }}
                  />
                  <PrimaryButton
                    title={"Delete"}
                    onClick={() => {
                      deleteById(i._id);
                    }}
                  />
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
