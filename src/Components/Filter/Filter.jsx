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
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
        value={category}
        onChange={e => setCategory(e.target.value)}>
        <FormControlLabel value="femail" control={<Radio />} label="Femail" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel
          value="childrens"
          control={<Radio />}
          label="Childrens"
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
