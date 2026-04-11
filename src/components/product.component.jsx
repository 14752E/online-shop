import "../assets/style/product.css";
const Product = ({name, description}) => {

  return (
    <div className="product">
      <div className="info">
          <div className="name">{name}</div>
          <div className="description">{description}</div>
      </div> 
    </div>
  );
}
export default Product;
