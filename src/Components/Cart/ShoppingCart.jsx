import React, {useEffect,useState} from 'react'
import Layout from '../Layout';
import Card from '../ProductCard/Card'
import { fetchData } from '../../Config/Fetch';
const ShoppingCart = () => {


  const [dataCart,setDataCart] = useState([]);
  const [stateCart,setStateCart] = useState(true);

  let filterP = JSON.parse(localStorage.getItem("prod"));
  useEffect(() => {
    if (stateCart) {
      let getProductUser = async () => {
        let saveData = [];
        filterP.forEach((element) => {
          let feching = fetchData(`/products/${element}`);
          saveData.push(feching);
        });

        let data = await Promise.all(saveData);
        setDataCart(data);
        setStateCart(false);
      };

      getProductUser();
    }
  }, [stateCart, setStateCart]);

  const deleteProductCart = (id) => {
    let data = getStorageProduct();

    data.forEach((pro, index) => {
      if (pro == id) data.splice(index, 1);
    });

    localStorage.setItem("prod", JSON.stringify(data));
    setStateCart(true);
  };


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
        <div className="container-products">
          {dataCart.map((pr) => (
            <Card
              key={pr.data.id}
              id={pr.data.id}
              image={pr.data.category.image}
              description={pr.data.description}
              deleteProductCart={deleteProductCart}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default ShoppingCart