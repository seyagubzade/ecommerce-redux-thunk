import React, { Fragment, useEffect, useState } from "react";
import { GetSingleOrder } from "../../../redux/Orders/api_actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { Spin, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";

const OrderComplate = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, currentOrder, error } = useSelector((state) => state.order);
  const [totalPriceAll, setTotalPriceAll] = useState(0);

  const getOneOrder = async () => {
    dispatch(GetSingleOrder(id));
  };

  useEffect(() => {
    getOneOrder();
  }, [id]);

  useEffect(() => {
    const finalPrice = currentOrder?.orders.reduce(
      (accumulator, cart) => accumulator + cart.totalPrice,
      0
    );
    setTotalPriceAll(finalPrice);
  }, [currentOrder]);

  return (
    <StyledOrderComplete>
      <Typography style={{ marginBottom: "30px" }}>
        <Title level={5}>
          <Link to="/">Home</Link> / Cart
        </Title>
      </Typography>
      <Title level={3}>Checkout</Title>
      <div class="order-complete-message text-center">
        <h1>Thank you !</h1>
        <p>Your order has been received.</p>
        <Link to={`/`} className="btn-goBack">Go back</Link>
      </div>
      {loading && <Spin />}
      {currentOrder && (
        <Fragment>
          <ul class="order-details-list">
            <li>
              Order Number: <strong>{currentOrder.id}</strong>
            </li>
            <li>
              Customer name: {' '}
              <strong>
                {currentOrder.firstName} {currentOrder.lastName}
              </strong>
            </li>
            <li>
              Total: <strong>${parseFloat(totalPriceAll).toFixed(2)}</strong>
            </li>
            <li>
              Payment Method: <strong>Cash on Delivery</strong>
            </li>
          </ul>
          <p>Pay with cash upon delivery.</p>
          <Title level={3}>Order Details</Title>
          <div class="table-responsive">
            <table class="table order-details-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {currentOrder.orders.map((item, index)=>(
                  <tr key={index}>
                  <td>
                    <Link to={`/detail/${item.id}`}>
                      {item.title}
                    </Link>{" "}
                    <strong>× {item.count}</strong>
                  </td>
                  <td>
                    <span>${parseFloat(item.totalPrice).toFixed(2)}</span>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Fragment>
      )}
    </StyledOrderComplete>
  );
};

const StyledOrderComplete = styled.div`
  background-color: #fff;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  color: #333;
  font-size: 14px;
  line-height: 1.75;
  padding: 0 40px;
  p{
      margin-bottom: 1rem;
  }
  .btn-goBack{
    padding: 9px 61px;
    background: #52c41a;
    color: #fff;
    display: block;
    width: max-content;
    margin: 0 auto;
    font-size: 16px;
    border-radius: 4px; 
  }
  .checkout-title {
    border-bottom: 1px solid #e6e6e6;
    margin: 0 0 20px;
    padding-bottom: 10px;
    text-transform: none;
    width: 100%;
    color: #1a1f2b;
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
  }
  .text-center {
    text-align: center!important;
}
.order-details-list {
  list-style: inside;
}

.order-table-title {
  font-size: 24px;
  font-weight: 600;
}
table{
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;
}
.table>:not(caption)>*>* {
  padding: 0.5rem 0.5rem;
  background-color: #fff;
}
.table-responsive {
  overflow-x: auto;
}
.order-details-table {
  border: 1px solid #e5e5e5;
  margin: 0;
}
.order-details-table thead tr th {
  font-weight: 400;
  color: #333;
  border: none;
  border-right: 1px solid #e5e5e5;
}
.order-details-table tbody tr td {
  border-top: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
}
a {
  transition: 0.4s;
  color: inherit;
  text-decoration: none;
}
.order-complete-message h1 {
  color: #333;
  font-size: 36px;
  line-height: 48px;
  font-weight: 700;
}
.order-complete-message p {
  font-size: 24px;
  font-weight: 300;
}
  .ant-typography a {
    color: #333;
}

  .checkout-cart-total {
    background-color: #f9f9f9;
    color: #333;
    padding: 35px 30px;
  }
  .checkout-title {
    border-bottom: 1px solid #dfdfdf;
    font-size: 24px;
    margin: 0 0 20px;
    padding-bottom: 10px;
    text-transform: capitalize;
    width: 100%;
    font-weight: 700;
  }
  h4 {
    line-height: 23px;
    font-weight: 600;
    font-size: 18px;
    margin-top: 10px;
  }
  ul {
    color: #333;
    margin: 15px 0;
  }
  ul li {
    color: inherit;
    font-size: 14px;
    line-height: 23px;
    font-weight: 400;
    display: block;
    margin-bottom: 16px;
    overflow: hidden;
  }
  li span.left {
    float: left;
    width: 70%;
  }
  li span {
    color: inherit;
    float: right;
  }
  span {
    float: right;
    display: block;
  }
  .place-order {
    border-radius: 3px;
    height: 50px;
    border: none;
    display: -webkit-box;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 20px;
    font-weight: 400;
    font-size: 18px;
    text-transform: uppercase;
    color: #fff;
    background-color: #62ab00;
    transition: 0.4s;
    cursor: pointer
    width: 100%;
  }

  @media screen and (min-width: 992px) {
    .checkout-title {
      font-size: 33px;
    }
  }
`;

export default OrderComplate;
