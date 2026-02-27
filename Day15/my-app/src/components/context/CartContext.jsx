import { createContext, useState } from "react";

const CartContext=createContext();

export function CartProvider({ children }){
    const [cartList,setCartList]=useState([]);

    const addToCart=(item)=>{
        setCartList([...cartList,item])
    }

    const removeFromCart=(itemToRemove)=>{
        const newCartList=cartList.filter((item)=>{
            return (item !== itemToRemove);
        });

        setCartList(newCartList);
    }

    return (
        <CartContext.Provider value={{cartList,addToCart,removeFromCart}} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;

