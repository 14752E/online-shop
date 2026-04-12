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
  const [ cart, setCart] = useState([]);

  const handleStockChange = (id) => {
    const copyProducts = [...products];
    const updatedProduct = copyProducts.find(product => product.id == id);
    if (updatedProduct.stock <= 0) return;
    updatedProduct.stock = updatedProduct.stock-1;
    setProducts(copyProducts);

    const alreadyInCart = cart.find(product => product==id);
    if (!alreadyInCart) {
      setCart([...cart, id]);
    }
  }

  const handleCartChange = (id, quantity) => {
    const initialStock = { 1: 5, 2: 10 };
    const copyProducts = [...products];
    const updatedProduct = copyProducts.find(product => product.id == id);
    if (updatedProduct) {
      updatedProduct.stock = initialStock[id]-quantity;
      setProducts(copyProducts);
    }

    if (quantity===0) {
      setCart(cart.filter(product => product != id));
    }
  }

  const [filterText,setFilterText] = useState('');
  return (
    <div className="app">
      <ProductList 
          products = {products}
          handleStockChange = {handleStockChange}
          filterText = {filterText}
          setFilterText={setFilterText}
          />
      <Cart
          products = {products}
          cart = {cart}
          handleCartChange = {handleCartChange}
      />

    </div>
  );
}
export default App;
