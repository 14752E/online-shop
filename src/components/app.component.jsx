import "../assets/style/app.css";
import ProductList from "./productList.component.jsx";
import Cart from "./cart.component.jsx";
const App = () => {

  return (
    <div className="app">
      <ProductList />
      <Cart/>

    </div>
  );
}
export default App;
