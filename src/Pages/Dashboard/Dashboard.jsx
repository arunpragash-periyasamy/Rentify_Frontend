import React,{useState} from "react";
import { Layout } from "antd";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import Content from "../../Components/Content";
import Footer from "../../Components/Footer";

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
        <Content />
        <Footer/>
      </Layout>
    </Layout>
  );
};
export default App;
