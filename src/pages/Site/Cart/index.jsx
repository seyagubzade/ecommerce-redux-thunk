import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteCartItem, GetCartItems } from "../../../redux/Cart/api_actions";
import { Button, Card, Row, Spin, Typography } from "antd";
import Title from "antd/es/typography/Title";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import Table from "../../../components/Table";

const Cart = () => {
  const [totalPriceAll, setTotalPriceAll] = useState(0);
  const dispatch = useDispatch();
  const { carts, loading, error } = useSelector((state) => state.cart);
  const { decreaseItemCount, increaseItemCount } = useCart();

  const handleDecrease = (item) => {
    decreaseItemCount(item);
  };

  const handleIncrease = (item) => {
    increaseItemCount(item);
  };
  const columns = [
    {
      title: "",
      dataIndex: "",
      key: "",
      render: (_, item) => {
        return (
          <button
            style={{ background: "none", border: "none", outline: "none" }}
            onClick={() => dispatch(DeleteCartItem(item.id))}
          >
            <i class="far fa-trash-alt"></i>
          </button>
        );
      },
    },
    {
      title: "IMAGE",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (imgUrl, test2) => {
        return (
          <>
            <img
              src={imgUrl}
              style={{ width: "60px", height: "90px", objectFit: "cover" }}
            />
          </>
        );
      },
    },
    {
      title: "PRODUCT",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "PRICE",
      dataIndex: "price",
      key: "price",
      render: (price) => <p>${price}</p>,
    },
    {
      title: "Count",
      dataIndex: "count",
      key: "count",
      render: (count, item) => {
        console.log(count, item.title);
        return (
          <div
            style={{
              border: "1px solid #f3f3f3",
              width: "max-content",
              margin: "0 auto",
            }}
          >
            <button
              className="amount-controller decreaseCount"
              onClick={() => {
                handleDecrease(item);
              }}
            >
              -
            </button>
            <input
              type="text"
              readOnly
              value={count}
              style={{ outline: "none", border: "1px solid #f3f3f3" }}
            />
            <button
              className="amount-controller increaseCount"
              onClick={() => {
                handleIncrease(item);
              }}
            >
              +
            </button>
          </div>
        );
      },
    },
    {
      title: "TOTAL",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (price) => <p>${parseFloat(price).toFixed(2)}</p>,
    },
  ];

  const getCarts = async () => {
    dispatch(GetCartItems());
  };
  useEffect(() => {
    getCarts();
  }, []);

  useEffect(() => {
    const finalPrice = carts.reduce(
      (accumulator, cart) => accumulator + cart.totalPrice,
      0
    );
    setTotalPriceAll(finalPrice);
  }, [carts]);

  return (
    <StyledWrapper>
      <Typography style={{ marginBottom: "30px" }}>
        <Title level={5}>
          <Link to="/">Home</Link> / Cart
        </Title>
      </Typography>
      <Row>
        {loading ? (
          <Spin />
        ) : error ? (
          <p>Not found</p>
        ) : carts ? (
          <Fragment>
            <Table dataSource={carts} columns={columns} />
          </Fragment>
        ) : null}
      </Row>
      <Row>
        <Card className="sum-card">
          <Title level={3}>Cart Summary</Title>
          <Title
            level={4}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            Grand Total :
            <span style={{ color: "#62ab00" }}>${parseFloat(totalPriceAll).toFixed(2)}</span>
          </Title>
          <Link to="/checkout" className="checkout-btn">
            CHECKOUT
          </Link>
        </Card>
      </Row>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  margin: 20px auto;
  padding: 0 20px;
  .ant-table-wrapper {
    margin: auto;
    width: 100%;
  }
  .sum-card {
    width: 50%;
    height: max-content;
  }
  .checkout-btn {
    font-weight: 500;
    text-transform: uppercase;
    color: #fff;
    background-color: #62ab00;
    width: 160px;
    border-radius: 50px;
    height: 36px;
    padding: 8px 20px;
  }
  table {
    caption-side: bottom;
    border-collapse: collapse;
  }
  thead tr th {
    text-align: center;
    border: none;
    text-transform: uppercase;
    font-weight: 500;
    color: #333;
    border-right: 1px solid #e5e5e5;
    padding: 20px 10px;
    font-family: Rubik, Arial, Helvetica, sans-serif;
    font-size: 15px;
  }
  tbody tr td {
    text-align: center;
    border: none;
    padding: 20px 10px;
    vertical-align: middle;
    border-top: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
  }
  input {
    width: 50px;
    text-align: center;
    padding: 6px 12px;
  }
  a {
    color: #333;
  }
  .amount-controller {
    padding: 7px 11px;
    border: none;
    cursor: pointer;
  }
  @media screen and (max-width: 920px) {
    max-width: 720px;
    .sum-card {
      width: 100%;
    }
  }
  @media screen and (max-width: 610px) {
    .ant-table-wrapper {
      margin: 0;
      width: 100%;
      overflow-x: scroll;
    }
  }
  @media screen and (min-width: 1200px) {
    width: 1140px;
  }
  button {
    height: max-content;
  }
  .ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
    color: #62ab00;
    border-color: #62ab00;
  }
`;
export default Cart;
