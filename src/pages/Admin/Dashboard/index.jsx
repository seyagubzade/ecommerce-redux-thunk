import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteProduct, GetProductsData } from "../../../redux/Products/api_actions";
import { Col, Divider, Row, Space, Spin, Typography } from "antd";
import Table from "../../../components/Table";
import { Link } from "react-router-dom";
import { DeleteOrder, GetOrders } from "../../../redux/Orders/api_actions";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import StatusSelect from "../../../components/StatusSelect";
import styled from "styled-components";
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
            <Link to={`/admin/edit/${item.id}`}><EditOutlined style={{color:"#ff7a00"}}/></Link>
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
      {loading ? <Spin /> : error ? <p>Error</p> : <Table columns={columns} dataSource={product.slice(0,3)} slice={true} pagination={false}/>}
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
            <Link style={{ fontSize: "16px" }} to='orders'>
              See More 
            </Link>
          </Col>
        </Row>
      </Typography>
      {loading && <Spin /> }
      {orders &&
        orders.map((order, index) => {
          return (
            <StyledTable>
              <Space>
                <Title level={3}>Customer Info #{order.id}</Title>
              </Space>
              <Space>
                <ul>
                  <li>
                    <span class="left">Full name:</span>
                    <span class="right">
                      {order.firstName} {order.lastName}
                    </span>
                  </li>
                  <li>
                    <span class="left">Email:</span>
                    <span class="right">{order.email}</span>
                  </li>
                  <li>
                    <span class="left">Phone:</span>
                    <span class="right">{order.phone}</span>
                  </li>
                  <li>
                    <span class="left">Address:</span>
                    <span class="right">{order.address}</span>
                  </li>
                  <li>
                    <span class="left">City:</span>
                    <span class="right">{order.city}</span>
                  </li>
                  <li>
                    <span class="left">State:</span>
                    <span class="right">{order.state}</span>
                  </li>
                </ul>
              </Space>
              <Space>
                <Title level={5}>Total order count: {order.orders.length}</Title>
              </Space>
            </StyledTable>
          );
        })}
    </div>
  );
};

const StyledTable = styled.div`
  background: #fff;
  padding-top: 15px;
  margin-bottom: 30px;
  border-radius: 12px;
  .ant-table-content {
    overflow-x: scroll;
  }
  th {
    background: #fff!important;
  }
  .ant-space {
    width: 100%;
    padding: 0 15px;
  }
  .ant-space-item {
    width: 100%;
  }
  ul {
    color: #333;
    margin: 15px 0;
  }
  ul li {
    border-bottom: 1px solid #dfdfdf;
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
    width: 30%;
    font-weight: 600;
  }
  li span {
    color: inherit;
    float: right;
  }
  span {
    float: right;
    display: block;
    width: 70%;
  }
`;

export default Dashboard;
