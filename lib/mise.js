define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getFilledInPixels = exports.angleBetween = exports.distanceBetween = exports.getMouse = exports.drawImage = void 0;
    var drawImage = function (canvas, image) {
        var ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        ctx.drawImage(image, 0, 0);
    };
    exports.drawImage = drawImage;
    var getMouse = function (event, canvas) {
        var _a, _b;
        var result = { x: 0, y: 0 };
        var offset = { x: 0, y: 0 };
        if (canvas.offsetParent !== undefined) {
            if (canvas.offsetParent instanceof HTMLElement) {
                offset.x += (_a = canvas.offsetParent) === null || _a === void 0 ? void 0 : _a.offsetLeft;
                offset.y += (_b = canvas.offsetParent) === null || _b === void 0 ? void 0 : _b.offsetTop;
            }
        }
        if (event instanceof TouchEvent) {
            result.x = event.touches[0].clientX - offset.x;
            result.y = event.touches[0].clientY - offset.y;
        }
        else {
            result.x = event.pageX - offset.x;
            result.y = event.pageY - offset.y;
        }
        return result;
    };
    exports.getMouse = getMouse;
    var distanceBetween = function (point1, point2) {
        return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    };
    exports.distanceBetween = distanceBetween;
    var angleBetween = function (point1, point2) {
        return Math.atan2(point2.x - point1.x, point2.y - point1.y);
    };
    exports.angleBetween = angleBetween;
    var getFilledInPixels = function (stride, canvas, width, height) {
        if (!stride || stride < 1)
            stride = 1;
        var ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        var pixels = ctx.getImageData(0, 0, width, height), pdata = pixels.data, l = pdata.length, total = l / stride, count = 0;
        for (var i = (count = 0); i < l; i += stride) {
            if (parseInt(String(pdata[i])) === 0) {
                count++;
            }
        }
        return Math.round((count / total) * 100);
    };
    exports.getFilledInPixels = getFilledInPixels;
});
