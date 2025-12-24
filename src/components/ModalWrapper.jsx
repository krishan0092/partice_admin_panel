export default function ModalWrapper({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl p-6 font-sans">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold tracking-wide">{title}</h2>
          <button onClick={onClose} className="text-gray-500 text-xl">
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
