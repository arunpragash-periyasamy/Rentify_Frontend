import { useEffect, useState } from "react";
import Card1 from "./Card1";
import Cards from "./Cards"
import { axiosInstance } from "../../../HouseOwners/utility/axiosInstance";

const CardList = () => {
    const [properties, setProperties] = useState([]);
    useEffect(() => { 
      getHouses();
    }, []);
  const getHouses = async () => {
    try {
      const response = await axiosInstance.get("/house/houses");
      setProperties(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(properties);
    return (
      <div
        className="container d-flex"
        // style={{
        //   display: "flex",
        //   flexWrap: "wrap",
        //   justifyContent: "space-evenly",
        // }}
      >
        {
          properties.map(property => <Card1 property={ property}/>)
        }
           
        {
          properties.map(property => <Card1 property={ property}/>)
        }
           
        {
          properties.map(property => <Card1 property={ property}/>)
        }
           
        {
          properties.map(property => <Card1 property={ property}/>)
        }
           
      </div>
    );
}

export default CardList;