import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row } from "antd";

const Terms = () => {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  return (
    <Row>
      <Col xs={24} sm={24} md={12}>
        <Form.List name="terms">
          {(fields, { add, remove }, { errors }) => (
            <>
                          {fields.map((field, index) => (
                <Form.Item
                key={field.key}
                  label={`Term ${index+1}`}
                  required={false}
                >
                  <Form.Item
                    {...field}
                          validateTrigger={["onChange", "onBlur"]}
                          
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "Please input term or delete this field.",
                      },
                    ]}
                    noStyle
                  >
                    <Input
                      placeholder="Term condition"
                      style={{
                        width: "80%",
                      }}
                    />
                  </Form.Item>
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={() => remove(field.name)}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{
                    width: "60%",
                  }}
                  icon={<PlusOutlined />}
                >
                  Add New Term
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
      </Col>
    </Row>
  );
};
export default Terms;
