import React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const CustomizedSlider = styled(Slider, {
  shouldForwardProp: (prop) => !["style"].includes(prop),
})(({ style }) => ({
  color: style && style.color ? style.color : "#181D1F",
  width: style && style.width ? style.width : "100px",
  marginLeft: 20,
  '& .MuiSlider-thumb': {
    borderRadius: style && style.thumbRadius && style.thumbRadius ,
  },
  "& .MuiSlider-rail": {
    height: style && style.sliderThickness ? style.sliderThickness : '5px'
  },
  "& .MuiSlider-track": {
    height: style && style.sliderThickness ? style.sliderThickness : '5px'
  },
}));

 const CustomSlider = (props) => {
  return (
    <CustomizedSlider
      value={props.value}
      onChange={props.handleChange}
      min={props.minValue ? props.minValue : 0}
      max={props.maxValue ? props.maxValue : 1}
      step={props.step ? props.step : 0.1}
      style={props.style}
    />
  );
}

export default CustomSlider