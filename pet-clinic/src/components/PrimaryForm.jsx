function PrimaryForm({ children, title }) {
  return (
    <>
      <div className="shadow-md p-5 flex flex-col gap-3 items-center bg-sky-700 text-white rounded-md">
        <h1 className="font-bold text-3xl">{title}</h1>
        {children}
      </div>
    </>
  );
}

export default PrimaryForm;
