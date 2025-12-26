import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ open, setOpen }) {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `block px-3 py-2 rounded-md transition ${
      pathname === path
        ? "bg-indigo-600 text-white"
        : "text-gray-300 hover:text-white hover:bg-gray-800"
    }`;

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      <div
        className={`fixed md:static z-50 top-0 left-0 h-full w-60 bg-gray-900 text-white p-5 font-sans border-r border-gray-700
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold tracking-wide">Admin</h2>
          <button
            onClick={() => setOpen(false)}
            className="md:hidden text-xl"
          >
            ✕
          </button>
        </div>

        <ul className="space-y-2">
          <li>
            <Link to="/dashboard" onClick={() => setOpen(false)} className={linkClass("/dashboard")}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/users" onClick={() => setOpen(false)} className={linkClass("/users")}>
              Users
            </Link>
          </li>
          <li>
            <Link to="/settings" onClick={() => setOpen(false)} className={linkClass("/settings")}>
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
