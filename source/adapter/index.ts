import { Isoldier, IJedi, IJediAdapter } from "./interfaces"

class Soldier implements Isoldier {
    constructor(public level: number) {
        this.level = level;
    }

    attack() {
        return this.level * 1;
    }
}

class Jedi implements IJedi {
    constructor(public level: number) {
        this.level = level;
    }

    attackWithSaber() {
        return this.level * 100;
    }
}

class JediAdapter extends Jedi implements IJediAdapter {
    constructor(public jedi: IJedi) {
        super(jedi.level);
        this.jedi = jedi;
    }

    attack() {
        return this.jedi.attackWithSaber();
    }
}

export {
    Soldier,
    Jedi,
    JediAdapter
};
