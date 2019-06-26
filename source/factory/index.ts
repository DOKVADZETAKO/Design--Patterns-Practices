import { IBmw, BmwType } from "./interfaces"

class BmwFactory {
    static create(type: BmwType) {
        if (type === 'X5')
            return new Bmw(type, 108000, 300);
        if (type === 'X6')
            return new Bmw(type, 111000, 320);
    }
}

class Bmw implements IBmw {
    constructor(public model: BmwType, public price: number, public maxSpeed: number) { }
}

export default BmwFactory;
