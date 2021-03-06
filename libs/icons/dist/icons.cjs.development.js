'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var icons = require('@material-ui/icons');
var core = require('@material-ui/core');
var React = _interopDefault(require('react'));

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded = ["completed"];
var CustomStepIcon = function CustomStepIcon(_ref) {
  var completed = _ref.completed,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  if (completed) {
    return React.createElement(core.SvgIcon, {
      viewBox: "0 0 24 24",
      color: "primary",
      width: "24",
      height: "24"
    }, React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "12"
    }), React.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M18.6726 7.24408C18.998 7.56951 18.998 8.09715 18.6726 8.42259L10.7559 16.3393C10.4305 16.6647 9.90285 16.6647 9.57741 16.3393L6.24408 13.0059C5.91864 12.6805 5.91864 12.1528 6.24408 11.8274C6.56951 11.502 7.09715 11.502 7.42259 11.8274L10.1667 14.5715L17.4941 7.24408C17.8195 6.91864 18.3472 6.91864 18.6726 7.24408Z",
      fill: "white"
    }));
  }

  return React.createElement(core.StepIcon, Object.assign({}, props));
};

var ReminderIcon = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return React.createElement(core.SvgIcon, Object.assign({
    viewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), React.createElement("path", {
    d: "M15.8197 15.1326L14.6057 13.3493V11.1244C14.6057 9.62395 13.5372 8.37323 12.1195 8.09137V7.40624C12.1195 7.07133 11.848 6.7998 11.5131 6.7998C11.1781 6.7998 10.9066 7.07133 10.9066 7.40624V8.0914C9.48899 8.37328 8.42041 9.624 8.42041 11.1244V13.3493L7.20642 15.1327C7.07854 15.3205 7.06502 15.5636 7.17127 15.7645C7.27753 15.9654 7.48612 16.091 7.71336 16.091H15.3128C15.54 16.091 15.7486 15.9654 15.8549 15.7645C15.9611 15.5636 15.9476 15.3205 15.8197 15.1326Z"
  }), React.createElement("path", {
    d: "M10.164 16.8188L10.1637 16.8277C10.1637 17.5727 10.7677 18.1766 11.5126 18.1766C12.2576 18.1766 12.8615 17.5727 12.8615 16.8277L12.8613 16.8188H10.164Z"
  }), React.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M11.5 2C5.70101 2 1 6.70101 1 12.5C1 18.299 5.70101 23 11.5 23C17.299 23 22 18.299 22 12.5C22 6.70101 17.299 2 11.5 2ZM2 12.5C2 7.25329 6.25329 3 11.5 3C16.7467 3 21 7.25329 21 12.5C21 17.7467 16.7467 22 11.5 22C6.25329 22 2 17.7467 2 12.5Z"
  }));
});

Object.keys(icons).forEach(function (k) {
  if (k !== 'default') Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () {
      return icons[k];
    }
  });
});
exports.CustomStepIcon = CustomStepIcon;
exports.ReminderIcon = ReminderIcon;
//# sourceMappingURL=icons.cjs.development.js.map
