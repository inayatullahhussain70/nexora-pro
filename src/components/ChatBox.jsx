export default function ChatBox() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="h-96 bg-gray-50 rounded mb-4 flex items-center justify-center">
        <p className="text-gray-500">Chat box placeholder</p>
      </div>
      <input
        type="text"
        placeholder="Type your message..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
      />
    </div>
  )
}
