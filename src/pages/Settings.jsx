export default function Settings() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Settings</h2>
      <div className="bg-white p-8 rounded-lg shadow">
        <div className="space-y-6">
          <div className="border-b pb-4">
            <h3 className="text-lg font-bold mb-2">Profile</h3>
            <p className="text-gray-600">Manage your account settings</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="text-lg font-bold mb-2">Appearance</h3>
            <p className="text-gray-600">Customize your experience</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Notifications</h3>
            <p className="text-gray-600">Control notification preferences</p>
          </div>
        </div>
      </div>
    </div>
  )
}
