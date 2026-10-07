import { Link } from 'react-router-dom'

const menuItems = [
  { icon: '🏠', label: 'Dashboard', path: '/dashboard' },
  { icon: '🤖', label: 'AI Assistant', path: '/ai' },
  { icon: '📚', label: 'Study', path: '/study' },
  { icon: '🧠', label: 'Learn', path: '/learn' },
  { icon: '📊', label: 'Progress', path: '/progress' },
  { icon: '⚙️', label: 'Settings', path: '/settings' },
]

export default function Sidebar({ isOpen }) {
  return (
    <aside className={`${
      isOpen ? 'w-64' : 'w-20'
    } bg-gray-900 text-white transition-all duration-300 hidden md:block`}>
      <div className="p-4 flex items-center gap-2">
        <span className="text-2xl">✨</span>
        {isOpen && <span className="font-bold text-lg">NEXORA</span>}
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition-colors"
          >
            <span className="text-xl">{item.icon}</span>
            {isOpen && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
