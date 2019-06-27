import { Idroid, droidType } from "./interfaces"

function droidProducer(kind: droidType) {
    if (kind === 'battle') {
        return battleDroidFactory();
    }
    return pilotDroidFactory();
}

function battleDroidFactory(): Idroid {
    return new B1();
}

function pilotDroidFactory(): Idroid {
    return new Rx24();
}

class B1 implements Idroid {
    info() {
        return "B1, Battle Droid";
    }
}

class Rx24 implements Idroid {
    info() {
        return "Rx24, Pilot Droid";
    }
}

export default droidProducer;
