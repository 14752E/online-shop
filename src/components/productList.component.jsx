import "../assets/style/productList.css";
import Product from "./product.component.jsx";
import ProductFilter from "./productFilter.component.jsx";
const ProductList = ({products, handleStockChange, filterText, setFilterText}) => {
  const filteredProductsComponents = products.filter(product => product.name.toLowerCase().includes(filterText.toLowerCase()));
  const productsComponents = filteredProductsComponents.map(productData => <Product 
                                                            {...productData}
                                                            key = {productData.id}
                                                            handleStockChange = {handleStockChange}
                                                            />);
  return (
    <div className="productList">
      <h4>Boutique</h4>
      <ProductFilter filterText={filterText} setFilterText={setFilterText}/>
      <div>
          {productsComponents}
      </div>
    </div>
  );
}
export default ProductList;
