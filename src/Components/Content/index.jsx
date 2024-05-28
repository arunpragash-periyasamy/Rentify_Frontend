import { Layout } from "antd"
const { Content } = Layout;
const Body = () => {
    return(
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: "#ffffff",
              borderRadius: 8,
            }}
          ></div>
        </Content>
    )
}

export default Body;