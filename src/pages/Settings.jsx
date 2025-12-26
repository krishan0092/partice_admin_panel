import { useState } from "react";
import Layout from "../components/Layout";
import { useTheme } from "../context/ThemeContext";

export default function Settings() {
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@gmail.com");
  const { theme, toggleTheme } = useTheme();

  return (
    <Layout>
      <div className="min-h-screen p-4 sm:p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <div className="mb-6">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 sm:px-6 py-5 sm:py-6 rounded-xl shadow">
            <h1 className="text-xl sm:text-3xl font-semibold">Settings</h1>
            <p className="text-indigo-100 text-sm mt-1">
              Manage preferences
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow mb-4">
          <label className="block text-sm mb-2">Admin Name</label>
          <input
            className="w-full border px-3 py-2 rounded-md bg-transparent outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow mb-4">
          <label className="block text-sm mb-2">Email</label>
          <input
            className="w-full border px-3 py-2 rounded-md bg-transparent outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow flex items-center justify-between">
          <span className="text-sm sm:text-base">Dark Mode</span>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
            className="scale-110 accent-indigo-600"
          />
        </div>
      </div>
    </Layout>
  );
}
