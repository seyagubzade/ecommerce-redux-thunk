import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { GetSingleProduct } from "../../../redux/Products/api_actions";
import { Col, Row, Spin, Typography } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentProduct, loading, error } = useSelector((state) => state.product);
  const getProduct = () => {
    dispatch(GetSingleProduct(id));
  };
  useEffect(() => {
    getProduct();
  }, [id]);
  return (
    <Fragment>
      <Typography>
        <Title level={3}>Product Detail</Title>
      </Typography>
      <Row>
        {loading ? (
          <Spin />
        ) : error ? (
          <p>Not found</p>
        ) : currentProduct ? (
          <Fragment>
            <Col span={8}>
              <img src={currentProduct.imageUrl} alt={currentProduct.title} style={{width: "80%",height: "auto", objectFit:"cover" }}/>
            </Col>
            <Col span={12}>
              <Title level={3} style={{marginTop:'0'}}>{currentProduct.title}</Title>
              <Paragraph><b>Author:</b> {currentProduct.author}</Paragraph>
              <Paragraph><b>Page Size:</b> {currentProduct.pageSize}</Paragraph>
              <Paragraph><b>Published Date:</b> {currentProduct.publishedDate}</Paragraph>
              <Paragraph><b>Genre:</b> {currentProduct.genre}</Paragraph>
              <Paragraph><b>Price:</b> ${currentProduct.price}</Paragraph>
              <Paragraph><b>Total Price:</b> ${currentProduct.totalPrice}</Paragraph>
              <Paragraph><b>Description:</b> {currentProduct.description}</Paragraph>
            </Col>
          </Fragment>
        ) : null}
      </Row>
    </Fragment>
  );
};

export default ProductDetail;
