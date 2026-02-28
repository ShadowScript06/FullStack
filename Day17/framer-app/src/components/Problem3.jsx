import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

function Problem3() {
    const [open,setOpen]=useState(false);

    useEffect(()=>{
        function handleKey(e){
            if(e.key==="Escape"){
                setOpen(false);
            }
        }

        window.addEventListener("keydown",handleKey);

        return ()=> window.removeEventListener("keydown",handleKey);
    })
  return (
    <div className='p-40'>
        <motion.div>
            
        </motion.div>
    </div>
  )
}

export default Problem3