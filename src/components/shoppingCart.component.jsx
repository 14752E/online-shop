import Product from "./product.component.jsx";
const ShoppingCart = ({products}) => {
  const initialStock = { 1: 5, 2: 10 };

  const total = products.reduce((current, productData)=> {
    const inCart = initialStock[productData.id] - productData.stock;
    return current + (productData.price * inCart)},0);
  return (
    <div className="total"> 
      total commande :  <div className="price">{total}</div>
    </div>
  );
}
export default ShoppingCart;
