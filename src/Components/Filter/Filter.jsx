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
      <FormLabel
        id="demo-radio-buttons-group-label"
        style={{ textAlign: "center" }}>
        По категориям
      </FormLabel>
      <RadioGroup
        style={{
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          textAlign: "center",
        }}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
        value={category}
        onChange={e => setCategory(e.target.value)}>
        <FormControlLabel value="Пиджак" control={<Radio />} label="Пиджак" />
        <FormControlLabel value="Свитшот" control={<Radio />} label="Свитшот" />
        <FormControlLabel
          value="Футболка"
          control={<Radio />}
          label="Футболка"
        />
        <FormControlLabel value="Худи" control={<Radio />} label="Худи" />
        <FormControlLabel value="all" control={<Radio />} label="Все товары" />
      </RadioGroup>
      <FormLabel
        id="demo-radio-buttons-group-label"
        style={{ textAlign: "center" }}>
        По ценам
      </FormLabel>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={price}
        color={"error"}
        onChange={e => setPrice(e.target.value)}
        valueLabelDisplay="auto"
        min={0}
        max={500}
      />
    </FormControl>
  );
};

export default Filter;
