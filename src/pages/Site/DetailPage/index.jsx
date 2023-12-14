import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { GetSingleProduct } from "../../../redux/Products/api_actions";
import { Button, Col, Row, Spin, Typography } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PostCartItem } from "../../../redux/Cart/api_actions";
import { useCart } from "../../../context/CartContext";

const DetailPage = () => {
  const { id } = useParams();
  const {addItemToCart} = useCart();
  const dispatch = useDispatch();
  const { currentProduct, loading, error } = useSelector((state) => state.product);
  const getProduct = () => {
    dispatch(GetSingleProduct(id));
  };
  const handleAddToCart = () => {
    addItemToCart(currentProduct)
  }
  useEffect(() => {
    getProduct();
  }, [id]);
  return (
    <StyledWrapper>
      <Typography style={{ marginBottom: '30px' }}>
        <Title level={5}><Link to='/'>Home</Link> / Product Details</Title>
      </Typography>
      <Row>
        {loading ? (
          <Spin />
        ) : error ? (
          <p>Not found</p>
        ) : currentProduct ? (
          <Fragment>
            <Col span={8} xs={24} md={8} style={{ marginBottom: '20px' }}>
              <img src={currentProduct.imageUrl} alt={currentProduct.title} style={{ width: "80%", height: "auto", objectFit: "cover" }} />
            </Col>
            <Col span={12} xs={24} md={12}>
              <Title level={3} style={{ marginTop: '0' }}>{currentProduct.title}</Title>
              <Paragraph><b>Author:</b> {currentProduct.author}</Paragraph>
              <Paragraph><b>Page Size:</b> {currentProduct.pageSize}</Paragraph>
              <Paragraph><b>Published Date:</b> {currentProduct.publishedDate}</Paragraph>
              <Paragraph><b>Genre:</b> {currentProduct.genre}</Paragraph>
              <Paragraph><b>Price:</b> <span style={{ color: '#62ab00', fontSize: '18px', fontWeight: '600' }}> ${currentProduct.price} </span></Paragraph>
              <Paragraph><b>Description:</b> {currentProduct.description}</Paragraph>

              <Button onClick={handleAddToCart} style={{ marginRight: '12px' }}><i class="fa-light fa-plus"></i> Add To Cart</Button>
              <Button><i style={{ marginRight: '6px' }} class="fa-solid fa-heart"></i>Add to wishlist</Button>
            </Col>
          </Fragment>
        ) : null}
      </Row>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
a{
  color:#333
}
    margin: 20px auto;
    padding: 0 20px;
    @media screen and (max-width: 920px)
   {
    max-width: 720px;
    }
    @media screen and (min-width: 1200px)
{
    width: 1140px;
}
button{
  height: max-content;
}
:where(.css-dev-only-do-not-override-6j9yrn).ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
    color: #62ab00;
    border-color: #62ab00;
}
`
export default DetailPage;

