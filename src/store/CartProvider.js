import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartState, setCartState] = useState({
    totalAmount: 0,
    items: [],
  });

  const addItemToCartHandler = (item) => {
    setCartState((prev) => ({
      totalAmount: prev.totalAmount + item.amount * item.price,
      items: [item, ...prev.items],
    }));
  };
  const removeItemFromCartHandler = (id) => {
    // setCartState((prev) => {
    //   return {
    //     totalAmount: prev.totalAmount - ,
    //   };
    // });
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
