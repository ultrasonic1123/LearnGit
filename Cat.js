function Cat(name, skill = []) {
  this.name = name;
  this.skill = skill;
}
console.log("i want this line make conflict");
console.log("this line is norm");
module.exports = Cat;
