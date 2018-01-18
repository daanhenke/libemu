import LibEmuCore from '../commons/LibEmuCore';
import LibEmu from "../libemu";


export default class CoreChip8 extends LibEmuCore {
    private static instance: CoreChip8;

    public static getInstance(): CoreChip8 {
        if (CoreChip8.instance === undefined)
            CoreChip8.instance = new CoreChip8();
        return CoreChip8.instance;
    }

    constructor() {
        super('CoreChip8', 0.01);
    }

    loadCore(): void {
        let emu = LibEmu.getInstance();

    }
}

LibEmu.getInstance().registerCore(CoreChip8.getInstance());