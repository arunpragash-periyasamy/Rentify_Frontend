import { Col, Form, Input, Radio, Row, Select, Space } from "antd";
import { handleNumericInput, required } from "../../utility/Functions";

const RoomDetails = () => {
    return (
        
      <Row>
        <Col xs={24} sm={24} md={12}>
          <Form.Item label="House Type" name="houseType" rules={[required]}>
            <Radio.Group>
              <Radio value="House">Independent House</Radio>
              <Radio value="Flat">Flat</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.houseType !== currentValues.houseType
            }
          >
            {({ getFieldValue }) => (
              <Form.Item
                label={
                  getFieldValue("houseType") === "Flat" ? "Flat No" : "House No"
                }
                name="houseNo"
                rules={[
                  {
                    required: true,
                    message: `Please enter the ${
                      getFieldValue("houseType") === "Flat"
                        ? "Flat No"
                        : "House No"
                    }!`,
                  },
                ]}
              >
                <Input
                  placeholder={
                    getFieldValue("houseType") === "Flat"
                      ? "Flat No"
                      : "House No"
                  }
                />
              </Form.Item>
            )}
          </Form.Item>
          <Form.Item
            label="Number of Bedrooms"
            name="noOfBedrooms"
            rules={[required]}
          >
            <Input placeholder="Number of Bedrooms" />
          </Form.Item>
          <Form.Item
            label="Number of Bathrooms"
            name="noOfBathrooms"
            rules={[required]}
          >
            <Input placeholder="Number of Bathrooms" />
          </Form.Item>
          
          <Form.Item label="Price" name="price" rules={[required]}>
            <Input placeholder="Price" onInput={handleNumericInput}></Input>
          </Form.Item>
        </Col>
      </Row>
    )
}

export default RoomDetails;