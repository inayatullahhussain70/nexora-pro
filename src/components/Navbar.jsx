export default function Navbar({ onMenuClick }) {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-6 py-4 flex items-center justify-between">
        <button
          onClick={onMenuClick}
          className="text-gray-600 hover:text-gray-900"
        >
          ☰
        </button>
        <h1 className="text-2xl font-bold text-indigo-600">NEXORA PRO</h1>
        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-gray-900">🔔</button>
          <button className="w-8 h-8 bg-indigo-600 text-white rounded-full">👤</button>
        </div>
      </div>
    </nav>
  )
}
