export default class MemoryModule {
    public size: number;
    public buffer: ArrayBuffer;
    public array: Uint8Array;

    constructor(size: number) {
        this.size = size;
        this.buffer = new ArrayBuffer(this.size);
        this.array = new Uint8Array(this.buffer);
    }

    getByte(address: number): number {
        address %= this.size;

        return this.array[address];
    }

    setByte(address: number, value: number) {
        address %= this.size;

        this.array[address] = value;
    }

    copyBytes(buffer: ArrayBuffer, from: number, to: number, length: number) {
        let array = new Uint8Array(buffer);

        for (let i = 0; i < length; i++) {
            this.array[to + i] = array[from + i];
        }
    }

    fillBytes(value: number, to: number, length: number) {
        for (let i = 0; i < length; i++)
            this.array[to + i] = value;
    }
}
