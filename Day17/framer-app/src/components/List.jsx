import { AnimatePresence, motion } from "framer-motion";

import React, { useState } from "react";
function List() {
  const [items, setItems] = useState([1, 2, 3]);

  function addItem() {
    setItems(prev=>[...prev, prev.length + 1]);
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((item) => item !== id));
  }
  return (
    <div>
      <button onClick={addItem}>Add Item</button>

      <motion.ul layout>
        <AnimatePresence>
          {items.map((item) => {
            return (
              <motion.li
                key={item}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="my-10 p-10 bg-amber-800 text-white cursor-pointer"
                onClick={() => removeItem(item)}
              >
                Item {item}
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}

export default List;
