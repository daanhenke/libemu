import LibEmuCore from './commons/LibEmuCore';

/**
 * The LibEmu singleton, it is what controls the emulation cores and holds most information
 */
export default class LibEmu {
    private static instance: LibEmu;

    /**
     * Grants access to the actual class
     * @returns {LibEmu}
     */
    public static getInstance(): LibEmu {
        if (LibEmu.instance === undefined)
            LibEmu.instance = new LibEmu();
        return LibEmu.instance;
    }

    private cores: LibEmuCore[];
    private version = 0.01;

    /**
     * The instance's constructor, should not be called by anyone except for LibEmu itself
     */
    constructor() {
        this.cores = [];

    }

    /**
     * Returns the version number
     * @returns {number}
     */
    public getVersion(): number {
        return this.version;
    }

    /**
     * Will register a core to LibEmu, this should only be called by cores that have not been registered to LibEmu yet
     * @param {LibEmuCore} core
     */
    public registerCore(core: LibEmuCore): void {
        this.cores.push(core);
        core.loadCore();

        console.log(`Loaded core ${core.getName()} version ${core.getVersion()}`);
    }
}