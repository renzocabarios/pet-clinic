function FormInput({ name, title, onChange, defaultValue }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{title}</label>
      <input
        className="rounded border-0 outline-0 shadow-md p-2"
        type="text"
        name={name}
        defaultValue={defaultValue ?? ""}
        onChange={onChange}
      />
    </div>
  );
}

export default FormInput;
