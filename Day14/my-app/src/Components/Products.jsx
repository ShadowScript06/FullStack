import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/product/101">Product 101</Link>
        </li>
        <li>
          <Link to="/products/102">Product 102</Link>
        </li>
        <li>
          <Link to="/products/103">Product 103</Link>
        </li>
      </ul>
    </div>
  );
}

export default Products;
