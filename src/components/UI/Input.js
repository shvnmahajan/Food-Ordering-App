import classes from './Input.module.css'

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input id = {props.id} value={props.value} onChange = {props.onChange} {...props.input}/>
    </div>
  );
};

export default Input;