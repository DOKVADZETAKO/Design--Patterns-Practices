import { Idriver } from "./interfaces"

class Car {
    drive() {
        return "driving";
    };
}

class CarProxy {
    constructor(public driver: Idriver) { }
    drive(): string {
        return (this.driver.age < 18) ? "too young to drive" : new Car().drive();
    }
}

class Driver implements Idriver {
    constructor(public age: number) { }
}

export {
    Car,
    CarProxy,
    Driver
};