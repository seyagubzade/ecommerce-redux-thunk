import React from "react";
import Table from "../Table";
import StatusSelect from "../StatusSelect";
import { Space } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { DeleteOrder, UpdateOrder } from "../../redux/Orders/api_actions";
import styled from "styled-components";
import Title from "antd/es/typography/Title";

const OrdersTable = ({ orders, pagination }) => {
  const dispatch = useDispatch();

  const updateStatusOrder = (item)=>{
    // console.log(item)
    let updatedCustomerOrder = orders.find((order)=>order.id==item.customerID)
    const id = updatedCustomerOrder.id;
    let newWithinOrders = updatedCustomerOrder.orders;
    let findUpdatedOrderIndex = newWithinOrders.findIndex((order)=>order.id == item.id)
    newWithinOrders = [...newWithinOrders.slice(0, findUpdatedOrderIndex), item, ...newWithinOrders.slice(findUpdatedOrderIndex+1)] 
    updatedCustomerOrder = {...updatedCustomerOrder, orders: newWithinOrders}
    // console.log("FINAL FUCKING FINAL>>>", updatedCustomerOrder)
    dispatch(UpdateOrder({ id , item: updatedCustomerOrder }));

  }
  
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
        // console.log("STATUS ITEM>>>",item)
        return <StatusSelect item={item} updateStatusOrder={updateStatusOrder}/>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (item) => {
        return (
          <Space size="middle" style={{ marginBottom: "20px" }}>
            <Link to={`/admin/book/detail/${item.id}`}>
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
    <div>
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
                <Title level={5}>Orders X{order.orders.length}</Title>
              </Space>

              <Table
                columns={columns}
                // customerID = {order.id}
                dataSource={order.orders}
                pagination={pagination}
              />
            </StyledTable>
          );
        })}
    </div>
  );
};

export default OrdersTable;

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
