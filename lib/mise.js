"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMouse = exports.getFilledInPixels = exports.drawImage = exports.distanceBetween = exports.angleBetween = void 0;
var drawImage = exports.drawImage = function drawImage(canvas, image, width, height) {
  var ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.drawImage(image, 0, 0, width, height);
};
var getMouse = exports.getMouse = function getMouse(event, canvas) {
  var result = {
    x: 0,
    y: 0
  };
  var offset = {
    x: 0,
    y: 0
  };
  if (canvas.offsetParent !== undefined) {
    if (canvas.offsetParent instanceof HTMLElement) {
      do {
        offset.x += canvas.offsetLeft;
        offset.y += canvas.offsetTop;
      } while (canvas = canvas.offsetParent);
    }
  }
  if (event instanceof TouchEvent) {
    result.x = event.touches[0].clientX - offset.x;
    result.y = event.touches[0].clientY - offset.y;
  } else {
    result.x = event.pageX - offset.x;
    result.y = event.pageY - offset.y;
  }
  return result;
};
var distanceBetween = exports.distanceBetween = function distanceBetween(point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
};
var angleBetween = exports.angleBetween = function angleBetween(point1, point2) {
  return Math.atan2(point2.x - point1.x, point2.y - point1.y);
};
var getFilledInPixels = exports.getFilledInPixels = function getFilledInPixels(stride, canvas, width, height) {
  if (!stride || stride < 1) stride = 1;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;
  var pixels = ctx.getImageData(0, 0, width, height),
    data = pixels.data,
    l = data.length,
    total = l / stride,
    count = 0;
  for (var i = count = 0; i < l; i += stride) {
    if (parseInt(String(data[i])) === 0) {
      count++;
    }
  }
  return Math.round(count / total * 100);
};