import { motion } from "framer-motion"

function StatCard({ title, value, highlight }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`rounded-xl p-4 text-center shadow-md transition ${
        highlight
          ? "bg-indigo-600 text-white"
          : "bg-slate-800 text-slate-200"
      }`}
    >
      <p className="text-sm uppercase tracking-wide opacity-70">
        {title}
      </p>
      <h3 className="text-2xl font-bold mt-2">
        {value ?? 0}
      </h3>
    </motion.div>
  )
}

export default StatCard