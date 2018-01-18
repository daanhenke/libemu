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
    var MemoryModule = /** @class */ (function () {
        function MemoryModule(size) {
            this.size = size;
            this.buffer = new ArrayBuffer(this.size);
            this.array = new Uint8Array(this.buffer);
        }
        MemoryModule.prototype.getByte = function (address) {
            address %= this.size;
            return this.array[address];
        };
        MemoryModule.prototype.setByte = function (address, value) {
            address %= this.size;
            this.array[address] = value;
        };
        MemoryModule.prototype.copyBytes = function (buffer, from, to, length) {
            var array = new Uint8Array(buffer);
            for (var i = 0; i < length; i++) {
                this.array[to + i] = array[from + i];
            }
        };
        MemoryModule.prototype.fillBytes = function (value, to, length) {
            for (var i = 0; i < length; i++)
                this.array[to + i] = value;
        };
        return MemoryModule;
    }());
    exports.default = MemoryModule;
});
//# sourceMappingURL=MemoryModule.js.map