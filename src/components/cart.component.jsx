import "../assets/style/cart.css";
import "../assets/style/product.css"

import Total from "./total.component.jsx";
import { useState } from "react";
import Product from "./product.component.jsx";
import poubelle from "../assets/images/poubelle.jpg"
const Cart = ({products, cart, handleCartChange}) => {
  const initialStock = { 1: 5, 2: 10 };
  const productsInCart = cart.map(id =>{
    const product = products.find(product => product.id == id);
    const qtt =initialStock[id] - product.stock;
    return {...product, quantity: qtt};
  });

  const handleRemove = (id) => {
    handleCartChange(id,0);
  }

  const handleManualChange = (id, value) => {
    let res = parseInt(value);
    if(isNaN(res)) res = initialStock[id];

    res = Math.max(0,Math.min(initialStock[id], res));
    handleCartChange(id,res);
  }
  return (
    <div className="cart">
      <h4>Panier</h4>
      <div>
        {productsInCart.map(product => (
          <div key={product.id} className="product">
            <div className="info">
              <div className="name">{product.name}</div>
              <div className="descrption"></div>
            </div>
            <div className="imageProduit">
              <img src={product.image} alt={product.name}/>
            </div>
            <div className="stock"></div>

              <input type="number" value={product.quantity} min="0" max={initialStock[product.id]} onChange={(e) => {const newValue = parseInt(e.target.value); if (!isNaN(newValue)) handleManualChange(product.id, newValue)}}/>

              <img className="button" src={poubelle} alt="remove" onClick={() =>handleRemove(product.id)}/>
          </div>
        ))}
      </div>

      <Total
          products={products}
      />
    </div>
  );
}
export default Cart;
