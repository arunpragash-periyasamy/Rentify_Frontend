import React,{useState} from "react";
import { Grid, Layout } from "antd";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import Content from "../../Components/Content";
import Footer from "../../Components/Footer";
import { Outlet } from "react-router-dom";
const { useBreakpoint } = Grid;
const App = () => {
  const screens = useBreakpoint();
  const [collapsed, setCollapsed] = useState(!screens.lg);
  return (
    <Layout hasSider>
      <Sidebar collapsed={collapsed} />
      <Layout
        style={{
          marginLeft: collapsed ? 80 : 200,
          minHeight: "100vh",
        }}
      >
        <Header collapsed={collapsed} Collapsed={() => setCollapsed(!collapsed)} screens={screens} />
        <Content Outlet={Outlet} />
        <Footer />
      </Layout>
    </Layout>
  );
};
export default App;
