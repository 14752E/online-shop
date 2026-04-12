import "../assets/style/product.css";
import panier from "../assets/images/panier.jpg";
import { useState } from "react";
import Total from "./shoppingCart.component.jsx";

const Product = ({id,name, description, weight,image, stock, price, handleStockChange}) => {
  const handleClick = () => handleStockChange(id);
  return (
    <div className="product">

      <div className="info">
          <div className="name">{name}</div>
          <div className="description">{description}</div>
          <div className="weight">{weight}</div>
      </div> 
      <div className="imageProduit"><img src={image} alt={name}></img></div>
      <div className="stock">qté {stock}</div>
      <div className="price">{price}</div>
      <img className="button" src={panier} alt="panier" onClick={handleClick}></img>
    </div>
  );
}
export default Product;
