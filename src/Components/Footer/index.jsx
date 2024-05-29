import { Layout } from "antd";
const Footer = () => {
  const { Footer } = Layout;
    return (
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#1f1f1f",
        }}
      >
        Rentify ©{new Date().getFullYear()} by Arunpragash A P
      </Footer>
    );
}

export default Footer;