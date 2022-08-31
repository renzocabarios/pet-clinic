function PrimaryButton({ title, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="shadow-md rounded-md px-7 py-3 bg-gray-900 hover:bg-black transition-all text-white font-bold text-lg"
      >
        {title}
      </button>
    </>
  );
}

export default PrimaryButton;
