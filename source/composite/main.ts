import { Cabinet, FloppyDisk, HardDrive, Memory } from "./index"

let cabin = new Cabinet();
let floppy = new FloppyDisk();
let hardD = new HardDrive();
let memo = new Memory();

cabin.add(floppy);

console.log(cabin.getPrice());