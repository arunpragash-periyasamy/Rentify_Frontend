import React,{useState} from "react";
import { Layout } from "antd";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import Content from "../../Components/Content";
import Footer from "../../Components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <Layout hasSider>
      <Sidebar collapsed={collapsed} />
      <Layout
        style={{
          marginLeft: collapsed ? 80 : 200,
        }}
      >
        <Header Collapsed={()=> setCollapsed(!collapsed)}/>
        <Content Outlet={Outlet}/>
        <Footer/>
      </Layout>
    </Layout>
  );
};
export default App;
