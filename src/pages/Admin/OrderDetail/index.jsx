import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Col, Row, Spin, Typography } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { GetSingleOrder } from "../../../redux/Orders/api_actions";
import StatusSelect from "../../../components/StatusSelect";

const OrderDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentOrder, loading, error } = useSelector((state) => state.order);
  const getProduct = async() => {
    dispatch(GetSingleOrder(id));
  };
  useEffect(() => {
    getProduct();
  }, [id]);
  return (
    <Fragment>
      <Typography>
        <Title level={3}>Order Detail</Title>
      </Typography>
      <Row>
        {loading ? (
          <Spin />
        ) : error ? (
          <p>Not found</p>
        ) : currentOrder ? (
          <Fragment>
            <Col span={8}>
              <img src={currentOrder.imageUrl} alt={currentOrder.title} style={{width: "80%",height: "auto", objectFit:"cover" }}/>
            </Col>
            <Col span={12}>
              <Title level={3} style={{marginTop:'0'}}>{currentOrder.title}</Title>
              <Paragraph><b>Author:</b> {currentOrder.author}</Paragraph>
              <Paragraph><b>Page Size:</b> {currentOrder.pageSize}</Paragraph>
              <Paragraph><b>Published Date:</b> {currentOrder.publishedDate}</Paragraph>
              <Paragraph><b>Genre:</b> {currentOrder.genre}</Paragraph>
              <Paragraph><b>Price:</b> ${currentOrder.price}</Paragraph>
              <Paragraph><b>Amount:</b> {currentOrder.count}</Paragraph>
              <Paragraph><b>Total Price:</b> ${currentOrder.totalPrice}</Paragraph>
              <Paragraph style={{display: 'flex', alignItems:'center', gap:'8px'}}><b>Oreder Status:</b> 
                <StatusSelect item={currentOrder}/>
              </Paragraph>
              <Paragraph><b>Description:</b> {currentOrder.description}</Paragraph>
            </Col>
          </Fragment>
        ) : null}
      </Row>
    </Fragment>
  );
};


export default OrderDetail