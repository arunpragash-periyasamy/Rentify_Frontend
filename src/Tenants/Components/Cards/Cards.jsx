import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
import House from "../../../HouseOwners/assets/House.jpg"

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const Cards = () => {
    return (
      <Card
        style={{ width: 300, margin: "5px" }}
        cover={
          <img
            alt="example"
            src={
              "http://localhost:3000/api/house/image/images-1718372744226.jpg"
            }
          />
        }
        // actions={[
        //   <SettingOutlined key="setting" />,
        //   <EditOutlined key="edit" />,
        //   <EllipsisOutlined key="ellipsis" />,
        // ]}
      >
        <Meta title="Card title" description="This is the description" />
      </Card>
    );
}

export default Cards;