import { motion } from "framer-motion";
import React from "react";

function Card() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 14,
          delay: 0.2,
        }}
        className="w-100 p-20 rounded-lg bg-amber-300 m-8 text-white"
      >
        <h2>Animated Card</h2>
        <p>This faeds and slides up</p>
      </motion.div>
    </div>
  );
}


export default Card;
