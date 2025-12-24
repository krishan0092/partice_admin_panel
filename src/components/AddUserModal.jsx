import { useState } from "react";
import ModalWrapper from "./ModalWrapper";

export default function AddUserModal({ onClose, onSave }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!name || !email) return;
    onSave({ name, email });
  };

  return (
    <ModalWrapper title="Add User" onClose={onClose}>
      <input
        className="border px-4 py-2 rounded-lg w-full mb-3"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border px-4 py-2 rounded-lg w-full mb-4"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg w-full hover:bg-indigo-700"
      >
        Save User
      </button>
    </ModalWrapper>
  );
}
