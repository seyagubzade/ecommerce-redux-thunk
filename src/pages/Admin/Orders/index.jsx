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
const Orders = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.order);
  const getOrders = async() => {
    dispatch(GetOrders());
  };
  useEffect(() => {
    getOrders();
  }, []);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Genre",
      dataIndex: "genre",
      key: "genre",
    },
    {
      title: "Amount",
      dataIndex: "count",
      key: "count",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status, item) => {
        return (
          <StatusSelect item={item}/>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (item) => {
        return (
          <Space size="middle">
            {/* 'book/detail/:id', */}
            <Link to={`/admin/order/detail/${item.id}`}>
              <i class="fa-light fa-memo-circle-info"></i>
            </Link>

            <a onClick={() => dispatch(DeleteOrder(item.id))}>
              <DeleteOutlined style={{ color: "red" }} />
            </a>
          </Space>
        );
      },
    },
  ];

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
            {/* <Button>Add New</Button> */}
          </Col>
        </Row>
      </Typography>
      {loading ? (
        <Spin />
      ) : (
        <Table columns={columns} dataSource={orders} pagination={true} />
      )}
    </Fragment>
  );
};

export default Orders;
