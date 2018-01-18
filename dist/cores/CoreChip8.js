"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var LibEmuCore_1 = require("../commons/LibEmuCore");
var libemu_1 = require("../libemu");
var CoreChip8 = /** @class */ (function (_super) {
    __extends(CoreChip8, _super);
    function CoreChip8() {
        return _super.call(this, 'CoreChip8', 0.01) || this;
    }
    CoreChip8.getInstance = function () {
        if (CoreChip8.instance === undefined)
            CoreChip8.instance = new CoreChip8();
        return CoreChip8.instance;
    };
    CoreChip8.prototype.loadCore = function () {
        var emu = libemu_1["default"].getInstance();
    };
    return CoreChip8;
}(LibEmuCore_1["default"]));
exports["default"] = CoreChip8;
libemu_1["default"].getInstance().registerCore(CoreChip8.getInstance());
