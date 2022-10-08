import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Products from './Components/Products/Products';
import User from './Components/AcountUser/User';
import ShoppingCart from './Components/Cart/ShoppingCart';
import Unknown  from './Components/unknownPage/Unknown';
function App() {


  return (
    <Router>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/user" element={<User />} />
        <Route path="/mycart" element={<ShoppingCart />} />
        <Route path='*' element={<Unknown/>}/>
      </Routes>
    </Router>
  );
}

export default App


//carrito 
//user 