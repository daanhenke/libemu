/**
 * A template Core meant for actual cores to extend
 */
export default class LibEmuCore {
    private name: string;
    private version: number;

    /**
     * The instance's constructor, requires core name and version
     * @param {string} name
     * @param {number} version
     */
    constructor(name: string, version: number) {
        this.name = name;
        this.version = version;
    }

    /**
     * Returns the core's name
     * @returns {string}
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Return the core's version
     * @returns {number}
     */
    public getVersion(): number {
        return this.version;
    }

    /**
     * A method called when the core is loaded, all the resources a core needs to access should be called from here
     */
    public loadCore(): void {
        throw new Error("Calling dummy loadCore from LibEmuCore, this method is a placeholder and should be replaced by other cores!");
    }
}