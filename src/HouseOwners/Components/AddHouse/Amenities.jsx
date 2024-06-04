import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select, Space } from "antd";

  const options = [
    {
      label: "Wifi",
      value: "wifi",
    },
    {
      label: "Washing Machine",
      value: "washing machine",
    },
    {
      label: "AC",
      value: "AC",
    },
    {
      label: "TV",
      value: "TV",
    },
  ];

const Amenities = () => {
    return (
      <Row>
        <Col xs={24} sm={24} md={12}>
          <Form.Item label="Amenities" name="amenities">
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="select Amenities"
              defaultValue={[]}
              options={options}
              optionRender={(option) => (
                <Space>
                  <span role="img" aria-label={option.data.label}>
                    {option.data.value}
                  </span>
                  </Space>
              )}
            ></Select>
          </Form.Item>
          <Form.List name="additionalAmenities">
            {(fields, { add, remove }, { errors }) => (
              <>
                {fields.map((field, index) => (
                  <Form.Item
                    key={field.key}
                    label={`Additional Amenity ${index + 1}`}
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
                        placeholder="Amenity"
                        style={{
                          width: "95%",
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
                    Add New Amenity
                  </Button>
                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            )}
          </Form.List>
        </Col>
      </Row>
    );
}

export default Amenities;