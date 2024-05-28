import { Layout } from "antd";
const { Footer } = Layout;
const Foot = () => {
    return (
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Rentify ©{new Date().getFullYear()} by Arunpragash A P
      </Footer>
    );
}

export default Foot;