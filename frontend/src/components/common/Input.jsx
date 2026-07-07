function Input({
  label,
  type,
  placeholder
}) {
  return (
    <div className="mb-5">

      <label className="block mb-2 font-semibold">

        {label}

      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
      />

    </div>
  );
}

export default Input;