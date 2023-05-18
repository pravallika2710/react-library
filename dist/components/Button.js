"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.array.includes.js");
var _react = _interopRequireDefault(require("react"));
var _styles = require("@mui/material/styles");
var _Button = _interopRequireDefault(require("@mui/material/Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CustomizedButton = (0, _styles.styled)(_Button.default, {
  shouldForwardProp: prop => !["style"].includes(prop)
})(_ref => {
  let {
    style
  } = _ref;
  return {
    color: style && style.color ? style.color : 'white',
    backgroundColor: style && style.backgroundColor ? style.backgroundColor : '#1A0F7A',
    margin: style && style.margin ? style.margin : '2px 2px 2px 2px',
    border: style && style.border ? style.border : '1px solid',
    '&:hover': {
      backgroundColor: style && style.backgroundColor ? style.backgroundColor : '#584FA4'
    },
    "&:disabled": {
      backgroundColor: style && style.diabledBackgroundColor ? style.diabledBackgroundColor : 'white',
      color: style && style.diabledColor ? style.diabledColor : 'black'
    }
  };
});
const CustomButton = props => {
  var _props$size;
  return /*#__PURE__*/_react.default.createElement(CustomizedButton, {
    variant: props.variant,
    size: (_props$size = props.size) !== null && _props$size !== void 0 ? _props$size : 'medium',
    onClick: props.onClick,
    disabled: props.disabled
  }, props.label);
};
var _default = CustomButton;
exports.default = _default;