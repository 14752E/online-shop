import "../assets/style/cart.css";
import Total from "./total.component.jsx";
const Cart = ({products}) => {

  return (
    <div className="cart">
      <h4>Panier</h4>
      <Total
          products={products}
      />
    </div>
  );
}
export default Cart;
