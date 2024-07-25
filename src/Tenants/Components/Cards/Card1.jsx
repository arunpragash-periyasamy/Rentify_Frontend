import React from "react";
import { Card, Carousel } from "antd"; // Import Carousel from antd
import { House_API } from "../../../HouseOwners/utility/constants";

const { Meta } = Card;
const API = "http://localhost:3000/api/house/image/images-1718372744278.jpg";
const Card1 = ({ property }) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <Carousel autoplay>
          {" "}
          {/* Add Carousel component with autoplay */}
          {property.images.map((image, index) => (
            <div key={index}>
              <img style={{ width: 300 }} alt="property" src={image} />
            </div>
          ))}
        </Carousel>
      }
    >
      <Meta
        title={property.propertyName}
        description={`Price: $${property.price}`}
      />
      <p>{property.description}</p>
    </Card>
  );
};

export default Card1;