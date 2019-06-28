import { Product, Fees, Proft } from "./index"

let prod = new Product();
prod.setBasePrice(5);
let fees = new Fees();
prod.register(fees);
let proft = new Proft();
prod.register(proft);

console.log(prod.register(proft))