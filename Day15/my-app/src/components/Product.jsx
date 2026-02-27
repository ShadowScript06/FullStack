import React, { useContext } from 'react'
import CartContext from './context/CartContext'
import { useNavigate } from 'react-router-dom';

function Product() {
    const Products=["Mobile","Laptop", "TV", "Table", "Chair"]

    const {addToCart}=useContext(CartContext);

    const navigate=useNavigate();
  return (
    <div>
        <h1>Product List</h1>

        <ul>
            {Products.map((product)=>{
                return (<li>{product} <button onClick={()=>addToCart(product)}>add To cart</button> </li>)
            })}
        </ul>

        <button onClick={()=>{navigate("/cart")}}>go To cart</button>
    </div>
  )
}

export default Product