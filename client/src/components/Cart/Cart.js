import Modal from "../UI/Modal";
import CartContext from "../../store/CartContext";
import { useContext, useState } from "react";
import CartItem from "./CartItem";
import OrderDelivered from "./OrderDelivered";
import cartCSS from './Cart.module.css'

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
  
    const [showOrder, setShowOrder] = useState(false);
  
    const totalAmount = `₪${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
  
    const cartItemRemoveHandler = (id) => {
      cartCtx.removeItem(id);
    };
  
    const cartItemAddHandler = (item) => {
      cartCtx.addItem({ ...item, amount: 1 });
    };
  
    const orderHanlder = () => {
      cartCtx.clearall();
      setShowOrder(true);
    };
  
    const cartItems = (
      <ul className={cartCSS["cart-items"]}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
    );
  
    return (
      <Modal onClose={props.onClose}>
        {!showOrder ? (
          <>
            {cartItems}
            <div className={cartCSS.total}>
              <span>Total Amount</span>
              <span>{totalAmount}</span>
            </div>
            <div className={cartCSS.actions}>
              <button className={cartCSS["button--alt"]} onClick={props.onClose}>
                Close
              </button>
              {hasItems && (
                <button className={cartCSS.button} onClick={orderHanlder}>
                  Order
                </button>
              )}
            </div>
          </>
        ) : (
          <OrderDelivered onClose={props.onClose} />
        )}
      </Modal>
    );
  };
  
  export default Cart;