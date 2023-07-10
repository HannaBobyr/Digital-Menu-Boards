import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import ContentComponent from "./ContentComponent";
import { useState } from "react";
const { Header, Sider, Content } = Layout;

const UserHome = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{
            paddingTop: 50,
          }}
          onClick={({key}) => {
            navigate(key);
          }}
          items={[
            {
              key: "",
              label: "Home",
            },
            {
              key: "businessData",
              label: "Business Data",
            },
            {
              key: "products",
              label: "Products",
            },
            {
              key: "categories",
              label: "Categories",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "100vh",
            background: colorBgContainer,
          }}
        >
          <ContentComponent />
        </Content>
      </Layout>
    </Layout>
  );
};
export default UserHome;
