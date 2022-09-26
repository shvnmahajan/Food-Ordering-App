import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";

const MealItem = (props) => {

  const cartCtx =  useContext(CartContext);
  const price = `$ ${props.price}`;
  const addItemHandler = amount => {
    cartCtx.addItem({
      price : props.price,
      amount : amount,
      name : props.name,
      id : props.id
    });
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <div>
        <MealItemForm onAddItem={addItemHandler} {...props}/>
      </div>
    </li>
  );
};

export default MealItem;
