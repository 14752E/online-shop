import "../assets/style/app.css";
import ProductList from "./productList.component.jsx";
import Cart from "./cart.component.jsx";
import { useState } from "react";
import nounours1 from "../data/images/nounours1.jpg";
import nounours2 from "../data/images/nounours2.jpg";

const App = () => {
  const initProducts = () => [{id:1, name:"Nounours marron", weight:300, description:"un joli nounours marron avec un foulard", image: nounours1, price: 35, stock: 5}, 
                              {id:2, name:"Nounours blanc", weight:250, description:"un ours blanc tout doux", image: nounours2, price: 42, stock: 10} ];
  const [ products, setProducts] = useState(initProducts());
  
  const handleStockChange = (id) => {
    const copyProducts = [...products];
    const updatedProduct = copyProducts.find(product => product.id == id);
    if (updatedProduct.stock <= 0) return;
    updatedProduct.stock = updatedProduct.stock-1;
    setProducts(copyProducts);
  }
  return (
    <div className="app">
      <ProductList 
          products = {products}
          handleStockChange = {handleStockChange}
          />
      <Cart
          products = {products}
      />

    </div>
  );
}
export default App;
