
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
const Header = ({Collapsed, collapsed}) => {
  const { Header } = Layout;
    return (
      <Header
        style={{
                padding: 0,
        }}
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => Collapsed()}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
            />
      </Header>
    );
}

export default Header;