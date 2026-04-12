import "../assets/style/cart.css";
import "../assets/style/product.css"

import ShoppingCart from "./shoppingCart.component.jsx";
import { useState } from "react";
import Product from "./product.component.jsx";
import poubelle from "../assets/images/poubelle.jpg"
const Cart = ({products, cart, handleCartChange}) => {

  const getInitialStock = id => {
    const product = products.find(prod=> prod.id === id);
    const inCart = cart.find(prod => prod.id ===id);
    const quantityInCart = inCart ? inCart.quantity :0;
    return product ? product.stock +quantityInCart:0;
  }
  const productsQuantity = cart.map(prod =>{
    const product = products.find(product => product.id == prod.id);
    if(!product) return null;
    return {...product, quantity: prod.quantity};
  });

  const productsInCart = productsQuantity.filter(product => product !==null);

  const handleRemove = (id) => {
    handleCartChange(id,0);
  }

  const handleManualChange = (id, value) => {
    let res = parseInt(value);
    if(isNaN(res)) res = 0;

    res = Math.max(1,Math.min(getInitialStock(id), res));
    handleCartChange(id,res);
  }

  const totalWeight = productsInCart.reduce((total,product) => {
    return total + (product.weight * product.quantity);
  },0);
  
  return (
    <div className="cart">
      <h4>Panier</h4>
      <div className="weight">Poids total : {totalWeight}</div>
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

              <input type="number" value={product.quantity} min="1" max={getInitialStock(product.id)} onChange={(e) => {const newValue = parseInt(e.target.value); if (!isNaN(newValue)) handleManualChange(product.id, newValue)}}/>

              <img className="button" src={poubelle} alt="remove" onClick={() =>handleRemove(product.id)}/>
          </div>
        ))}
      </div>

      <ShoppingCart
          products={products}
          cart = {cart}
      />
    </div>
  );
}
export default Cart;
