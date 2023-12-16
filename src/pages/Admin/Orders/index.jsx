import React, { Fragment, useEffect, useState } from "react";
import { DeleteOrder, GetOrders } from "../../../redux/Orders/api_actions";
import { useDispatch, useSelector } from "react-redux";
import { DeleteProduct } from "../../../redux/Products/api_actions";
import { Col, Row, Select, Space, Spin, Typography } from "antd";
import Table from "../../../components/Table";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";
import StatusSelect from "../../../components/StatusSelect";
import OrdersTable from "../../../components/OrdersTable";
const Orders = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.order);
  const getOrders = async() => {
    dispatch(GetOrders());
  };
  useEffect(() => {
    getOrders();
  }, []);


  return (
    <Fragment>
      <Typography>
        <Row>
          <Col span={12}>
            <Title level={3}>Orders</Title>
          </Col>
          <Col
            span={12}
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              marginBottom: "0.5rem",
            }}
          >
          </Col>
        </Row>
      </Typography>
      {loading ? (
        <Spin />
      ) : (
        <OrdersTable orders={orders} pagination={true}/>
      )}
    </Fragment>
  );
};

export default Orders;
