import PrimaryButton from "./PrimaryButton";

function DataTable({ header, data, dataName, actions }) {
  return (
    <div className="">
      <table className="rounded-lg w-full text-base border-collapse shadow-md">
        <thead>
          <tr className="rounded-lg text-center bg-gray-900 text-white text-lg">
            {header.map((val, index) => {
              return (
                <th className="p-3" key={index}>
                  {val}
                </th>
              );
            })}
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i, index) => {
            return (
              <tr
                className="text-center border-y-2 border-gray-600 bg-gray-800  hover:bg-gray-700 transition-all"
                key={index}
              >
                {dataName.map((name, index1) => {
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
                    <td className="p-3  text-white" key={index1}>
                      {name.includes(".") ? value : i[name]}
                    </td>
                  );
                })}
                <td className="p-3 text-white">
                  {actions.map((action, btnIndex) => {
                    return (
                      <PrimaryButton
                        key={btnIndex}
                        title={action.title}
                        onClick={() => {
                          action.onClick(i._id);
                        }}
                      />
                    );
                  })}
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
