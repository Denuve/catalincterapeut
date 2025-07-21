import AdminLoginForm from '../../components/AdminLoginForm'

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Administrator Login</h1>
        <AdminLoginForm />
      </div>
    </div>
  )
}