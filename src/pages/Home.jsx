export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to NEXORA PRO</h1>
        <p className="text-xl text-gray-600 mb-8">Your AI-powered learning companion</p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Get Started
          </button>
          <button className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            Learn More
          </button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mt-16">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">🤖</div>
          <h3 className="text-xl font-bold mb-2">AI Assistant</h3>
          <p className="text-gray-600">Get instant answers and explanations from our AI</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">📚</div>
          <h3 className="text-xl font-bold mb-2">Study Materials</h3>
          <p className="text-gray-600">Access comprehensive notes and flashcards</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
          <p className="text-gray-600">Monitor your learning journey with detailed analytics</p>
        </div>
      </div>
    </div>
  )
}
