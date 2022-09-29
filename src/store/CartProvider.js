import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartState, setCartState] = useState({
    totalAmount: 0,
    items: [],
  });

  const addItemToCartHandler = (item) => {
    let cartItems = cartState.items;
    const cartItemIndex = cartItems.findIndex((el) => item.id === el.id);
    if (cartItemIndex !== -1) cartItems[cartItemIndex].amount += item.amount;
    else cartItems.push(item);
    setCartState((prev) => ({
      totalAmount: prev.totalAmount + item.amount * item.price,
      items: cartItems,
    }));
  };
  const removeItemFromCartHandler = (id) => {
    let cartItems = cartState.items;
    let cartItemIndex = cartItems.findIndex((el) => id === el.id);
    let cartItemPrice = cartItems[cartItemIndex].price
    if (cartItems[cartItemIndex].amount === 1) {
      cartItems = cartItems.filter((el) => el.id !== id);
    } else cartItems[cartItemIndex].amount--;
    setCartState((prev) => ({
      totalAmount: prev.totalAmount - cartItemPrice,
      items: cartItems,
    }));
  };

  const cartContext = {
    items: cartState.items,
    total: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
