import React, {useEffect,useState,useContext,useRef} from 'react';
import Layout from '../Layout';
import Card from '../ProductCard/Card'
import { CRMCarContext } from '../../UseContext/CartContext';
import { fetchData } from '../../Config/Fetch';
import toas, { Toaster } from 'react-hot-toast'
const Products = () => {

  const [products, setProducts] = useState([]);
  const [watchIncrement, updateIncrement] = useState(true)
  const { addCart,setProductCart } = useContext(CRMCarContext);


useEffect(() => {
  let callApi = async () => {
    let { data } = await fetchData("/products?offset=10&limit=20");
    setProducts(data);
  };
  callApi();
  if(watchIncrement){
  setProductCart(addCart);
  updateIncrement(false)
  }
    // setProductCart( || 0)
  }, [watchIncrement,updateIncrement]);


  // guardar en arch a parte e importar las funciones
  const addProdCart = (key) => {
    setProductCart(addCart+1);
  
    let result = getStorageProduct();
    
    result.push(key);

    localStorage.setItem('prod',JSON.stringify(result));
    toas.success('Producto agregado al carrito')
  }

  const getStorageProduct = () => {
    let result;

    if(!localStorage.getItem('prod')){
      result = [];
    }else{
      result = JSON.parse(localStorage.getItem('prod'))
    }
    return result;
  }

  return (
    <Layout>
      <section className="container-main">
        <Toaster position="top-center" reverseOrder={true}  />
    <div className="container-products">
    {
    products.map((pr) => (
      <Card 
      key={pr.id}
      id={pr.id}
      image={pr.category.image} 
      description={pr.description}
      addProdCart={addProdCart}
      />
     ))
     }
  </div>

      </section>
    </Layout>
  );
}

export default Products