"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.regexp.to-string.js");
var _react = _interopRequireWildcard(require("react"));
var _data_source = _interopRequireDefault(require("devextreme/data/data_source"));
var _selectBox = _interopRequireDefault(require("devextreme-react/select-box"));
var _AddAPhoto = _interopRequireDefault(require("@mui/icons-material/AddAPhoto"));
var _material = require("@mui/material");
var _ImageUpload = _interopRequireDefault(require("./ImageUpload"));
var _htmlEditor = _interopRequireWildcard(require("devextreme-react/html-editor"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const sizeValues = ["8px", "10px", "12px", "14px", "18px", "24px", "36px"];
const fontValues = ["Arial", "Brush Script MT", "Courier New", "Garamond ", "Georgia", "Helvetica ", "Impact", "Lucida Console", "Tahoma", "Trebuchet MS", "Times New Roman", "Verdana"];
const sizeDataSource = new _data_source.default({
  store: {
    data: sizeValues,
    type: "array"
  }
});
const TextEditor = props => {
  const [open, setOpen] = (0, _react.useState)(false);
  const fontSizeValueChanged = _ref => {
    let {
      component
    } = _ref;
    const fontSize = component.option("selectedItem");
    const container = document.querySelector(".ql-editor");
    const pTag = document.querySelector("p:not([class])");
    const fontAttribute = document.createElement("span");
    fontAttribute.style.fontSize = fontSize;
    let text = " ";
    let result = text.replace(/^\s+|\s+$/gm, '');
    console.log(fontAttribute, "length");
    pTag.appendChild(fontAttribute);
    fontAttribute.innerHTML = " ";
  };
  const customItemCreating = args => {
    const newItem = "".concat(args.text, "px");
    if (!args.text) {
      args.customItem = null;
      return;
    }
    if (!sizeValues.includes(newItem)) {
      console.log(newItem, sizeValues);
      console.log(sizeValues.includes(newItem));
      args.customItem = sizeDataSource.store().insert(newItem).then(() => sizeDataSource.load()).then(() => newItem).catch(error => {
        throw error;
      });
    } else {
      args.customItem = null;
    }
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fontChange = () => {
    var text = "";
    if (window.getSelection) {
      text = window.getSelection().toString();
    }
    console.log(text, "selected text");
    return text;
  };
  document.onmouseup = document.onkeyup = document.onselectionchange = function () {
    //   document.querySelector("p:not([class])").value = fontChange();
    fontChange();
  };
  return /*#__PURE__*/_react.default.createElement(_htmlEditor.default, {
    height: props.height ? props.height : '800px',
    width: props.width ? props.width : '100%',
    style: {
      backgroundColor: props.backgroundColor ? props.backgroundColor : "white"
    }
  }, /*#__PURE__*/_react.default.createElement(_htmlEditor.MediaResizing, {
    enabled: true
  }), /*#__PURE__*/_react.default.createElement(_htmlEditor.Toolbar, {
    style: {
      backgroundColor: "red"
    }
  }, /*#__PURE__*/_react.default.createElement(_htmlEditor.Item, {
    name: "undo"
  }), /*#__PURE__*/_react.default.createElement(_htmlEditor.Item, {
    name: "redo"
  }), /*#__PURE__*/_react.default.createElement(_htmlEditor.Item, {
    name: "separator"
  }), /*#__PURE__*/_react.default.createElement(_htmlEditor.Item, {
    acceptedValues: sizeValues
  }, /*#__PURE__*/_react.default.createElement(_selectBox.default, {
    style: {
      border: "none"
    },
    dataSource: sizeDataSource,
    acceptCustomValue: true,
    defaultValue: "12px",
    onCustomItemCreating: customItemCreating,
    onValueChanged: fontSizeValueChanged
  })), /*#__PURE__*/_react.default.createElement(_htmlEditor.Item, {
    name: "font",
    acceptedValues: fontValues
  }), /*#__PURE__*/_react.default.createElement(_htmlEditor.Item, {
    name: "separator"
  }), /*#__PURE__*/_react.default.createElement(_htmlEditor.Item, {
    name: "bold"
  }), /*#__PURE__*/_react.default.createElement(_htmlEditor.Item, {
    name: "italic"
  }), /*#__PURE__*/_react.default.createElement(_htmlEditor.Item, {
    name: "strike"
  }), /*#__PURE__*/_react.default.createElement(_htmlEditor.Item, {
    name: "underline"
  }), /*#__PURE__*/_react.default.createElement(_htmlEditor.Item, {
    name: "separator"
  }), /*#__PURE__*/_react.default.createElement(_htmlEditor.Item, {
    name: "alignLeft"
  }), /*#__PURE__*/_react.default.createElement(_htmlEditor.Item, {
    name: "alignCenter"
  }), /*#__PURE__*/_react.default.createElement(_htmlEditor.Item, {
    name: "alignRight"
  }), /*#__PURE__*/_react.default.createElement(_htmlEditor.Item, {
    name: "alignJustify"
  }), /*#__PURE__*/_react.default.createElement(_htmlEditor.Item, {
    name: "separator"
  }), /*#__PURE__*/_react.default.createElement(_htmlEditor.Item, {
    name: "color"
  }), /*#__PURE__*/_react.default.createElement(_htmlEditor.Item, {
    name: "background"
  }), /*#__PURE__*/_react.default.createElement(_htmlEditor.Item, {
    name: "separator"
  }), /*#__PURE__*/_react.default.createElement(_htmlEditor.Item, {
    name: "link"
  }), /*#__PURE__*/_react.default.createElement(_htmlEditor.Item, null, /*#__PURE__*/_react.default.createElement(_material.IconButton, {
    onClick: handleOpen
  }, /*#__PURE__*/_react.default.createElement(_AddAPhoto.default, {
    fontSize: "small",
    sx: {
      color: "black"
    }
  })))), /*#__PURE__*/_react.default.createElement(_ImageUpload.default, {
    open: open,
    handleClose: handleClose
  }));
};
var _default = TextEditor;
exports.default = _default;