function FormInput({
  name,
  title,
  onChange,
  defaultValue,
  type,
  value,
  disabled = false,
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{title}</label>
      <input
        className="rounded border-0 outline-0 shadow-md p-2 text-white bg-gray-800 hover:bg-gray-700 transition-all"
        type={type ?? "text"}
        name={name}
        defaultValue={defaultValue ?? ""}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
    </div>
  );
}

export default FormInput;
