App.js


import React, { useReducer } from "react";
import cartReducer from "./reducer";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000
  },
  {
    id: 2,
    name: "Headphones",
    price: 2000
  },
  {
    id: 3,
    name: "Keyboard",
    price: 1500
  }
];

function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <div className="container">
      <h1>Shopping Cart</h1>

      <h2>Products</h2>
      <ProductList
        products={products}
        dispatch={dispatch}
      />

      <h2>Your Cart</h2>
      <Cart
        cart={cart}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;






index.css



* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f4f6f8;
  color: #222;
}

.container {
  max-width: 1000px;
  margin: auto;
  padding: 30px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

h2 {
  margin-bottom: 20px;
}

.products {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.product {
  background: white;
  padding: 20px;
  width: 250px;
  border-radius: 8px;
  box-shadow: 0 2px 6px #00000015;
}

button {
  padding: 8px 15px;
  margin: 5px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background: #1769aa;
  color: white;
}

button:hover {
  background: #0e4f85;
}

.cart {
  margin-top: 40px;
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 6px #00000015;
}

.cart-item {
  border-bottom: 1px solid #ddd;
  padding: 15px 0;
}

.cart-item:last-child {
  border-bottom: none;
}



index.js



import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




reducer.js


function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.payload;

      const existingProduct = state.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return state.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...state,
        { ...product, quantity: 1 }
      ];
    }

    case "REMOVE_FROM_CART":
      return state.filter(
        (item) => item.id !== action.payload
      );

    case "INCREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREASE_QUANTITY":
      return state
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

    default:
      return state;
  }
}

export default cartReducer;


setupTests.js

import '@testing-library/jest-dom';