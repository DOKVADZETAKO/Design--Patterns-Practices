import { ShoppingCart, guestStrategy, regularStrategy, premiumStrategy } from "./index"

let guest = guestStrategy(10);
let regular = regularStrategy(20);
let premium = premiumStrategy(5);
let card = new ShoppingCart(guestStrategy);
card.checkout();

console.log(card.checkout())