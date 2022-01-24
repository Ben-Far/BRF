"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("../utils");

var _BinaryTree = _interopRequireDefault(require("./BinaryTree"));

var _Message = _interopRequireDefault(require("./Message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Mobile = /*#__PURE__*/function () {
  function Mobile(id) {
    _classCallCheck(this, Mobile);

    this.id = id;
    this.messages = [];
  }

  _createClass(Mobile, [{
    key: "send",
    value: function send(message) {
      console.log(this.id, this.serverId, message.creation);
    }
  }, {
    key: "allocateServer",
    value: function allocateServer(id) {
      this.serverId = id;
      this.serverMu = {
        't1': 5,
        't2': 10
      };
    }
  }, {
    key: "exec",
    value: function exec() {
      return message.size * 15;
    }
  }, {
    key: "generateMessage",
    value: function generateMessage(creation) {
      var message = new _Message["default"](creation);
      this.messages.push(message);
      return message;
    }
  }, {
    key: "run",
    value: function run() {
      var config = {
        tc: 0,
        D: 10 * Math.pow(10, 6),
        FMD: 1 * Math.pow(10, 6),
        VcpuMD: 2 * Math.pow(10, -6),
        runtime: 100
      };
      var message = this.generateMessage(config);
      console.log('-------------OfflineBound-------------');
      var PtList = [];
      var PMDexeList = []; // time changes over simulation

      for (var t = 1; t <= config.runtime; t++) {
        var Pt = 0;

        if (t < message.tMDExe) {
          Pt = message.Ptrans;
        } else {
          Pt = message.Ptrans + message.PMDt / message.TMDExe;
        }

        PtList.push({
          t: t,
          value: Pt
        }); // calculation of PMDexe

        var PMDexe = 0;
        var Poffload = 0;

        if (t >= 1 && t < message.tMDExe) {
          var tmp = [];

          for (var Toffload = message.tMDExe - t + 1; Toffload < message.size / message.Bmin; Toffload++) {
            tmp.push(message.Ptoffloads * (Math.min(message.tComp + 1, t + Toffload) - message.tMDExe) / message.TMDExe * message.PMDt);
          }

          PMDexe = _utils.sum.apply(void 0, tmp);
        } else if (t >= message.tMDExe && t < message.tComp) {
          var _tmp = [];

          for (var _Toffload = message.size / message.Bmax; _Toffload < message.size / message.Bmin; _Toffload++) {
            _tmp.push(message.Ptoffloads * (Math.min(message.tComp + 1, t + _Toffload) - message.tMDExe) / message.TMDExe * message.PMDt);
          }

          PMDexe = _utils.sum.apply(void 0, _tmp);
        } else {
          PMDexe = message.PMDt;
        } // calculation of Poffload


        if (t >= 1 && t < message.tComp - message.size / message.Bmin + 1) {
          var _tmp2 = [];

          for (var _Toffload2 = message.size / message.Bmax; _Toffload2 < message.size / message.Bmin; _Toffload2++) {
            _tmp2.push(message.Ptoffloads * message.TOffload);
          }

          Poffload = (0, _utils.sum)(_tmp2);
        } else if (t >= message.tComp - message.size / message.Bmin + 1 && t < message.tComp) {
          var tmp1 = [];
          var tmp2 = [];

          for (var _Toffload3 = message.size / message.Bmax; _Toffload3 < message.tComp - t; _Toffload3++) {
            tmp1.push(message.Ptoffloads * message.TOffload);
          }

          for (var _Toffload4 = message.tComp - t + 1; _Toffload4 < message.size / message.Bmin; _Toffload4++) {
            tmp2.push(message.Ptoffloads * (message.tComp - t + 1));
          }

          Poffload = _utils.sum.apply(void 0, tmp1) + _utils.sum.apply(void 0, tmp2);
        } else {
          Poffload = 0;
        }

        console.log('t => ', t);
        console.log('-----------PMDexe----------------');
        console.log('1:', "".concat(t, " >= 1 && ").concat(t, " < ").concat(message.tMDExe));
        console.log('2:', "".concat(t, " >= ").concat(message.tMDExe, " && ").concat(t, " < ").concat(message.tComp));
        console.log('3:', "".concat(t, " >= ").concat(message.tComp));
        console.log('PMDexe', PMDexe);
        PMDexeList.push({
          t: t,
          value: PMDexe
        });
        console.log('-----------Poffload----------------');
        console.log('1:', "".concat(t, ">=").concat(message.tComp - message.size / message.Bmin + 1, " && ").concat(t, "< ").concat(message.tComp));
        console.log('2:', "".concat(t, ">=").concat(message.tComp - message.size / message.Bmin + 1, " && ").concat(t < message.tComp));
        console.log('3:', "".concat(t, ">= ").concat(message.tComp));
        console.log('Poffload', Poffload);
      }

      var mintwList = [];

      var _loop = function _loop(twCalc) {
        var PtList_tw_tOffTw = PtList.filter(function (x) {
          return x.t >= twCalc && x.t <= twCalc + 10;
        }).map(function (x) {
          return x.value;
        }).reduce(function (a, b) {
          return a + b;
        });
        var p1 = (Math.max(message.tw, message.tMDExe) - message.tMDExe) / message.TMDExe * message.PMDt + PtList_tw_tOffTw;

        if (p1 < message.PMDt) {
          mintwList.push({
            t: twCalc,
            value: p1
          });
        }
      };

      for (var twCalc = 1; twCalc <= message.tComp; twCalc++) {
        _loop(twCalc);
      }

      console.log('-----------mintwList----------------');
      console.log(mintwList); // make decision

      var minValue_mintwList = Math.min.apply(Math, _toConsumableArray(mintwList.map(function (x) {
        return x.value;
      })));
      var filtered_mintwList = mintwList.filter(function (x) {
        return x.value === minValue_mintwList;
      });
      var index = (0, _utils.getRndInteger)(0, filtered_mintwList.length - 1);
      var offlineBoundDecision = filtered_mintwList[index];
      console.log('offlineBoundDecision', offlineBoundDecision);
      message.twActAlgOfflineBound = offlineBoundDecision.t;
      console.log('-------------TDAMC-------------');
      var tree = new _BinaryTree["default"](1, 10);
      console.log(tree.find(122).value);
    }
  }, {
    key: "linkQuality",
    value: function linkQuality() {
      var rand = (0, _utils.getRndInteger)(0, 1);
      return rand ? 50 : 10;
    }
  }, {
    key: "estExecDurationMD",
    value: function estExecDurationMD() {
      return 10;
    }
  }, {
    key: "estExecPowerMD",
    value: function estExecPowerMD() {
      return 20;
    }
  }, {
    key: "estExecPowerOffload",
    value: function estExecPowerOffload() {
      return 20;
    }
  }, {
    key: "mdp",
    value: function mdp() {
      return 'MD';
    }
  }, {
    key: "getEts",
    value: function getEts() {
      return;
    }
  }]);

  return Mobile;
}();

exports["default"] = Mobile;