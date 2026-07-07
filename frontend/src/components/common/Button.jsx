function Button({ text }) {
  return (
    <button
      className="w-full rounded-xl bg-blue-700 py-3 text-white font-semibold hover:bg-blue-800 duration-300"
    >
      {text}
    </button>
  );
}

export default Button;