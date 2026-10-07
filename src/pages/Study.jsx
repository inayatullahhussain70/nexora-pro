export default function Study() {
  const subjects = [
    { name: 'Mathematics', lessons: 24, completed: 18 },
    { name: 'Physics', lessons: 20, completed: 12 },
    { name: 'Chemistry', lessons: 22, completed: 8 },
    { name: 'Biology', lessons: 18, completed: 15 },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Study Materials</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {subjects.map((subject) => (
          <div key={subject.name} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">{subject.name}</h3>
            <p className="text-gray-600 mb-4">{subject.completed} of {subject.lessons} lessons completed</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all"
                style={{ width: `${(subject.completed / subject.lessons) * 100}%` }}
              ></div>
            </div>
            <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Continue Learning
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
