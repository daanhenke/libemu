(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LibEmuCore = /** @class */ (function () {
        function LibEmuCore(name, version) {
            this.name = name;
            this.version = version;
        }
        LibEmuCore.prototype.getName = function () {
            return this.name;
        };
        LibEmuCore.prototype.getVersion = function () {
            return this.version;
        };
        LibEmuCore.prototype.loadCore = function () {
            throw new Error("Calling dummy loadCore from LibEmuCore, this method is a placeholder and should be replaced by other cores!");
        };
        return LibEmuCore;
    }());
    exports.default = LibEmuCore;
});
//# sourceMappingURL=LibEmuCore.js.map