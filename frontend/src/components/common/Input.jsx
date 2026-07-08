import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Input({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  autoComplete = "off",
  error = "",
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="mb-5">

      <label className="block mb-2 font-semibold">
        {label}
      </label>

      <div className="relative">

        <input
          type={
            isPassword
              ? (showPassword ? "text" : "password")
              : type
          }
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          autoComplete={autoComplete}
          className={`w-full rounded-xl border px-4 py-3 pr-12 outline-none transition
            ${
              error
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-600"
            }`}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}

      </div>

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}

    </div>
  );
}

export default Input;