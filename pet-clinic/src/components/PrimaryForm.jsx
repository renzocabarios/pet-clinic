function PrimaryForm({ children }) {
  return (
    <>
      <div className="shadow-md p-5 flex flex-col gap-3 items-center bg-sky-700 text-white rounded-md">
        {children}
      </div>
    </>
  );
}

export default PrimaryForm;
