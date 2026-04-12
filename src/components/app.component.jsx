import "../assets/style/app.css";
import ProductList from "./productList.component.jsx";
import Cart from "./cart.component.jsx";
import { useEffect, useState } from "react";
import dataProducts from "../data/products.js";

const App = () => {
  const [ products, setProducts] = useState([]);
  const [ cart, setCart] = useState([]);

  useEffect(() => {
    const initialProducs = dataProducts.map(product => ({...product, stock:product.stock}));
    setProducts(initialProducs);
  },[]);

  const handleStockChange = (id) => {
    const updatedProduct = products.find(product => product.id === id);
    if (updatedProduct.stock <= 0 || !updatedProduct) return;

    const copyProducts = products.map(product => product.id === id ? { ...product, stock:product.stock-1}:product);
    setProducts(copyProducts);

    const alreadyInCart = cart.find(product => product.id===id);
    if (!alreadyInCart) {
      setCart([...cart, {id:id, quantity:1}]);
    } else {
      setCart(cart.map(prod => prod.id === id ? {...prod, quantity:prod.quantity+1}:prod));
    }
  }

  const handleCartChange = (id, quantity) => {
    const copyProduct = dataProducts.find(product => product.id === id);
    if(!copyProduct) return;

    const initialStock = copyProduct.stock;
    const updatedProduct = initialStock-quantity;
    setProducts(products.map(product => product.id === id ? {...product, stock:updatedProduct}:product));

    if (quantity===0) {
      setCart(cart.filter(product => product !== id));
    } else {
      const prod = cart.find(p => p.id ===id);
      if(prod) {
        setCart(cart.map(p => p.id===id ?{...p, quantity:quantity} : p));
      } else {
        setCart([...cart, {id:id, quantity:quantity}]);
      }
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
