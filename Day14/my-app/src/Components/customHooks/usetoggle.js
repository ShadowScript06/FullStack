import { useState } from "react";

function useToggle(initialState){
    const[isOpen,setIsOpen]=useState(initialState);
    

    const toggle=()=>setIsOpen((prev)=>!prev);


    return[isOpen,toggle]
}

export default useToggle;