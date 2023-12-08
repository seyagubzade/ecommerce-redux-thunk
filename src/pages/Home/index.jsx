import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProductsData } from "../../redux/Products/api_actions";
import { addItemToBasket } from "../../redux/Basket/basketSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.product);
  const { basket } = useSelector((state) => state.basket);

  const getProductData = () => {
    dispatch(GetProductsData());
  };
  useEffect(() => {
    getProductData();
  }, []);
  return (
    <React.Fragment>
      <h3>Home</h3>
      {loading ? (
        <p>Loading...</p>
      ) : product ? (
        <ul>
          {product?.map((item, index) => {
            return <li key={index}>{item.title} <button onClick={()=>{
                console.log(item)
                dispatch(addItemToBasket(item))
            }}>Add to basket</button></li>;
          })}
        </ul>
      ) : (
        console.log(error)
      )}
    </React.Fragment>
  );
};

export default Home;
