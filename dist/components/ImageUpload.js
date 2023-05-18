"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _reactDraggable = _interopRequireDefault(require("react-draggable"));
var _material = require("@mui/material");
var _Button = _interopRequireDefault(require("./Button"));
var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = _interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function PaperComponent(props) {
  return /*#__PURE__*/_react.default.createElement(_reactDraggable.default, {
    handle: "#draggable-dialog-title",
    cancel: '[class*="MuiDialogContent-root"]'
  }, /*#__PURE__*/_react.default.createElement(_Paper.default, props));
}
function ImageUpload(_ref) {
  let {
    open,
    handleClose
  } = _ref;
  const [width, setWidth] = (0, _react.useState)("300px");
  const [height, setHeight] = (0, _react.useState)("300px");
  const [altText, setAltText] = (0, _react.useState)("image");
  const [image, setImage] = (0, _react.useState)();
  const imageHandler = input => {
    if (input.target.files && input.target.files[0]) {
      const reader = new FileReader();
      reader.onload = e => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(input.target.files[0]);
    }
  };
  const onWidthChange = e => {
    setWidth("".concat(e.target.value, "px"));
  };
  const onHeightChange = e => {
    setHeight("".concat(e.target.value, "px"));
  };
  const onAltTextChange = e => {
    setAltText(e.target.value);
  };
  const handleSubmit = e => {
    if (image) {
      const imageTag = document.createElement('img');
      imageTag.setAttribute('src', image);
      imageTag.setAttribute('alt', altText);
      imageTag.setAttribute('height', height);
      imageTag.setAttribute('width', width);
      imageTag.onerror = function handleError() {
        console.log('Image could not be loaded');
      };
      imageTag.onload = function handleImageLoaded() {
        console.log('image loaded successfully');
      };
      const container = document.querySelector(".ql-editor");
      container.appendChild(imageTag);
    }
    e.preventDefault();
    handleClose();
  };
  return /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    open: open,
    onClose: handleClose,
    PaperComponent: PaperComponent,
    "aria-labelledby": "draggable-dialog-title",
    maxWidth: "xs"
  }, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, {
    style: {
      cursor: 'move'
    },
    id: "draggable-dialog-title"
  }, "Add Image"), /*#__PURE__*/_react.default.createElement(_material.Divider, null), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true,
    sx: {
      p: "20px 10px 20px 10px"
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    container: true
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 4,
    sx: {
      pl: "10px"
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "subtitle2"
  }, "URL:")), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 8
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    accept: "image/*",
    onChange: imageHandler,
    style: {
      width: "100%"
    }
  }))), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    container: true,
    sx: {
      pt: "5px"
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 4,
    sx: {
      p: "10px"
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "subtitle2"
  }, "Width (px):")), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 8
  }, /*#__PURE__*/_react.default.createElement(_material.Input, {
    type: "number",
    onChange: onWidthChange,
    style: {
      border: "1px solid",
      width: "100%",
      height: "35px",
      borderRadius: "5px"
    }
  }))), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    container: true,
    sx: {
      pt: "5px"
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 4,
    sx: {
      p: "10px"
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "subtitle2"
  }, "Height (px):")), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 8
  }, /*#__PURE__*/_react.default.createElement(_material.Input, {
    type: "number",
    onChange: onHeightChange,
    style: {
      border: "1px solid",
      width: "100%",
      height: "35px",
      borderRadius: "5px"
    }
  }))), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    container: true,
    sx: {
      pt: "5px"
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 4,
    sx: {
      p: "10px"
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "subtitle2"
  }, "Alternate text:")), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 8
  }, /*#__PURE__*/_react.default.createElement(_material.Input, {
    type: "text",
    onChange: onAltTextChange,
    style: {
      border: "1px solid",
      width: "100%",
      height: "35px",
      borderRadius: "5px"
    }
  })))), /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    text: "OK",
    type: "submit",
    onClick: handleSubmit,
    style: {
      backgroundColor: "#fff !important",
      color: "#000",
      marginLeft: "12px",
      height: "35px",
      width: "90px",
      padding: "0 20px",
      borderRadius: "5px",
      overflow: "visible",
      border: "1px solid"
    }
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    text: "Cancel",
    onClick: handleClose,
    style: {
      backgroundColor: "#fff !important",
      color: "#000",
      marginLeft: "12px",
      height: "35px",
      width: "90px",
      padding: "0 20px",
      borderRadius: "5px",
      overflow: "visible",
      border: "1px solid"
    }
  })));
}
var _default = ImageUpload;
exports.default = _default;