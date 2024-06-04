
import { Layout } from "antd"
const Content = ({Outlet}) => {
  const { Content } = Layout;
    return (
      <Content
        style={{
          padding: "24px",
          margin: 0,
          minHeight: 280,
          backgroundColor: "#2a2a2a"
        }}
      >
        <div
          style={{
            padding: 24,
            textAlign: "center",
            borderRadius: 8,
          }}
        >
          <Outlet />
        </div>
      </Content>
    );
}

export default Content;