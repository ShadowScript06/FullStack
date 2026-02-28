import { animate, motion, transform } from 'framer-motion'
import React from 'react'


function Problem2() {
    const container={
        hidden:{},
        visible:{
            transition:{
                staggerChildren:0.5
            },
        }
    }

    const item={
        hidden: {opacity :0, y:30},
        visible:{opacity:1, y:0}
    }


  return (
    <div>
        <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        
         >
            {[1,2,3,4].map((num)=>{
                return (<motion.li
                    key={num}
                    variants={item}
                    whileHover={{scale:1.05}}
                    className='mb-10 p-10 bg-amber-400 text-white cursor-pointer'
                >
                    Item {num}
                </motion.li>)
            })}    
        </motion.ul>
    </div>
  )
}

export default Problem2