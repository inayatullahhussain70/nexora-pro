import ProgressCard from '../components/ProgressCard'

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h2>
      
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <ProgressCard title="Study Hours" value="12.5" unit="hrs" icon="⏱️" />
        <ProgressCard title="Quiz Score" value="85" unit="%" icon="🎯" />
        <ProgressCard title="Topics" value="24" unit="completed" icon="✅" />
        <ProgressCard title="Streak" value="7" unit="days" icon="🔥" />
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <p className="text-gray-600">✓ Completed Math Quiz - 90%</p>
            <p className="text-gray-600">✓ Finished Physics Lesson 5</p>
            <p className="text-gray-600">✓ Created 15 Flashcards</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4">Learning Goals</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 mb-1">Mathematics</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Physics</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full" style={{width: '60%'}}></div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Chemistry</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full" style={{width: '45%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
