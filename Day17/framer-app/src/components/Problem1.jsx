import { motion } from "framer-motion";
import React from "react";

function Problem1() {
  return (
    <div>
      <motion.div className="bg-blue-500 text-white p-16 w-20 flex justify-center items-center"
      initial={{opacity:0, y:100, x:100}}
      animate={{opacity:1,y:0, x:0}}
      transition={{duration:1}}
      >Hello</motion.div>
    </div>
  );
}

export default Problem1;
