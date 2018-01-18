"use strict";
exports.__esModule = true;
/**
 * A template Core meant for actual cores to extend
 */
var LibEmuCore = /** @class */ (function () {
    /**
     * The instance's constructor, requires core name and version
     * @param {string} name
     * @param {number} version
     */
    function LibEmuCore(name, version) {
        this.name = name;
        this.version = version;
    }
    /**
     * Returns the core's name
     * @returns {string}
     */
    LibEmuCore.prototype.getName = function () {
        return this.name;
    };
    /**
     * Return the core's version
     * @returns {number}
     */
    LibEmuCore.prototype.getVersion = function () {
        return this.version;
    };
    /**
     * A method called when the core is loaded, all the resources a core needs to access should be called from here
     */
    LibEmuCore.prototype.loadCore = function () {
        throw new Error("Calling dummy loadCore from LibEmuCore, this method is a placeholder and should be replaced by other cores!");
    };
    return LibEmuCore;
}());
exports["default"] = LibEmuCore;
