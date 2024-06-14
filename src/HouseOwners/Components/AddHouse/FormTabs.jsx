import React from "react";
import { Tabs } from "antd";
import RoomDetails from "./RoomDetails";
import Terms from "./Terms";
import Amenities from "./Amenities";
import UploadImage from "./UploadImage";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Room Details",
    children: <RoomDetails/>,
  },
  {
    key: "2",
    label: "Terms",
    children: <Terms/>,
  },
  {
    key: "3",
    label: "Amenities",
    children: <Amenities/>,
  },
  {
    key: "4",
    label: "Images",
    children: <UploadImage/>,
  }
];
const FormTabs = () => (
  <Tabs
    defaultActiveKey="1"
    type="card"
    items={items}
    
  />
);
export default FormTabs;
