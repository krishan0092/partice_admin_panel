import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-60 h-screen bg-gray-900 text-white p-5 font-sans">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 tracking-wide">
        Admin
      </h2>
      <ul className="space-y-4">
        <li>
          <Link to="/dashboard" className="hover:text-indigo-400 transition">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/users" className="hover:text-indigo-400 transition">
            Users
          </Link>
        </li>
        <li>
          <Link to="/settings" className="hover:text-indigo-400 transition">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}
