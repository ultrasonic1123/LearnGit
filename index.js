const Dog = require("./Dog");
const Cat = require("./Cat");
const Mouse = require("./Mouse");
let hungryCat = new Cat("Tom", ["catch mouse", "playing with ball"]);

let thirstyDog = new Dog("Jonh", ["catch meow", "scare human"]);

let smartMouse = new Mouse("mike", ["locate food"]);
console.log({ hungryCat });
console.log({ thirstyDog });

smartMouse.hiding();

console.log({ smartMouse });
