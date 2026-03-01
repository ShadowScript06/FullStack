import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ErrorCard({ error }) {
    const navigate=useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-center min-h-[40vh]"
    >
      <div className="bg-red-500/10 border border-red-500/30 backdrop-blur-md rounded-2xl p-8 max-w-md text-center shadow-xl">
        
        <div className="flex justify-center mb-4">
          <AlertTriangle className="w-10 h-10 text-red-400" />
        </div>

        <h2 className="text-xl font-semibold text-red-300 mb-2">
          Something went wrong
        </h2>

        <p className="text-sm text-red-200/80 mb-6">
          {error || "Unexpected error occurred."}
        </p>

        
          <button
            onClick={()=>navigate("/")}
            className="px-5 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition font-medium"
          >
            Home
          </button>
        
      </div>
    </motion.div>
  );
}

export default ErrorCard;