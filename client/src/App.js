import './App.css';
import {Routes, Route} from 'react-router-dom'
import { useState , createContext} from 'react';
import Home from './components/Home'
import LoginRegister from './components/LoginRegister'
import Auth from './auth/Auth'
import Profile from './components/Profile'
import Dominos from './components/Restaurants/dominos/Dominos';
import McDonalds from './components/Restaurants/mcdonalds/McDonalds';
import Gabay from './components/Restaurants/gabay/Gabay';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';

export const AuthContext = createContext();

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [token, setToken] = useState()

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <div>
      <CartProvider>
      <AuthContext.Provider value={{token, setToken}}>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<LoginRegister page={"Login"}/>}/>
        <Route path='/Register' element={<LoginRegister page={"Register"}/>}/>
        <Route path='/Profile' element={<Auth><Profile/></Auth>}/>
        <Route path='/Dominos' element={<Dominos onShowCart={showCartHandler} onClose={hideCartHandler}/>}/>
        <Route path='/McDonalds' element={<McDonalds onShowCart={showCartHandler} onClose={hideCartHandler}/>}/>
        <Route path='/Gabay' element={<Gabay onShowCart={showCartHandler} onClose={hideCartHandler}/>}/>
      </Routes>
      </AuthContext.Provider>
      </CartProvider>
    </div>
  );
}

export default App;
