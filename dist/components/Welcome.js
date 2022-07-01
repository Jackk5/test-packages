"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

const Welcome = () => {
  (0, _react.useEffect)(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return /*#__PURE__*/_react.React.createElement("div", {
    className: "preloader container"
  }, /*#__PURE__*/_react.React.createElement("div", {
    className: "decorate"
  }, /*#__PURE__*/_react.React.createElement("div", {
    className: "small-full"
  }), /*#__PURE__*/_react.React.createElement("div", {
    className: "small-border"
  }), /*#__PURE__*/_react.React.createElement("div", {
    className: "big-border"
  }), /*#__PURE__*/_react.React.createElement("div", {
    className: "big-full"
  })), /*#__PURE__*/_react.React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.React.createElement("p", null, "WELCOME"), /*#__PURE__*/_react.React.createElement("div", {
    className: "button"
  }, "Let's start")));
};

var _default = Welcome;
exports.default = _default;