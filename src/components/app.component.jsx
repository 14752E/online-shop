import "../assets/style/app.css";
import ProductList from "./productList.component.jsx";
import Cart from "./cart.component.jsx";
import { useState } from "react";

const App = () => {
  const initProducts = () => [{name:"Nounours marron", description:"un joli nounours marron avec un foulard"}, {name:"Nounours blanc", description:"un ours blanc tout doux"} ];
  const [ products, setProducts] = useState([initProducts()]);
  return (
    <div className="app">
      <ProductList 
          products = {products}/>
      <Cart/>

    </div>
  );
}
export default App;
