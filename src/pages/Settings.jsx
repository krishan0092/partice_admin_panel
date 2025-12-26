import { useState } from "react";
import Layout from "../components/Layout";
import { useTheme } from "../context/ThemeContext";

export default function Settings() {
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@gmail.com");
  const { theme, toggleTheme } = useTheme();

  return (
    <Layout>
      <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">

        <div className="mb-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-6 rounded-xl shadow">
            <h1 className="text-3xl font-semibold">Settings</h1>
            <p className="text-indigo-100 text-sm">Manage preferences</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-6">
          <input
            className="w-full border p-3 rounded-md bg-transparent"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow flex justify-between">
          <span>Dark Mode</span>
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
