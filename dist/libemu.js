"use strict";
exports.__esModule = true;
/**
 * The LibEmu singleton, it is what controls the emulation cores and holds most information
 */
var LibEmu = /** @class */ (function () {
    /**
     * The instance's constructor, should not be called by anyone except for LibEmu itself
     */
    function LibEmu() {
        this.version = 0.01;
        this.cores = [];
    }
    /**
     * Grants access to the actual class
     * @returns {LibEmu}
     */
    LibEmu.getInstance = function () {
        if (LibEmu.instance === undefined)
            LibEmu.instance = new LibEmu();
        return LibEmu.instance;
    };
    /**
     * Returns the version number
     * @returns {number}
     */
    LibEmu.prototype.getVersion = function () {
        return this.version;
    };
    /**
     * Will register a core to LibEmu, this should only be called by cores that have not been registered to LibEmu yet
     * @param {LibEmuCore} core
     */
    LibEmu.prototype.registerCore = function (core) {
        this.cores.push(core);
        core.loadCore();
        console.log("Loaded core " + core.getName() + " version " + core.getVersion());
    };
    return LibEmu;
}());
exports["default"] = LibEmu;
