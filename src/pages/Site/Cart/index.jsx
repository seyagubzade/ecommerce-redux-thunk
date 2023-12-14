import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCartItems } from "../../../redux/Cart/api_actions";
import { Row, Spin, Table, Typography } from "antd";
import Title from "antd/es/typography/Title";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cart = () => {
  const [count, setCount] = useState('')
  const dispatch = useDispatch();
  const { carts, loading, error } = useSelector((state) => state.cart);
  const [quantityMap, setQuantityMap] = useState({});

  // const dataSource = [
  //   {
  //     key: '1',
  //     name: 'Mike',
  //     age: 32,
  //     address: '10 Downing Street',
  //   },
  //   {
  //     key: '2',
  //     name: 'John',
  //     age: 42,
  //     address: '10 Downing Street',
  //   },
  // ];

  const columns = [
    {
      title: "",
      dataIndex: "",
      key: "",
      render: (_, item) => {
        return <i class="far fa-trash-alt"></i>;
      },
    },
    {
      title: "IMAGE",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (imgUrl, test2) => {
        console.log("test>>", imgUrl, "test2>>", test2);
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
      render: (price)=>(<p>${price}</p>)
    },
    {
      title: "QUANTITY",
      dataIndex: "count", 
      key: "count",
      render: (id) => {
        console.log(id)
        return (
          <input
          type="number"
            value={quantityMap[id] || ''} 
            onChange={(e) => handleQuantityChange(id, e.target.value)}
          />
        )
      },
    },
    {
      title: "TOTAL",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (price)=>(<p>${price}</p>)
    },
  ];
  const handleQuantityChange = (id, value) => {
    setQuantityMap((prevQuantityMap) => ({
      ...prevQuantityMap,
      [id]: value,
    }));
  };
  const getCarts = async () => {
    dispatch(GetCartItems());

    const initialQuantityMap = carts.reduce(
      (acc, item) => ({ ...acc, [item.count]: item.count }),
      {}
    );
    setQuantityMap(initialQuantityMap);
  };
  useEffect(() => {
    getCarts();
  }, []);

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
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  // background: #f3f3f3;
  margin: 20px auto;
  padding: 0 20px;
  .ant-table-wrapper {
    margin: 0 auto;
    width: 90%;
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
  input{
    width: 60px;
    text-align: center;
    padding: 6px 12px;
  }
  a {
    color: #333;
  }
  @media screen and (max-width: 920px) {
    max-width: 720px;
  }
  @media screen and (max-width: 610px) {
    .ant-table-wrapper {
      margin: 0;
      width: 100%;
      overflow-x:scroll;
    }
  }
  @media screen and (min-width: 1200px) {
    width: 1140px;
  }
  button {
    height: max-content;
  }
  :where(.css-dev-only-do-not-override-6j9yrn).ant-btn-default:not(
      :disabled
    ):not(.ant-btn-disabled):hover {
    color: #62ab00;
    border-color: #62ab00;
  }
`;
export default Cart;
