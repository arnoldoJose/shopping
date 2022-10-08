import React, {useState} from 'react'

const CRMCarContext = React.createContext();

const CartContext = ({children}) => {
  const [addCart,setProductCart] = useState(0);

  return (
    <CRMCarContext.Provider value={{ addCart, setProductCart }}>
      {children}
    </CRMCarContext.Provider>
  );
}

export { CartContext,CRMCarContext }