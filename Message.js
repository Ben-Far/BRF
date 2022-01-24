"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("../utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Message = function Message(config) {
  _classCallCheck(this, Message);

  var tc = config.tc,
      D = config.D,
      FMD = config.FMD,
      VcpuMD = config.VcpuMD;
  var rand = (0, _utils.getRndInteger)(0, 1);
  this.type = 't1';
  this.size = 60;
  this.tc = tc;
  this.VcpuMD = VcpuMD;
  this.tw = this.tc + 1;
  this.D = D;
  this.FMD = FMD;
  this.Bmax = 10;
  this.Bmin = 1;
  this.Ptrans = 1;
  this.Ptoffloads = 0.8;
  this.PMDt = this.VcpuMD * this.D;
  this.TOffload = 10;
  this.TMDExe = D / FMD;
  this.tComp = this.tc + 60;
  this.TComp = this.tComp - this.tw - 1;
  this.tMDExe = this.tComp - this.TMDExe + 1;
  this.tOffTw = this.tw + 10;
  this.twActAlgOfflineBound = null;
  this.TtxUp = 0;
  this.TMECExe = 0;
  this.TtxDown = 0;
  this.exeMode = 0;
  this.PMDexe = 0;
  this.PoffloadTs = 0;
  this.currentTime = 0;
};

exports["default"] = Message;