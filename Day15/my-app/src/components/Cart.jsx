import React, { useContext } from 'react'
import CartContext from './context/CartContext'
import { useNavigate } from 'react-router-dom';

function Cart() {
    const {cartList,removeFromCart}=useContext(CartContext);
    const navigate=useNavigate();

  return (
    <div>
        {cartList.length>0 ? (
            <><ul>
                {cartList.map((item)=>{
                    return (<li>{item} <button onClick={()=>removeFromCart(item)}>Remove</button></li>)
                })}
                </ul>
            </>
        ):(
            <>
            <h1>Nothing in Cart</h1>
            </>
        )}

        <button onClick={()=>navigate('/')} >Home</button>
        <button onClick={()=>navigate('/products')}>Products</button>
    </div>
  )
}

export default Cart