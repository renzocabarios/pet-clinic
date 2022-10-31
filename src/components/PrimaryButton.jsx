function PrimaryButton({ title, onClick, disabled = false }) {
  return (
    <>
      <button
        onClick={onClick}
        className={`shadow-md rounded-md px-7 py-3 ${
          disabled ? "bg-gray-600" : "bg-gray-900 hover:bg-black transition-all"
        } text-white font-bold text-lg`}
        disabled={disabled}
      >
        {title}
      </button>
    </>
  );
}

export default PrimaryButton;
