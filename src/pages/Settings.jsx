import { useState } from "react";
import Layout from "../components/Layout";

export default function Settings() {
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@gmail.com");
  const [darkMode, setDarkMode] = useState(false);

  const handleSave = () => {
    alert("Settings saved (dummy)");
  };

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen p-6 font-sans">

        <div className="mb-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600
                    text-white px-6 py-6 rounded-xl shadow">

            <h1 className="text-2xl md:text-3xl font-semibold tracking-wide">
              Settings
            </h1>
            <p className="text-indigo-100 text-sm mt-1">
              Manage your account preferences
            </p>

          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-4 tracking-wide">
              Profile Settings
            </h2>

            <div className="space-y-4">
              <input
                className="w-full border p-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                className="w-full border p-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-4 tracking-wide">
              Security
            </h2>

            <div className="space-y-4">
              <input
                type="password"
                className="w-full border p-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="New Password"
              />

              <input
                type="password"
                className="w-full border p-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Confirm Password"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow mt-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-wide">
              Preferences
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Customize your experience
            </p>
          </div>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="accent-indigo-600 scale-110"
            />
            <span className="font-medium">Dark Mode</span>
          </label>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={handleSave}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Save Changes
          </button>
        </div>

      </div>
    </Layout>
  );
}
