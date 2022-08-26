function PrimaryButton({ title, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="shadow-md rounded-md px-5 py-1 bg-sky-500 text-white font-bold text-lg"
      >
        {title}
      </button>
    </>
  );
}

export default PrimaryButton;
