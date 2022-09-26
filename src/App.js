import Header from './components/Layout/Header';
import AvailableMeals from './components/Meals/AvailableMeals';
import MealSummary from './components/Meals/MealSummary';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider'

import { useState } from 'react';

function App() {
  const [cartState, setCartState] = useState(false);

  const showCartHandler = () => {
    setCartState(true);
  }

  const hideCartHandler = () => {
    setCartState(false);
  }

  return (
    <CartProvider>
      {cartState && <Cart onHideCart = {hideCartHandler}/>}
      <Header onShowCart = {showCartHandler}/>
      <MealSummary/>
      <AvailableMeals/>
    </CartProvider>
  );
}

export default App;
