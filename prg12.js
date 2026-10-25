
App.css


.shopping-cart {
max-width: 500px;
margin: 40px auto;
padding: 20px;
font-family: Arial, sans-serif;
text-align: center;
}

.shopping-cart h1 {
color: #222;
}

.product {
margin: 15px 0;
padding: 15px;
border: 1px solid #ddd;
border-radius: 8px;
}

.product h2 {
margin-top: 0;
}

.product button {
margin: 5px;
padding: 8px 18px;
border: none;
border-radius: 5px;
background-color: #007bff;
color: white;
font-size: 18px;
cursor: pointer;
}

.product button:hover {
background-color: #0056b3;
}

.total {
margin-top: 25px;
color: green;
}



App.js


import React, { useState } from "react";
import "./App.css";

function App() {
const [cart, setCart] = useState([
{ id: 1, name: "Laptop", price: 50000, quantity: 1 },
{ id: 2, name: "Headphones", price: 2000, quantity: 1 },
{ id: 3, name: "Mouse", price: 800, quantity: 1 },
]);

const increaseQuantity = (id) => {
setCart((previousCart) =>
previousCart.map((item) =>
item.id === id
? { ...item, quantity: item.quantity + 1 }
: item
)
);
};

const decreaseQuantity = (id) => {
setCart((previousCart) =>
previousCart.map((item) =>
item.id === id && item.quantity > 1
? { ...item, quantity: item.quantity - 1 }
: item
)
);
};

const total = cart.reduce(
(sum, item) => sum + item.price * item.quantity,
0
);

return ( <div className="shopping-cart"> <h1>Shopping Cart</h1>

  {cart.map((item) => (
    <div className="product" key={item.id}>
      <h2>{item.name}</h2>

      <p>Price: ₹{item.price}</p>

      <p>Quantity: {item.quantity}</p>

      <button
        type="button"
        onClick={() => decreaseQuantity(item.id)}
        aria-label={`Decrease ${item.name} quantity`}
      >
        -
      </button>

      <button
        type="button"
        onClick={() => increaseQuantity(item.id)}
        aria-label={`Increase ${item.name} quantity`}
      >
        +
      </button>
    </div>
  ))}

  <h2 className="total">Total: ₹{total}</h2>
</div>


);
}

export default App;


index.js

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<React.StrictMode> <App />
</React.StrictMode>
);