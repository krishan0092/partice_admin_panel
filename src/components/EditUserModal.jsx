import { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { useTheme } from "../context/ThemeContext";

export default function EditUserModal({ user, onClose, onSave }) {
  const { theme } = useTheme();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleUpdate = () => {
    onSave({ ...user, name, email });
    alert("User updated successfully!");
  };

  const inputClass = `
    w-full text-sm sm:text-base
    border px-4 py-2 rounded-lg
    focus:outline-none focus:ring-2 focus:ring-indigo-500
    ${theme === "dark"
      ? "bg-gray-700 text-gray-100 border-gray-600"
      : "bg-white text-gray-800 border-gray-300"}
  `;

  return (
    <ModalWrapper title="Edit User" onClose={onClose}>
      <div className="flex flex-col gap-3">
        <input
          className={inputClass}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />

        <input
          className={inputClass}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />

        <button
          onClick={handleUpdate}
          className="w-full sm:w-auto sm:self-end
                     bg-indigo-600 text-white px-6 py-2 rounded-lg
                     hover:bg-indigo-700 transition"
        >
          Update User
        </button>
      </div>
    </ModalWrapper>
  );
}
