import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import {  useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const removeItemFromCartHandler = () => {};
  const addItemToCartHandler = () => {};
  const cartItemsList = cartCtx.items.map((item) => (
    <CartItem name = {item.name} key = {item.id} price = {item.price} amount={item.amount} onRemove={removeItemFromCartHandler} onAdd = {addItemToCartHandler}></CartItem>
  ));
  return (
    <Modal onClose={props.onHideCart}>
      <ul className={classes["cart-items"]}>{cartItemsList}</ul>
      <div className={classes.total}>
        <span> Total Amount</span>
        <span> {cartCtx.total} </span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Proceed</button>
      </div>
    </Modal>
  );
};

export default Cart;
