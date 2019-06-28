import { originator, Caretaker } from "./index"

let restoreMemento = originator.restore(originator.store(10));
let caretaker = new Caretaker();
caretaker.addMemento(originator.store(10));
console.log(originator.store(10));