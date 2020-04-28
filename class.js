class Employee {
  constructor(_n, _a, _s) {
    this.name = _n;
    this.age = _a;
    this.salary = _s;
  }
  name;
  age;
  salary;
  getInfo = () => {
    return `${this.name}`;
  };
}

const p1 = new Employee('John', 25, 4000);
console.log(p1.getInfo());

class Manager extends Employee {
  constructor(_n, _a, _s) {
    super(_n, _a, _s);
  }
  incentive;
  setIncentive = (num) => {
    this.incentive = num;
  };
  getTotalSalary = () => {
    return this.salary + this.incentive;
  };
}

const m1 = new Manager('Michael', 40, 9000);
m1.setIncentive(2000);
console.log(m1.getTotalSalary());
console.log(m1.age);
