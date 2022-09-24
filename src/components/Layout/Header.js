import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import image from "../../assets/mainimg.jpg"
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Something</h1>
        <HeaderCartButton onShowCart={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
          <img src = {image} alt="Meals"/>
      </div>
    </>
  );
};

export default Header;
