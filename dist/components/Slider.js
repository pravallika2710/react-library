"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.array.includes.js");
var _react = _interopRequireDefault(require("react"));
var _Slider = _interopRequireDefault(require("@mui/material/Slider"));
var _styles = require("@mui/material/styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CustomizedSlider = (0, _styles.styled)(_Slider.default, {
  shouldForwardProp: prop => !["style"].includes(prop)
})(_ref => {
  let {
    style
  } = _ref;
  return {
    color: style && style.color ? style.color : "#181D1F",
    width: style && style.width ? style.width : "100px",
    marginLeft: 20,
    '& .MuiSlider-thumb': {
      borderRadius: style && style.thumbRadius && style.thumbRadius
    },
    "& .MuiSlider-rail": {
      height: style && style.sliderThickness ? style.sliderThickness : '5px'
    },
    "& .MuiSlider-track": {
      height: style && style.sliderThickness ? style.sliderThickness : '5px'
    }
  };
});
const CustomSlider = props => {
  return /*#__PURE__*/_react.default.createElement(CustomizedSlider, {
    value: props.value,
    onChange: props.handleChange,
    min: props.minValue ? props.minValue : 0,
    max: props.maxValue ? props.maxValue : 1,
    step: props.step ? props.step : 0.1,
    style: props.style
  });
};
var _default = CustomSlider;
exports.default = _default;