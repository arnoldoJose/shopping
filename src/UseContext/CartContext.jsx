import React, {useState} from 'react'

const CRMCarContext = React.createContext();

const CartContext = ({children}) => {
  const getProductAmount = (amount) => {
    let dataAmount;

    if (amount == null) {
      dataAmount = 0;
    } else {
      dataAmount = amount.length;
    }
    return dataAmount;
  };

let ser = getProductAmount(JSON.parse(localStorage.getItem("prod")));

  const [addCart,setProductCart] = useState(ser);

  return (
    <CRMCarContext.Provider value={{ addCart, setProductCart }}>
      {children}
    </CRMCarContext.Provider>
  );
}

export { CartContext,CRMCarContext }