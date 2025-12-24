import { useState } from "react";
import ModalWrapper from "./ModalWrapper";

export default function EditUserModal({ user, onClose, onSave }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleUpdate = () => {
    onSave({ ...user, name, email });
  };

  return (
    <ModalWrapper title="Edit User" onClose={onClose}>
      <input
        className="border px-4 py-2 rounded-lg w-full mb-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border px-4 py-2 rounded-lg w-full mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={handleUpdate}
        className="bg-green-600 text-white px-4 py-2 rounded-lg w-full hover:bg-green-700"
      >
        Update User
      </button>
    </ModalWrapper>
  );
}
