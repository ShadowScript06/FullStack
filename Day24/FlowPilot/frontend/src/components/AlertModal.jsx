import { motion, AnimatePresence } from "framer-motion";

export default function AlertModal({ isOpen, message, onClose }) {

    


  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* MODAL */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-[#111827] border border-white/10 rounded-xl shadow-2xl p-8 w-[400px] text-center"
            >
              <h2 className="text-xl font-semibold mb-4">Alert</h2>

              <p className="text-gray-400 mb-6">
                {message}
              </p>

              <button
                onClick={onClose}
                className="bg-purple-500 hover:bg-purple-600 px-6 py-2 rounded-lg transition"
              >
                OK
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}