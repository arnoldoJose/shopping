import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { CartContext } from './UseContext/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <CartContext>
      <App />
    </CartContext>
)

{/* <React.StrictMode>
  </React.StrictMode> */}
