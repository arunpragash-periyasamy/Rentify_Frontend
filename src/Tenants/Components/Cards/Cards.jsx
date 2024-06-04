import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
import House from "../../../HouseOwners/assets/House.jpg"

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const Cards = () => {
    return (
      <Card
        style={{ width: 300, margin:"5px" }}
        cover={
          <img
            alt="example"
            src={House}
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
          }
          title="Card title"
          description="This is the description"
        />
      </Card>
    );
}

export default Cards;