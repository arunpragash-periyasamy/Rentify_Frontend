import { Col, Form, Input, Radio, Row, Select, Space } from "antd";
import { handleNumericInput, required } from "../../utility/Functions";

const RoomDetails = () => {
    return (
      <Row>
        <Col xs={24} sm={24} md={12}>
          <Form.Item
            label="Property Type"
            name="propertyType"
            rules={[required]}
          >
            <Radio.Group>
              <Radio value="House">Independent House</Radio>
              <Radio value="Flat">Flat</Radio>
              <Radio value="Office">Office</Radio>
            </Radio.Group>
          </Form.Item>
          
          <Form.Item label="Property Status">
            <Select placeholder="Rent/Sale" style={{textAlign:"left"}}> 
              <Select.Option value="Rent">Rent</Select.Option>
              <Select.Option value="Sale">Sale</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Max Rooms"
            name="maxRooms"
            rules={[required]}
            onInput={handleNumericInput}
          >
            <Input placeholder="Number of Bedrooms" />
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

          <Form.Item label="Area" name="area" rules={[required]}>
            <Input placeholder="85 sq ft" onInput={handleNumericInput}></Input>
          </Form.Item>
          <Form.Item label="Price" name="price" rules={[required]}>
            <Input placeholder="₹5800" onInput={handleNumericInput}></Input>
          </Form.Item>
          <Form.Item label="Description" name="description" rules={[required]}>
            <Input placeholder="Description"></Input>
          </Form.Item>
        </Col>
      </Row>
    );
}

export default RoomDetails;