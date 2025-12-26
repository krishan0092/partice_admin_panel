import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const { theme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "123456") {
      login(email, password);
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      className={`h-screen flex items-center justify-center font-sans transition-colors ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className={`p-8 rounded-lg shadow-md w-96 transition-colors ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center tracking-wide">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className={`w-full mb-4 p-3 border rounded-md font-sans focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            theme === "dark"
              ? "bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
              : "bg-white border-gray-300 text-gray-800"
          }`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className={`w-full mb-4 p-3 border rounded-md font-sans focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            theme === "dark"
              ? "bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
              : "bg-white border-gray-300 text-gray-800"
          }`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 transition">
          Login
        </button>
      </form>
    </div>
  );
}
