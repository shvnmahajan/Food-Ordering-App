import {useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
//import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  const [inputValue, setInputValue] = useState(0);
  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // Validation
    //**** */
    props.onAddItem(parseInt(inputValue));
    setInputValue(0); 

  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        value={inputValue}
        onChange={inputChangeHandler}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          default: "1",
        }}
      />
      <button type="submit">
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;
