import React, {useEffect,useState} from 'react'
import { fetchData } from '../../Config/Fetch';
import Layout from '../Layout';
const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    let callApi = async () => {
      let { data } = await fetchData("/products?offset=10&limit=20");
      setProducts(data);
    };
    callApi();
  }, []);

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