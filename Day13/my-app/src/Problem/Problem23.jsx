import React, { useState } from "react";

function Problem23() {
  const [items, setItems] = useState([
    { id: 1, value: "Apple" },
    { id: 2, value: "Banana" },
    { id: 3, value: "Orange" },
  ]);

  const [editingId, setEditingId] = useState(null); // Track which item is being edited
  const [tempValue, setTempValue] = useState("");  
  
   const handleEditClick = (item) => {
    setEditingId(item.id);
    setTempValue(item.value);
  };

  const handleSave = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, value: tempValue } : item));
    setEditingId(null);
  };
  return <div>

    <ul>
        {items.map((item)=>(
            <li key={item.id}>
                {item.id===editingId ?(<>
                <input type="text" value={tempValue} onChange={(e)=>setTempValue(e.target.value)} />

                <button onClick={()=>handleSave(item.id)}>save</button>
                </>):(<>
                <span onClick={() => handleEditClick(item)} style={{ cursor: "pointer" }} >{item.value}</span>
                </>)}
            </li>
        ))}
    </ul>
  </div>;
}

export default Problem23;
