"use strict";
exports.__esModule = true;
var MemoryMap = /** @class */ (function () {
    function MemoryMap(size) {
        this.size = size;
        this.map = [];
    }
    MemoryMap.prototype.isMapped = function (address) {
        for (var entry in this.map) {
            console.log(entry);
        }
        return false;
    };
    MemoryMap.prototype.maapMemoryModule = function (address, module) {
        if (address + module.size > this.size)
            throw new Error("Out of bounds memory map attempt");
        if (this.isMapped(address))
            throw new Error("Memory already mapped!");
        this.map.push(new MemoryMapEntry(address, module));
    };
    return MemoryMap;
}());
exports["default"] = MemoryMap;
var MemoryMapEntry = /** @class */ (function () {
    function MemoryMapEntry(address, memoryModule) {
        this.address = address;
        this.memoryModule = memoryModule;
    }
    return MemoryMapEntry;
}());
exports.MemoryMapEntry = MemoryMapEntry;
