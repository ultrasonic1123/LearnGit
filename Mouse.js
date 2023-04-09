function Mouse(name, skill = []) {
  this.name = name;
  this.skill = skill;
}

Mouse.prototype.hiding = function () {
  //   this.skill = this.skill.push("invisible jutsu!");
  this.skill.push("invisible jutsu!");
};

module.exports = Mouse;
