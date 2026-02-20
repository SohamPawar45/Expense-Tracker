import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-black to-purple-900 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5">
        <h1 className="text-2xl font-bold">💰 Paisa Bachao</h1>
        <Link
          href="/login"
          className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg transition"
        >
          Launch App
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 mt-20">
        <h2 className="text-5xl font-extrabold mb-6 leading-tight">
          Track Your Expenses <br /> Like a Pro
        </h2>

        <p className="text-lg text-gray-300 max-w-2xl mb-8">
          A simple, modern, and powerful way to manage your daily spending.
          Stay in control of your money with real-time tracking and smart insights.
        </p>

        <Link
          href="/login"
          className="bg-indigo-500 hover:bg-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold transition transform hover:scale-105"
        >
          Get Started 🚀
        </Link>
      </div>

      {/* Features Section */}
      <div className="mt-32 px-8 grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
          <h3 className="text-xl font-semibold mb-3">⚡ Fast & Simple</h3>
          <p className="text-gray-300">
            Add and track expenses instantly without complex setup.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
          <h3 className="text-xl font-semibold mb-3">📊 Smart Insights</h3>
          <p className="text-gray-300">
            See your total spending in real time and manage your budget better.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
          <h3 className="text-xl font-semibold mb-3">🔒 Secure</h3>
          <p className="text-gray-300">
            Your financial data stays safe and private.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-32 text-center py-6 text-gray-400">
        © {new Date().getFullYear()} Expense Tracker. Built with Next.js 🚀
      </footer>
    </div>
  );
}
