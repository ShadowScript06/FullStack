import React from "react";
import { motion } from "framer-motion";
import { Timer, BarChart3, Target, Zap } from "lucide-react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Landing() {

    const navigate=useNavigate();

   function toAuth(e){
    e.preventDefault();
    navigate("/auth");
   }
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-175 h-175 bg-purple-600/20 blur-[140px] rounded-full"></div>

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-10 py-6 relative z-10 ">
        <h1 className="text-2xl font-bold text-purple-400">FlowPilot</h1>

        <div className="flex gap-6 items-center">
          <button  className="hover:text-purple-400 transition"
          onClick={toAuth}
          >
            Login
          </button>

          <button
            
            className="bg-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600 transition"

            onClick={toAuth}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center text-center mt-16 px-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl font-bold leading-tight max-w-4xl "
        >
          Focus Like a{" "}
          <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Machine
          </span>{" "}
          <br />
          Build Like a{" "}
          <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Master
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg text-gray-400 max-w-xl"
        >
          FlowPilot helps you track deep work sessions, eliminate distractions,
          and build unstoppable focus habits.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 mt-10"
        >
          <button
            
            className="bg-purple-500 px-6 py-3 rounded-lg hover:bg-purple-600 transition"
            onClick={toAuth}
          >
            Start Focusing
          </button>

          <button
            
            className="border border-gray-600 px-6 py-3 rounded-lg hover:border-purple-400 transition"
            onClick={toAuth}
          >
            Login
          </button>
        </motion.div>
      </section>

      {/* STATS */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-32 px-10 text-center relative z-10"
      >
        {[
          { number: "50K+", label: "Focus Sessions" },
          { number: "10K+", label: "Productive Users" },
          { number: "2M+", label: "Minutes Focused" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-8"
          >
            <h2 className="text-4xl font-bold text-purple-400">
              {stat.number}
            </h2>
            <p className="text-gray-400 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </motion.section>

      

      {/* FEATURES */}
      <section className="mt-40 px-10">
        <h2 className="text-4xl font-bold text-center mb-16">
          Everything You Need to Stay in Flow
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: <Timer size={30} />,
              title: "Focus Sessions",
              desc: "Track distraction-free deep work blocks.",
            },
            {
              icon: <BarChart3 size={30} />,
              title: "Analytics",
              desc: "Visualize productivity and progress.",
            },
            {
              icon: <Target size={30} />,
              title: "Goals",
              desc: "Set daily focus targets and streaks.",
            },
            {
              icon: <Zap size={30} />,
              title: "Distraction Blocker",
              desc: "Eliminate interruptions while working.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-6 hover:border-purple-400 transition"
            >
              <div className="text-purple-400 mb-4">{feature.icon}</div>

              <h3 className="text-xl font-semibold">{feature.title}</h3>

              <p className="text-gray-400 mt-2 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mt-40 px-10 text-center">
        <h2 className="text-4xl font-bold mb-16">How FlowPilot Works</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Start a Focus Session",
            "Track Your Deep Work",
            "Analyze Productivity",
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-8"
            >
              <div className="text-purple-400 text-3xl font-bold mb-4">
                {i + 1}
              </div>
              <p className="text-gray-300">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-40 text-center px-10 pb-20">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Enter Deep Work Mode?
        </h2>

        <p className="text-gray-400 mb-10">
          Join thousands of builders focusing better every day.
        </p>

        <button
          
          className="bg-purple-500 px-8 py-4 rounded-lg text-lg hover:bg-purple-600 transition"
          onClick={toAuth}
        >
          Start Free
        </button>
      </section>

      {/* FOOTER */}

      <Footer />
    </div>
  );
}

export default Landing;
