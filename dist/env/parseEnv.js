"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJsonFromFile = exports.env = void 0;
var env = exports.env = function env(key) {
  var value = process.env[key];
  if (!value) {
    throw Error("No envieonment variable found for ".concat(key));
  }
  return value;
};
var getJsonFromFile = exports.getJsonFromFile = function getJsonFromFile(path) {
  return require("".concat(process.cwd()).concat(path));
};