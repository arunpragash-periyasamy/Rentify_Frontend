import {  BarChartOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
const { Sider } = Layout;
const Sidebar = ({collapsed}) => {
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
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined/>,
              label: <Link to="/login">login</Link>,
            },
            {
              key: "2",
              icon: <VideoCameraOutlined/>,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined/>,
              label: "nav 3",
            },
            {
              key: "4",
              icon: <BarChartOutlined/>,
              label: "nav 4",
            },
          ]}
        />
      </Sider>
    );
}

export default Sidebar;