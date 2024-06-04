import { Layout } from "antd";
const Footer = () => {
  const { Footer } = Layout;
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

export default Footer;