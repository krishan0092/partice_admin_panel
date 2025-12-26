import { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { useTheme } from "../context/ThemeContext";

export default function AddUserModal({ onClose, onSave }) {
  const { theme } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!name.trim() && !email.trim()) {
      alert("Please fill in Name and Email fields!");
      return;
    }
    if (!name.trim()) {
      alert("Please enter Name!");
      return;
    }
    if (!email.trim()) {
      alert("Please enter Email!");
      return;
    }
    onSave({ name, email });
    alert("User added successfully!");
  };

  const inputClass = `border px-3 sm:px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
    theme === "dark"
      ? "bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
      : "bg-white border-gray-300 text-gray-800"
  }`;

  return (
    <ModalWrapper title="Add User" onClose={onClose}>
      <div className="space-y-4">
        <input
          className={inputClass}
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className={inputClass}
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg w-full text-sm sm:text-base hover:bg-indigo-700 transition"
        >
          Save User
        </button>
      </div>
    </ModalWrapper>
  );
}
