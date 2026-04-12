import Product from "./product.component.jsx";
const ShoppingCart = ({products,cart}) => {
  const total = cart.reduce((current, productData)=> {
    const product = products.find(prod => prod.id ===productData.id);
    return current + (product?product.price * productData.quantity:0)},0);
  return (
    <div className="total"> 
      total commande :  <div className="price">{total}</div>
    </div>
  );
}
export default ShoppingCart;
