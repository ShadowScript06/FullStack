import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!username.trim()) return;
    navigate(`/profile/${username.trim().toLowerCase()}`);
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Background Animated Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.05)_1px,_transparent_0)] [background-size:40px_40px]" />
      
      {/* Gradient Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">

        {/* Hero Section */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center leading-tight"
        >
          Analyze. Compare. <br />
          <span className="text-indigo-500">Level Up Developers.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-slate-400 text-center max-w-xl text-lg"
        >
          Instantly analyze GitHub profiles, calculate developer scores,
          and compare coding performance in a clean, modern interface.
        </motion.p>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 w-full max-w-md"
        >
          <div className="flex bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-lg">
            <input
              type="text"
              placeholder="Enter GitHub username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-sm"
            />
            <button
              onClick={handleSearch}
              className="px-6 bg-indigo-600 hover:bg-indigo-700 transition font-medium"
            >
              Analyze
            </button>
          </div>
        </motion.div>

        {/* Secondary CTA */}
        <button
          onClick={() => navigate("/compare")}
          className="mt-6 text-slate-400 hover:text-white transition text-sm"
        >
          Or compare two developers →
        </button>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-5xl w-full">

          <Feature
            title="Instant Analysis"
            desc="Fetch and display GitHub data in real-time with performance insights."
          />
          <Feature
            title="Developer Score"
            desc="Smart scoring system based on stars, repos, and followers."
          />
          <Feature
            title="Side-by-Side Compare"
            desc="Compare developers and see who stands out instantly."
          />

        </div>
      </div>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-md hover:border-indigo-500 transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  );
}

export default Home;