function Cat(name, skill = []) {
  this.name = name;
  this.skill = skill;
}
console.log("i want this line make conflict")
module.exports = Cat;
