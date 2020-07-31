"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeResult = writeResult;

function writeResult(status, msg, data) {
  return {
    status: status,
    msg: msg,
    data: data
  };
}