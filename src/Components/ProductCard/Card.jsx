import React from 'react'
import { useLocation } from 'react-router-dom';

const Card = ({id,image,description,addProdCart,deleteProductCart}) => {
  const location = useLocation();

    return (
    <div className="card">
    <div className="card-image">
      <img
        src={image}
        className="image"
        alt=""
      />
    </div>
    <div className="card-body">
      <p>{description}</p>
      {
        (location.pathname !== '/products') 
        ?<button onClick={() => deleteProductCart(id)}>Delete Cart</button>
        : <button onClick={() => addProdCart(id)}>Add Cart</button>
      }
    </div>
  </div>
   
  )
}

export default Card