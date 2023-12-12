import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const Home = () => {
  const dispatch = useDispatch();
  // const { product, loading, error } = useSelector((state) => state.product);
  // const { basket } = useSelector((state) => state.basket);

  const getProductData = () => {
    // dispatch(getProductData());
  };
  useEffect(() => {
    getProductData();
  }, []);
  return (
    <React.Fragment>
      <h3>Home</h3>
      {/* {loading ? (
        <p>Loading...</p>
      ) : product ? (
        <ul>
          {product?.map((item, index) => {
            return <li key={index}>{item.title} <button onClick={()=>{
            }}>Add to basket</button></li>;
          })}
        </ul>
      ) : (
        console.log(error)
      )} */}
    </React.Fragment>
  );
};

export default Home;
