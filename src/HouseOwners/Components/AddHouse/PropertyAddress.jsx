import { Col, Form, Input, Row,} from "antd";
import { handleNumericInput, required, titleCase } from "../../utility/Functions";

const PropertyAddress = ({form}) => {
    return (
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12}>
          <Form.Item
            label="Property Title"
            name="propertyName"
            rules={[required]}
          >
            <Input placeholder="Property Title" onInput={titleCase} />
          </Form.Item>
          <Form.Item label="Street" name="street" rules={[required]}>
            <Input placeholder="Street" />
          </Form.Item>
          <Form.Item label="Address" name="address" rules={[required]}>
            <Input placeholder="Address" />
          </Form.Item>
          <Form.Item label="City" name="City" rules={[required]}>
            <Input placeholder="City" />
          </Form.Item>
          <Form.Item
            label="Pin Code"
            name="pinCode"
            rules={[
              required,
              { pattern: /^\d{6}$/, message: "pin code should be six digits" },
            ]}
          >
            <Input
              placeholder="Pin Code"
              type="text"
              minLength={6}
              maxLength={6}
              onInput={handleNumericInput}
            />
          </Form.Item>
        </Col>
      </Row>
    );
}

export default PropertyAddress;