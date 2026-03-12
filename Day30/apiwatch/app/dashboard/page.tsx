"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/"); // redirect to home/login page
  };

  return (
    <div className="h-screen flex bg-gray-100 text-gray-800">
      {/* SIDEBAR */}
      <aside className="bg-[#2F7A5F] flex flex-col shadow-md p-6 w-64 ">
        <h1 className="text-white text-2xl font-bold font-serif mb-8 border-b border-gray-200 pb-4 cursor-pointer">
          APIWatch
        </h1>

        <nav className="flex flex-col space-y-3">
          <Link
            href="/dashboard"
            className="px-3 py-2 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/endpoints"
            className="px-3 py-2 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            Endpoints
          </Link>
          <Link
            href="/dashboard/settings"
            className="px-3 py-2 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            Settings
          </Link>
        </nav>

        <div className="mt-auto pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-400">Logged in as</p>
          <p className="text-sm font-medium">test@example.com</p>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-8 overflow-auto relative">
        {/* Logout button top-right */}
        <button
          onClick={handleLogout}
          className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Logout
        </button>

        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Welcome back!</h1>
          <p className="text-gray-600 mb-8">
            Add your API endpoints and monitor their uptime, response times, and receive real-time alerts.
          </p>

          {/* Example cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition-shadow">
              <p className="text-sm text-gray-500">Total Endpoints</p>
              <p className="mt-2 text-2xl font-bold">12</p>
            </div>
            <div className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition-shadow">
              <p className="text-sm text-gray-500">Uptime</p>
              <p className="mt-2 text-2xl font-bold text-green-600">99.9%</p>
            </div>
            <div className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition-shadow">
              <p className="text-sm text-gray-500">Failed Checks</p>
              <p className="mt-2 text-2xl font-bold text-red-500">2</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}