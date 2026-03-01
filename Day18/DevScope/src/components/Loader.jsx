import { motion } from "framer-motion";

function Loader({ text = "Loading..." }) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white z-50">

      {/* Spinner */}
      <motion.div
        className="w-16 h-16 rounded-full border-4 border-slate-700 border-t-indigo-500"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 0.9
        }}
      />

      {/* Loading Text */}
      <p className="mt-6 text-slate-400 text-sm tracking-wide animate-pulse">
        {text}
      </p>

    </div>
  );
}

export default Loader;