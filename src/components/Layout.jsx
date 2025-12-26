import Sidebar from "./Sidebar";
import { useTheme } from "../context/ThemeContext";

export default function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <div
      className={`flex h-screen transition-colors ${
        theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"
      }`}
    >
      <Sidebar />
      <div className="flex-1 overflow-auto p-6">{children}</div>
    </div>
  );
}
