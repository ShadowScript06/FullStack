import React, { useContext } from 'react'
import AuthContext from './context/AuthContext'
import { useNavigate } from 'react-router-dom';
import CartContext from './context/CartContext';

function Navbar() {
    const {user,login,logout}=useContext(AuthContext);
    const navigate=useNavigate();

    const {cartList}=useContext(CartContext);


  return (
    <div>{
        user ? (
            <>
             <p>Welcome {user.name}</p>
          <button onClick={logout}>Logout</button>
            </>
        ) :(
            <>
             <button onClick={() => login("Prajwal")}>Login</button>
            </>
        )
        }
        
        <button onClick={()=>navigate("/name")}>TO Name</button>

        <button onClick={()=>navigate("/products")}>Products</button>
        <p>cart: {cartList.length}</p>
        </div>

        
  )
}

export default Navbar