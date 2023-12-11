import React from "react";
import { Outlet } from "react-router";
import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import {
  BookOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Admin = () => {
  function getItem(label, key, icon, to) {
    return {
      key,
      icon,
      to,
      label,
    };
  }
  const items = [
    getItem("Dashboard", "1", <DashboardOutlined />, "/admin"),
    getItem("Books", "2", <BookOutlined />, "books"),
    getItem("Orders", "3", <ShoppingCartOutlined />, "orders"),
  ];
  return (
    <div>
      <Layout>
        <Sider
          width={200}
          style={{ background: "#fff", position: "relative", padding: "0 8px" }}
        >
          <div
            width={200}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "fixed",
              width: "180px",
            }}
          >
            <Title level={4} style={{ textAlign: "center" }}>
              Admin Panel
            </Title>
            <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
              {items.map((item) => (
                <Menu.Item key={item.key} icon={item.icon}>
                  <Link to={item.to}>{item.label}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </div>
        </Sider>
        <Layout style={{ minHeight: "100vh" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
        <Toaster position="top-right" reverseOrder={false} />
      </Layout>
    </div>
  );
};

export default Admin;
