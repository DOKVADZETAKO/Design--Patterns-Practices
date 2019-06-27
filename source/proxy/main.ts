import { Car, CarProxy, Driver } from "./index"

let cars = new Car();
let drivers = new Driver(20);
let carproxy = new CarProxy(drivers);

console.log(carproxy.drive());