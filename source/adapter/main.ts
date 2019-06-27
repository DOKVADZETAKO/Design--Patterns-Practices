import {Soldier, Jedi, JediAdapter} from "./index";


let soldier = new Soldier(20);
let jedi = new Jedi(55);
let adaptedJedi = new JediAdapter(jedi);

console.log(soldier.attack());
console.log(jedi.attackWithSaber());
console.log(adaptedJedi.attack());