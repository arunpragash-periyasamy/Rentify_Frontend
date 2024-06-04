import {  BarChartOutlined, UploadOutlined, UserOutlined, HomeOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Menu, Layout } from "antd";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png"
const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
  const path = useLocation();
  const items = [
    {
      key: "/house",
      icon: <HomeOutlined />,
      label: "Add House",
      children: [
        {
          key: "5",
          label: <Link to="/table">View House</Link>,
        },
        {
          key: "6",
          label: <Link to="/house">New House</Link>,
        },
      ],
    },
    {
      key: "/",
      icon: <UserOutlined />,
      label: <Link to="/login">login</Link>,
    },
    {
      key: "/page",
      icon: <VideoCameraOutlined />,
      label: <Link to="/page">Test</Link>,
    },
    // {
    //   key: "/table",
    //   icon: <UploadOutlined />,
    //   label: <Link to="/table">Table</Link>,
    // },
  ];
    return (
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        <img
          src={Logo}
          alt="LOGO"
          style={
            collapsed
              ? { width: "100px", height: "80px" }
              : { width: "200px", height: "100px" }
          }
        />
        <Menu mode="inline" defaultSelectedKeys={[path.pathname]} items={items} />
      </Sider>
    );
}

export default Sidebar;