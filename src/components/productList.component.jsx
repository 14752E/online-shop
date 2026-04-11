import "../assets/style/productList.css";
import Product from "./product.component.jsx";
const ProductList = ({products}) => {

  return (
    <div className="productList">
      <h4>Boutique</h4>
      <Product
          name = "Nounours marron"
          description = "un joli nounours marron avec un foulard"
      />
    </div>
  );
}
export default ProductList;
