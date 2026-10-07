export default function ProgressCard({ title, value, unit, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          <p className="text-gray-500 text-xs mt-1">{unit}</p>
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
    </div>
  )
}
