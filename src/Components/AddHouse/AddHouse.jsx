import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    width: "100%",
  },
}));

const AddHouse = () => {
 const classes = useStyles();
 const [houseInfo, setHouseInfo] = useState({
   houseNumber: "",
   street: "",
   area: "",
   city: "",
   address: "",
   pinCode: "",
   bedrooms: 0,
   hall: 0,
   kitchen: 0,
   images: [], // Store uploaded images
 });
    
    
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setHouseInfo((prevHouseInfo) => ({
      ...prevHouseInfo,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const images = Array.from(e.target.files);
    setHouseInfo((prevHouseInfo) => ({
      ...prevHouseInfo,
      images: prevHouseInfo.images.concat(images),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(houseInfo).forEach(([key, value]) => {
      if (key === "images") {
        value.forEach((image, index) => {
          formData.append(`image${index + 1}`, image);
        });
      } else {
        formData.append(key, value);
      }
    });

    // Submit formData to the API
    fetch("http://localhost:4000/newHouse", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from API:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };


  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="houseNumber"
            label="House Number"
            value={houseInfo.houseNumber}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="street"
            label="Street"
            value={houseInfo.street}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="area"
            label="Area"
            value={houseInfo.area}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="city"
            label="City"
            value={houseInfo.city}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="address"
            label="Address"
            value={houseInfo.address}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="pinCode"
            label="Pin Code"
            value={houseInfo.pinCode}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel>Bedrooms</InputLabel>
            <Select
              name="bedrooms"
              value={houseInfo.bedrooms}
              onChange={handleChange}
            >
              {[...Array(10).keys()].map((num) => (
                <MenuItem key={num} value={num}>{`${num}`}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel>Hall</InputLabel>
            <Select name="hall" value={houseInfo.hall} onChange={handleChange}>
              {[...Array(10).keys()].map((num) => (
                <MenuItem key={num} value={num}>{`${num}`}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel>Kitchen</InputLabel>
            <Select
              name="kitchen"
              value={houseInfo.kitchen}
              onChange={handleChange}
            >
              {[...Array(10).keys()].map((num) => (
                <MenuItem key={num} value={num}>{`${num}`}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <Grid item xs={12}>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
              />
            </Grid>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddHouse;
