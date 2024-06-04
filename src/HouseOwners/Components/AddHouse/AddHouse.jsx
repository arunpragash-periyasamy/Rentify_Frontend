import { Button, Form, Row, Col } from "antd";
import AddHouseTabs from "./FormTabs";
import PropertyInformation from "./PropertyAddress";

const AddHouse = () => {
  const [form] = Form.useForm();

  const formItemLayout ={
          labelCol: {
            span: 5,
          },
          wrapperCol: {
            span: 16,
          },
        }

  const buttonItemLayout ={
          wrapperCol: {
            span: 2,
            offset: 8,
          },
        }
  
  const onFinish = (values) => {
    alert("Success");
    console.log(values);
  }

  const onFinishFailed = (errorInfo) => {
    alert("Error")
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...formItemLayout}
      layout="horizontal"
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={{houseType:"House"}}
      style={{
        maxWidth: "100%",
        backgroundColor: "#000000",
        padding: "24px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <PropertyInformation form={form} />
      <Row>
        <Col span={24} style={{ textAlign: "center" }}>
          <Form.Item {...buttonItemLayout}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "#1890ff", borderColor: "#1890ff" }}
            >
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
      <AddHouseTabs/>
    </Form>
  );
};

export default AddHouse;
