import React, {useEffect,useState,useContext} from 'react';
import Layout from '../Layout';
import { CRMCarContext } from '../../UseContext/CartContext';
import { fetchData } from '../../Config/Fetch';
const Products = () => {

  const [products, setProducts] = useState([]);
  const { addCart,setProductCart } = useContext(CRMCarContext);

  useEffect(() => {
    let callApi = async () => {
      let { data } = await fetchData("/products?offset=10&limit=20");
      setProducts(data);
    };
    callApi();
  }, []);

  const addProdCart = () => {
    setProductCart(addCart+1)
  }

  return (
    <Layout>
       <section className="container-main">
        <div className="container-products">
          {
            products.map((pr) => (
              <div className="card" key={pr.id}>
                <div className="card-image">
                  <img src={pr.category.image} loading="lazy" className='image' alt="" />
                </div>
                <div className="card-body">
                  <p>{pr.description}</p>
                  <button onClick={addProdCart}>Add Cart</button>
                </div>
              </div>
            ))
          }
        </div>
       </section>
    </Layout>
  )
}

export default Products