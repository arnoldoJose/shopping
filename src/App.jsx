import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Products from './Components/Products/Products';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App


//carrito 
//user 