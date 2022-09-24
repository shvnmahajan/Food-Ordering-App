import { useState } from "react/cjs/react.production.min";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css"
const MealItemForm = (props) => {
  //const [inputValue, setInputValue] = useState(0);
  const clickHandler = e => {
    e.preventDefault();
  }


  return (
    <form className={classes.form}>
      <Input label='Amount' input={{
          id : 'amount_' + props.id,
          type : 'number',
          min : '1',
          max : '5',
          step : '1',
          default : '1'
      }}/>
      <button type = 'submit' onClick = {clickHandler}>+ Add</button>
    </form>
  );
};

export default MealItemForm;