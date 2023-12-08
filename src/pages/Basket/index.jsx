import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostOrederItem } from "../../redux/Orders/api_actions";

const Basket = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.basket);
  const { order } = useSelector((state) => state.order);
  return (
    <div>
      Basket
      <ul>
        {basket?.map((item, index) => {
          return (
            <li key={index}>
              {item.title}, count: {item.count}, total price:{" "}
              {Math.ceil(item.totalPrice)}{" "}
              <button
                onClick={(e) => {
                  dispatch(PostOrederItem(item));
                }}
              >
                Order now
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Basket;
