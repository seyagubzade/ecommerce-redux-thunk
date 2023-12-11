import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteProduct, GetProductsData } from "../../../redux/Products/api_actions";
import { Col, Divider, Row, Space, Spin, Typography } from "antd";
import Table from "../../../components/Table";
import { Link } from "react-router-dom";
import { DeleteOrder, GetOrders } from "../../../redux/Orders/api_actions";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import StatusSelect from "../../../components/StatusSelect";
const { Title  } = Typography;

const Dashboard = () => {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.product);
  const { orders } = useSelector((state) => state.order);
  const getProducts = async() => {
    dispatch(GetProductsData());
  };
  const getOrders = async() => {
    dispatch(GetOrders());
  };
  useEffect(() => {
    getProducts();
    getOrders()
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
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (item) => {
        return (
          <Space size="middle">
            <Link to={`book/detail/${item.id}`}><i class="fa-light fa-memo-circle-info"></i></Link>
            <a><EditOutlined style={{color:"#ff7a00"}}/></a>
            <a onClick={()=>dispatch(DeleteProduct(item.id))}><DeleteOutlined style={{color:"red"}} /></a>
          </Space>
        );
      },
    },
  ];

  const columnsOrder = [
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
      render: (status, item)=>{
        return (
          <StatusSelect item={item}/>
        )
      }
    },
    {
      title: "Action",
      key: "action",
      render: (item) => {
        return (
          <Space size="middle">
            <Link to={`order/detail/${item.id}`}><i class="fa-light fa-memo-circle-info"></i></Link>
            <a><EditOutlined style={{color:"#ff7a00"}}/></a>
            <a 
            onClick={()=>dispatch(DeleteOrder(item.id))}
            ><DeleteOutlined style={{color:"red"}} /></a>
          </Space>
        );
      },
    },
  ];

  return (
    <div>
      <Typography>
        <Row>
          <Col span={12}>
            <Title level={3}>Products</Title>
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
            <Link style={{ fontSize: "16px" }} to='books'>
              See More 
            </Link>
          </Col>
        </Row>
      </Typography>
      {loading ? <Spin /> : error ? <p>Error</p> : <Table columns={columns} dataSource={product} slice={true} pagination={false}/>}
      <Divider style={{marginTop:'50px'}}/>
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
            <Link style={{ fontSize: "16px" }} to='books'>
              See More 
            </Link>
          </Col>
        </Row>
      </Typography>
      {loading ? <Spin /> : <Table columns={columnsOrder} dataSource={orders} slice={true} pagination={false}/>}
    </div>
  );
};

export default Dashboard;
