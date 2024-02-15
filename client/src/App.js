import './App.css';
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Home from './components/Home'
import Dominos from './components/Restaurants/dominos/Dominos';
import McDonalds from './components/Restaurants/mcdonalds/McDonalds';
import Gabay from './components/Restaurants/gabay/Gabay';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <div>
      <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Dominos' element={<Dominos onShowCart={showCartHandler} onClose={hideCartHandler}/>}/>
        <Route path='/McDonalds' element={<McDonalds onShowCart={showCartHandler} onClose={hideCartHandler}/>}/>
        <Route path='/Gabay' element={<Gabay onShowCart={showCartHandler} onClose={hideCartHandler}/>}/>
      </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
