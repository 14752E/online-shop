import "../assets/style/productList.css";
import Product from "./product.component.jsx";
const ProductList = ({products, handleStockChange}) => {
  const productsComponents = products.map(productData => <Product 
                                                            {...productData}
                                                            key = {productData.id}
                                                            handleStockChange = {handleStockChange}
                                                            />);
  return (
    <div className="productList">
      <h4>Boutique</h4>
      <div>
          {productsComponents}
      </div>
    </div>
  );
}
export default ProductList;
