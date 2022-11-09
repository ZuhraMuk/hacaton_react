import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import React from "react";

const Filter = ({ category, setCategory, price, setPrice }) => {
  return (
    <FormControl sx={{ width: "250px" }}>
      <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
        value={category}
        onChange={e => setCategory(e.target.value)}
        sx={{
          width: "250px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <FormControlLabel value="femail" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel
          value="childrens"
          control={<Radio />}
          label="Children"
        />
        <FormControlLabel value="all" control={<Radio />} label="All" />
      </RadioGroup>
      <FormLabel id="demo-radio-buttons-group-label">By prices</FormLabel>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={price}
        onChange={e => setPrice(e.target.value)}
        valueLabelDisplay="auto"
        min={0}
        max={200000}
      />
    </FormControl>
  );
};

export default Filter;
