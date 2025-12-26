import { useState } from "react";
import Sidebar from "./Sidebar";
import { useTheme } from "../context/ThemeContext";

export default function Layout({ children }) {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`flex h-screen overflow-hidden ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <Sidebar open={open} setOpen={setOpen} />

      <div className="flex-1 flex flex-col">
        <div className="md:hidden p-4 flex justify-between items-center border-b border-gray-700">
          <button
            onClick={() => setOpen(true)}
            className="px-3 py-2 rounded-md bg-indigo-600 text-white"
          >
            ☰
          </button>
          <span className="font-semibold">Admin</span>
        </div>

        <div className="flex-1 overflow-auto p-4 sm:p-6">{children}</div>
      </div>
    </div>
  );
}
