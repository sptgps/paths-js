define(['exports', 'module', './path', './ops'], function (exports, module, _path, _ops) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

  var _Path2 = _interopRequireDefault(_path);

  module.exports = function (_ref) {
    var _Path$moveto$arc$lineto, _Path$moveto$arc, _Path$moveto, _Path;

    var center = _ref.center;
    var r = _ref.r;
    var R = _ref.R;
    var start = _ref.start;
    var end = _ref.end;

    var a = (0, _ops.plus)(center, (0, _ops.onCircle)(R, start));
    var b = (0, _ops.plus)(center, (0, _ops.onCircle)(R, end));
    var c = (0, _ops.plus)(center, (0, _ops.onCircle)(r, end));
    var d = (0, _ops.plus)(center, (0, _ops.onCircle)(r, start));

    var large = end - start > Math.PI ? 1 : 0;

    var path = (_Path$moveto$arc$lineto = (_Path$moveto$arc = (_Path$moveto = (_Path = (0, _Path2['default'])()).moveto.apply(_Path, _toConsumableArray(a))).arc.apply(_Path$moveto, [R, R, 0, large, 1].concat(_toConsumableArray(b)))).lineto.apply(_Path$moveto$arc, _toConsumableArray(c))).arc.apply(_Path$moveto$arc$lineto, [r, r, 0, large, 0].concat(_toConsumableArray(d))).closepath();

    var midAngle = (start + end) / 2;
    var midRadius = (r + R) / 2;
    var centroid = (0, _ops.plus)(center, (0, _ops.onCircle)(midRadius, midAngle));

    return {
      path: path,
      centroid: centroid
    };
  };
});