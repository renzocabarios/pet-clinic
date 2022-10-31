function InputSelect({ name, title, data, onChange, value, option }) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name}>{title}</label>
      <select
        className="rounded border-0 outline-0 shadow-md p-2 w-full bg-gray-800 hover:bg-gray-700 transition-all"
        name={name}
        onChange={onChange}
        defaultValue="DEFAULT"
      >
        <option value="DEFAULT">Select Option</option>
        {data.map((e) => {
          return (
            <option value={e[value]} key={e[value]}>
              {e[option]}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default InputSelect;
