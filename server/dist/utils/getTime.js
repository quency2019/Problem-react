"use strict";

require("core-js/modules/es.date.to-string");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNowTime = getNowTime;

function getNowTime() {
  return new Date().getTime() / 1000;
}