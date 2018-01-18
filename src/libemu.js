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
    var LibEmu = /** @class */ (function () {
        function LibEmu() {
            this.version = 0.01;
            this.cores = [];
        }
        LibEmu.getInstance = function () {
            if (LibEmu.instance === undefined)
                LibEmu.instance = new LibEmu();
            return LibEmu.instance;
        };
        LibEmu.prototype.getVersion = function () {
            return this.version;
        };
        LibEmu.prototype.registerCore = function (core) {
            this.cores.push(core);
            core.loadCore();
            console.log("Loaded core " + core.getName() + " version " + core.getVersion());
        };
        return LibEmu;
    }());
    exports.default = LibEmu;
});
//# sourceMappingURL=libemu.js.map