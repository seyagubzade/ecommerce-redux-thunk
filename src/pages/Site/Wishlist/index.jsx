import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteCartItem, GetCartItems } from "../../../redux/Cart/api_actions";
import { Button, Card, Row, Spin, Typography } from "antd";
import Title from "antd/es/typography/Title";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Table from "../../../components/Table";
import { removeFromWishlist } from "../../../redux/Wishlist/wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const {wishlist, loading, error} = useSelector((state)=>state.wishlist);
  useEffect(()=>{
    console.log("Wishlist>>>", wishlist)
  }, [wishlist ])

  const columns = [
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
      title: "AUTHOR",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "PRICE",
      dataIndex: "price",
      key: "price",
      render: (price) => <p>${price}</p>,
    },
    {
      title: "REMOVE",
      dataIndex: "remove",
      key: "Remove",
      render: (_, item) => {
        return (
          <button
            style={{ background: "none", border: "none", outline: "none" }}
            onClick={() => dispatch(removeFromWishlist(item))}
          >
            <i class="far fa-trash-alt"></i>
          </button>
        );
      },
    },
  ];

  return (
    <StyledWrapper>
      <Typography style={{ marginBottom: "30px" }}>
        <Title level={5}>
          <Link to="/">Home</Link> / Wishlist
        </Title>
      </Typography>
      <Row>
        {/* {loading ? (
          <Spin />
        ) : error ? (
          <p>Not found</p>
        ) : carts ? (
          <Fragment>
            <Table dataSource={carts} columns={columns} />
          </Fragment>
        ) : null} */}
        {wishlist && <Table dataSource={wishlist} columns={columns} />}
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

export default Wishlist;
