import MemoryModule from "./MemoryModule";

export default class MemoryMap {
    size: number;
    map: MemoryMapEntry[];

    constructor(size: number) {
        this.size = size;
        this.map = [];
    }

    isMapped(address: number) {
        for (let entry in this.map) {
            console.log(entry);
        }

        return false;
    }

    maapMemoryModule(address: number, module: MemoryModule) {
        if (address + module.size > this.size)
            throw new Error("Out of bounds memory map attempt");
        if (this.isMapped(address))
            throw new Error("Memory already mapped!");
        
        this.map.push(new MemoryMapEntry(address, module));
    }
}

export class MemoryMapEntry {
    address: number;
    memoryModule: MemoryModule;

    constructor(address: number, memoryModule: MemoryModule) {
        this.address = address;
        this.memoryModule = memoryModule;
    }
}
