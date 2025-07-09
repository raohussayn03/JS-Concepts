// 07-classes-inheritance-getset.js

// 🎓 Studio Staff System by Tayab Hussayn

class Person {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  intro() {
    console.log(`👤 I'm ${this.name}, working as a ${this.role}.`);
  }
}

class Intern extends Person {
  constructor(name, department) {
    super(name, "Intern");
    this.department = department;
  }

  get internInfo() {
    return `${this.name} is in ${this.department} department.`;
  }

  set updateDepartment(newDept) {
    this.department = newDept;
  }
}

const tayab = new Intern("Tayab Hussayn", "Frontend");
tayab.intro(); // From base class
console.log(tayab.internInfo);

tayab.updateDepartment = "Backend";
console.log(tayab.internInfo);
