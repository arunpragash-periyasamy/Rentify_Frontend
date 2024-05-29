
import { Layout } from "antd"
const Content = ({Outlet}) => {
  const { Content } = Layout;
    return(
        <Content
          style={{
            margin: "24px 16px 0",
          overflow: "initial",
            minHeight:"86vh"
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: "center",
              borderRadius: 8,
            }}
        >
          <Outlet/>
        </div>
        </Content>
    )
}

export default Content;