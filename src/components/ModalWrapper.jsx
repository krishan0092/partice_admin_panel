import { useTheme } from "../context/ThemeContext";

export default function ModalWrapper({ title, children, onClose }) {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div
        className={`w-full max-w-md rounded-xl p-6 font-sans transition-colors ${
          theme === "dark"
            ? "bg-gray-800 text-gray-100"
            : "bg-white text-gray-800"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold tracking-wide">{title}</h2>
          <button
            onClick={onClose}
            className={`text-xl ${
              theme === "dark" ? "text-gray-300" : "text-gray-500"
            }`}
          >
            ✕
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
