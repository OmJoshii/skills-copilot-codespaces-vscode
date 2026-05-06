function skillsMember(name, age, skill) {
    this.name = name;
    this.age = age;
    this.skill = skill;
}

skillsMember.prototype.showInfo = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Skill: ${this.skill}`);
};

const member1 = new skillsMember("Alice", 30, "JavaScript");
const member2 = new skillsMember("Bob", 25, "Python");

member1.showInfo(); // Output: Name: Alice, Age: 30, Skill: JavaScript
member2.showInfo(); // Output: Name: Bob, Age: 25, Skill: Python