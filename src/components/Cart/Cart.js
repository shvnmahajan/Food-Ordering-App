import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const cartItems = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
      }
  ].map((item) => <li>{item.name}</li>);

  return (
    <Modal>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
          <span> Total Amount</span>
          <span> $5000 </span>
      </div>
      <div className={classes.actions}>
          <button onClick = {props.onHideCart} className={classes['button--alt']}>Close</button>
          <button className={classes.button}>Proceed</button>
      </div>
    </Modal>
  );
};

export default Cart;
