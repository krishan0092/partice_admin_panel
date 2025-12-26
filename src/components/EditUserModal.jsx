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

  const inputClass = `border px-4 py-2 rounded-lg w-full mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
    theme === "dark" ? "bg-gray-700 text-gray-100 border-gray-600" : "bg-white text-gray-800"
  }`;

  return (
    <ModalWrapper title="Edit User" onClose={onClose}>
      <input
        className={inputClass}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className={`${inputClass} mb-4`}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={handleUpdate}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg w-full hover:bg-indigo-700"
      >
        Update User
      </button>
    </ModalWrapper>
  );
}
