import { motion } from "framer-motion";
import React from "react";

function Button() {
  return (
    <div>
      <motion.button className="px-4 py-2 bg-black text-white rounded-lg cursor-pointer mt-5"
      whileHover={{scale:1.1}}
      whileTap={{scale:0.9}}
      transition={{duration:0.3}}
      
      >
        Click me
      </motion.button>
    </div>
  );
}

export default Button;
