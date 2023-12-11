import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteProduct,
  GetProductsData,
} from "../../../redux/Products/api_actions";
import { Button, Col, Divider, Row, Space, Spin, Typography } from "antd";
import Table from "../../../components/Table";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const Books = () => {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.product);
  const getProducts = async () => {
    dispatch(GetProductsData());
  };
  useEffect(() => {
    getProducts();
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
            <Link to={`/admin/book/detail/${item.id}`}> <i class="fa-light fa-memo-circle-info"></i></Link>
            <Link to={`/admin/edit/${item.id}`}>
              <EditOutlined style={{ color: "#ff7a00" }} />
            </Link>
            <a onClick={() => dispatch(DeleteProduct(item.id))}>
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
            <Link to='/admin/add-new'>
              <Button>Add New</Button>
            </Link>
          </Col>
        </Row>
      </Typography>
      {loading ? (
        <Spin />
      ) : (
        <Table columns={columns} dataSource={product} pagination={true} />
      )}
    </Fragment>
  );
};

export default Books;
