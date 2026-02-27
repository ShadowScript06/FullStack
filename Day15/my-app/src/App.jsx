import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import Users from "./components/Users";
import Name from "./components/Name";
import Product from "./components/Product";
import Cart from "./components/Cart";

const Heavy = React.lazy(() => import("./components/Heavy"));

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<div>Loading..</div>}>
              <Heavy />
            </Suspense>
          }
        />
        <Route path="/list" element={<List />} />

        <Route path="/name" element={<Name />} />
        <Route
          path="/users"
          element={
            <Suspense fallback={<div> loading Users...</div>}>
              <Users />
            </Suspense>
          }
        />

        <Route path="/products" element={<Product/>}/>

        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
